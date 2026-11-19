import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoaderCircle, RotateCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfViewerModalProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export const PdfViewerModal = ({ url, title, onClose }: PdfViewerModalProps) => {
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!url) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [url, onClose]);

  useEffect(() => {
    if (!url) {
      setViewerUrl(null);
      setLoadError(false);
      return;
    }

    const controller = new AbortController();
    let objectUrl: string | null = null;
    setViewerUrl(null);
    setLoadError(false);

    fetch(url, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(`PDF request failed (${response.status})`);
        const pdf = await response.arrayBuffer();
        const signature = new TextDecoder().decode(pdf.slice(0, 5));
        if (signature !== "%PDF-") throw new Error("The file response is not a PDF");
        return pdf;
      })
      .then((pdf) => {
        objectUrl = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
        setViewerUrl(objectUrl);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoadError(true);
      });

    return () => {
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [url, retryCount]);

  return (
    <AnimatePresence>
      {url && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
            className="pro-card w-full max-w-4xl h-[85vh] flex flex-col bg-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b-2 border-border shrink-0">
              <span className="font-display font-bold text-foreground truncate">
                {title}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onClose}
                  aria-label="Close viewer"
                >
                  <X size={18} />
                </Button>
              </div>
            </div>
            <div className="relative flex-1 min-h-0 bg-card">
              {viewerUrl && (
                <iframe
                  src={`${viewerUrl}#view=FitH`}
                  title={title}
                  className="absolute inset-0 h-full w-full bg-background"
                />
              )}
              {!viewerUrl && !loadError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground" role="status">
                  <LoaderCircle size={28} className="animate-spin" />
                  <span>Loading PDF…</span>
                </div>
              )}
              {loadError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <p className="text-foreground">This PDF couldn’t be loaded. Please try again.</p>
                  <Button variant="outline" onClick={() => setRetryCount((count) => count + 1)}>
                    <RotateCw className="mr-2" size={16} />
                    Try again
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
