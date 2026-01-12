import { motion } from "framer-motion";
import { ArrowRight, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "15+", label: "Happy Clients" },
];

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResume = () => {
    document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-16">
          
          {/* Text Content - Left side on desktop, below image on mobile */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Intro Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="section-badge">
                Hi! I'm Nagaraj Kamatagi
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display">
                Freelance{" "}
                <span className="gradient-text">Java &</span>
                <br />
                <span className="gradient-text">Full Stack</span>
                <br />
                Developer
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-md leading-relaxed mx-auto lg:mx-0"
            >
              Building scalable web applications with modern technologies. Strong in REST API development, database design, and problem-solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-12 text-base font-medium rounded-xl"
              >
                <Users className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary text-foreground px-6 h-12 text-base font-medium rounded-xl"
                onClick={scrollToResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-8 pt-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image - Right side on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Floating animated dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-5 h-5 rounded-full bg-purple-500"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/3 -left-6 w-3 h-3 rounded-full bg-orange-400"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-4 w-4 h-4 rounded-full bg-pink-500"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute -bottom-2 right-1/4 w-4 h-4 rounded-full bg-yellow-400"
                animate={{
                  y: [0, 8, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />
              
              {/* Animated gradient border */}
              <motion.div
                className="relative p-1 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B, #FACC15)",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 lg:w-80 lg:h-96 rounded-[1.3rem] overflow-hidden bg-card">
                  <img
                    src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg"
                    alt="Nagaraj Kamatagi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
