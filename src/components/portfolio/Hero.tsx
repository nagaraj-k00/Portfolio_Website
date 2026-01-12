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

          {/* Right Side - Styled Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-orange-500/20 to-yellow-500/20 rounded-full blur-3xl scale-75" />
            
            {/* Profile Image with Gradient Border */}
            <div className="relative">
              {/* Gradient Border Container */}
              <div className="relative p-1.5 rounded-[2rem] bg-gradient-to-br from-primary via-orange-500 to-yellow-500 shadow-2xl shadow-primary/30">
                {/* Inner Container with Image */}
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[1.75rem] overflow-hidden bg-background">
                  <img 
                    src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg" 
                    alt="Nagaraj Kamatagi"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-500 shadow-lg"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-primary/60"
              />
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
