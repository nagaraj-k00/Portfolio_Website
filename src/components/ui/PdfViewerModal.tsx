import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfViewerModalProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export const PdfViewerModal = ({ url, title, onClose }: PdfViewerModalProps) => {
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
                <Button variant="outline" size="icon" asChild aria-label="Open in new tab">
                  <a href={url ?? "#"} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                  </a>
                </Button>
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
            <iframe
              src={`${url}#view=FitH`}
              title={title}
              className="flex-1 w-full bg-white"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
