import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: 'Product Manager',
    company: 'SaaS Startup',
    content: 'Nagaraj was easy to work with and understood our requirements clearly. He delivered the project on time and the code quality was solid. Communication was smooth throughout.',
  },
  {
    id: 2,
    name: 'CTO',
    company: 'FinTech Company',
    content: 'We hired Nagaraj for backend development using Java and Spring Boot. He quickly adapted to our existing system and fixed performance issues we were struggling with.',
  },
  {
    id: 3,
    name: 'Founder',
    company: 'E-commerce Platform',
    content: "What I appreciated most was his problem-solving approach. He didn't just implement features, he suggested better solutions that improved the overall system.",
  },
  {
    id: 4,
    name: 'Operations Lead',
    company: 'Logistics Firm',
    content: "Nagaraj delivered exactly what we needed and was responsive even after project completion. I'd work with him again for future development work.",
  },
  {
    id: 5,
    name: 'Technical Lead',
    company: 'Enterprise Application',
    content: 'Reliable, skilled, and professional. Nagaraj handled both frontend and backend tasks efficiently and kept us updated at every stage.',
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-badge mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              What Clients Say
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="pro-card p-8 md:p-10 relative"
              >
                <Quote className="absolute top-6 right-6 text-primary/10" size={48} />

                <p className="text-lg text-foreground mb-8 leading-relaxed relative z-10">
                  "{testimonials[currentIndex].content}"
                </p>

                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-primary w-6'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};