import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 180, suffix: "+", label: "Worldwide Clients" },
  { value: 10, suffix: "+", label: "Projects Done" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/25 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [20, -20, 20],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/10 via-primary/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-28">
          {/* Left Side - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Hi! I'm Nagaraj Kamatagi</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Freelance{" "}
              <span className="gradient-text">Java & Full Stack</span>{" "}
              Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed"
            >
              Building scalable web applications with modern technologies. Strong in REST API development, database design, and problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 h-12 text-base font-medium rounded-full shadow-lg shadow-primary/25 group transition-all duration-200"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary hover:border-primary/30 text-foreground px-7 h-12 text-base font-medium rounded-full transition-all duration-200"
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
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-10 lg:gap-12 pt-6"
            >
              {stats.map((stat, index) => (
                <StatItem key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/15 to-accent/15 rounded-full blur-3xl scale-75" />

            {/* Profile Image Container */}
            <div className="relative group">
              {/* Gradient Border */}
              <motion.div 
                className="relative p-1 rounded-3xl bg-gradient-to-br from-primary via-purple-500 to-accent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 25px 60px -15px hsl(var(--primary) / 0.35)'
                }}
              >
                {/* Image Container */}
                <div className="relative w-56 h-64 sm:w-72 sm:h-80 lg:w-80 lg:h-[22rem] xl:w-[22rem] xl:h-[26rem] rounded-[1.4rem] overflow-hidden bg-background">
                  <img
                    src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg"
                    alt="Nagaraj Kamatagi"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-xl shadow-primary/30"
              />
              <motion.div
                animate={{ y: [6, -6, 6], rotate: [360, 180, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-accent to-emerald-400 shadow-xl shadow-accent/30"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-5 sm:-left-7 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 -right-6 sm:-right-8 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent shadow-lg shadow-accent/50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-2.5 bg-primary rounded-full"
            animate={{ y: [0, 10, 0] }}
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
      transition={{ delay: 0.5 + index * 0.1 }}
      className="group"
    >
      <motion.div 
        className="text-3xl lg:text-4xl font-bold gradient-text"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {count}
        {stat.suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-200">
        {stat.label}
      </div>
    </motion.div>
  );
};
