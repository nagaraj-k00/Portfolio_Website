import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechStartup',
    image: '👩‍💼',
    content: 'Alex is one of the most talented developers I\'ve worked with. His ability to solve complex problems and deliver high-quality code on time is exceptional. He transformed our entire platform architecture.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at BigCorp',
    image: '👨‍💻',
    content: 'Working with Alex was a game-changer for our project. His technical expertise combined with excellent communication skills made the collaboration seamless. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dr. Emily Watson',
    role: 'Professor at Stanford',
    image: '👩‍🏫',
    content: 'Alex was one of my brightest students. His thesis on distributed systems was exceptional, and he consistently demonstrated both technical prowess and innovative thinking.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Founder at StartupXYZ',
    image: '👨‍💼',
    content: 'Alex helped us build our MVP in record time. His full-stack skills and understanding of business requirements are rare to find. He\'s now my go-to developer for all projects.',
    rating: 5,
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">{'// What People Say'}</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from mentors, colleagues, and clients I've worked with
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8 md:p-12 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote size={60} />
                </div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
              >
                <ChevronLeft size={20} />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
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
