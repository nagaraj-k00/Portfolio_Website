import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 180, suffix: '+', label: 'Worldwide Clients' },
  { value: 590, suffix: '+', label: 'Project Done' },
  { value: 12, suffix: '+', label: 'Years Experience' },
];

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Left Side - Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5"
            >
              <span className="text-primary font-medium">Hi! I'm Nagaraj Kamatagi</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display"
            >
              Freelance{' '}
              <span className="text-primary">Java & Full Stack</span>{' '}
              Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-lg leading-relaxed"
            >
              Building scalable web applications with modern technologies. Strong in REST API development, database design, and problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-lg"
              >
                <User className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary/50 text-foreground px-8 py-6 text-base font-medium rounded-lg"
                onClick={() => document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-12 pt-8"
            >
              {stats.map((stat, index) => (
                <StatItem key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Right Side - Hero Image with Name Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Background Name Typography */}
            <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden pointer-events-none">
              <span className="hero-name-bg tracking-tight leading-none">
                NAGARAJ
              </span>
              <span className="hero-name-bg tracking-tight leading-none -mt-20">
                KAMATAGI
              </span>
            </div>

            {/* Gradient Background */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-orange-500/20 to-yellow-500/20 rounded-full blur-3xl scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                <img 
                  src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg" 
                  alt="Nagaraj Kamatagi"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/30 via-primary/20 to-transparent" />
              </div>

              {/* Floating Name Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border px-6 py-3 rounded-lg shadow-xl"
              >
                <span className="text-foreground font-semibold">Nagaraj Kamatagi</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const count = useCountUp(stat.value, 2000, true);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-foreground">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
    </motion.div>
  );
};
