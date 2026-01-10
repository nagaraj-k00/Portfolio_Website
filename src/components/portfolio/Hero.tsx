import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/hooks/useTypewriter';

export const Hero = () => {
  const { displayText: nameText, isComplete: nameComplete } = useTypewriter('Nagaraj Kamatagi', 100, 500);
  const { displayText: titleText } = useTypewriter('Java & Full Stack Developer', 80, 1800);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,hsl(var(--cyan)/0.1),transparent)]" />
      </div>

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--cyan) / 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="80%"
          stroke="url(#gradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="100%"
          y1="10%"
          x2="0%"
          y2="90%"
          stroke="url(#gradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--cyan))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--cyan))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--cyan))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-mono text-lg mb-4"
          >
            {'> Hello, World! I\'m'}
          </motion.p>

          {/* Name with Enhanced Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative mb-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="relative">
                <span className="gradient-text text-glow">{nameText}</span>
                <motion.span
                  className={`${nameComplete ? 'opacity-0' : 'opacity-100'} text-primary`}
                  animate={{ opacity: nameComplete ? 0 : [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </h1>
            {/* Glowing underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: nameComplete ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' }}
            />
          </motion.div>

          {/* Title with Role Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light mb-4">
              {titleText}
              <span className="text-primary animate-pulse">_</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['React', 'Spring Boot', 'Node.js', 'MongoDB'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.4 + i * 0.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Description with Highlighted Keywords */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building <span className="text-foreground font-medium">scalable web applications</span> with 
            modern technologies. Strong in <span className="text-primary">REST API development</span>, 
            database design, and problem-solving.
          </motion.p>

          {/* CTA Buttons with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="glow-button bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.3 }}
                />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg group"
                onClick={() => document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/GPTMudhol', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nagaraj-kamatagi-8b52972a2', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:nagarajkamatagi@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 rounded-xl bg-secondary/30 text-muted-foreground hover:text-primary transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={22} className="relative z-10" />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="cursor-pointer flex flex-col items-center gap-2 group"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors"
            >
              <ArrowDown className="text-primary/60 group-hover:text-primary w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
