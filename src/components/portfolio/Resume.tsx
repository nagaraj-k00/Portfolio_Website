import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PdfViewerModal } from "@/components/ui/PdfViewerModal";
import resumeAsset from "@/assets/resume.asset.json";

const RESUME_URL = resumeAsset.url;
const RESUME_FILENAME = "Nagaraj_Kamatagi_Resume.pdf";

export const Resume = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = RESUME_FILENAME;
    link.click();
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="mb-8">
            <span className="section-badge mb-4">Resume</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              Get My Resume
            </h2>
            <p className="text-muted-foreground mt-4">
              Download my detailed resume to learn more about my experience and skills.
            </p>
          </div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="pro-card p-8"
          >
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { label: "Experience", value: "Full Stack" },
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl font-bold text-primary">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={handleDownload}
                className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 px-6 h-11"
              >
                <Download className="mr-2" size={18} />
                Download PDF
              </Button>
              <Button
                onClick={handlePreview}
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-6 h-11"
              >
                <Eye className="mr-2" size={18} />
                Preview
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <PdfViewerModal
        url={isPreviewOpen ? RESUME_URL : null}
        title="Nagaraj Kamatagi — Resume"
        onClose={() => setIsPreviewOpen(false)}
      />
    </section>
  );
};