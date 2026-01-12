import { motion } from "framer-motion";
import { Download, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 180, suffix: "+", label: "Worldwide Clients" },
  { value: 10, suffix: "+", label: "Project Done" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/15 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Left Side - Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-24">
          {/* Text Content */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-medium">Hi! I'm Nagaraj Kamatagi</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display"
            >
              Freelance{" "}
              <span className="gradient-text">Java & Full Stack</span>{" "}
              Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-lg leading-relaxed"
            >
              Building scalable web applications with modern technologies. Strong in REST API development, database
              design, and problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-sm font-medium rounded-xl group"
              >
                <ArrowDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-foreground px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300"
                onClick={() => document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 md:gap-12 pt-8"
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
            className="relative flex items-center justify-center order-1 md:order-2"
          >
            {/* Decorative Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/20 to-accent/20 rounded-full blur-3xl scale-75 animate-pulse" />

            {/* Profile Image with Gradient Border */}
            <div className="relative group">
              {/* Gradient Border Container */}
              <motion.div 
                className="relative p-1 sm:p-1.5 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-primary via-purple-500 to-accent shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.4)'
                }}
              >
                {/* Inner Container with Image */}
                <div className="relative w-48 h-56 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden bg-background">
                  <img
                    src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg"
                    alt="Nagaraj Kamatagi"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 shadow-lg pulse-glow"
              />
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [360, 180, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-accent to-emerald-400 shadow-lg"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-6 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-8 sm:-right-10 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const StatItem = ({ stat, index }: { stat: (typeof stats)[0]; index: number }) => {
  const count = useCountUp(stat.value, 2000, true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.1 }}
      className="text-center group"
    >
      <motion.div 
        className="text-3xl md:text-4xl font-bold gradient-text"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {count}
        {stat.suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">{stat.label}</div>
    </motion.div>
  );
};
