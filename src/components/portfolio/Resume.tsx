import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Resume = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleDownload = () => {
    // In production, this would link to an actual PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Chen_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    // In production, this would open the PDF in a new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono mb-2">{'// Download Resume'}</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get My Resume
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download my detailed resume to learn more about my skills, experience, and achievements
            </p>
          </div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FileText size={40} className="text-primary" />
              </motion.div>

              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Alex Chen - Full-Stack Developer
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                5+ years of experience in building scalable web applications with React, Node.js, and cloud technologies. 
                Passionate about clean code and exceptional user experiences.
              </p>

              {/* Resume Highlights */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Years Experience', value: '5+' },
                  { label: 'Projects Completed', value: '50+' },
                  { label: 'Technologies', value: '20+' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume (PDF)
                </Button>
                <Button
                  onClick={handlePreview}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 text-foreground hover:bg-primary/10 px-8"
                >
                  <Eye className="mr-2" size={20} />
                  Preview Resume
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Last updated: December 2024 • PDF format • 2 pages
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
