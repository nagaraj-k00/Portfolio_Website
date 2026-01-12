import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "5+ years building enterprise applications",
  "Spring Boot & React specialist",
  "Remote-ready, timezone flexible",
];

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResume = () => {
    document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center min-h-[calc(100vh-5rem)] py-16 gap-10">
          {/* Profile Image - Always on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
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
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 rounded-[1.3rem] overflow-hidden bg-card">
                  <img
                    src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg"
                    alt="Nagaraj Kamatagi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Below image, centered */}
          <div className="space-y-6 text-center max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-badge inline-block"
            >
              Available for opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-display">
                Java & Full Stack
                <br />
                <span className="gradient-text">Developer</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed mx-auto"
            >
              I build scalable backend systems and intuitive web interfaces. 
              Specializing in Spring Boot, React, and cloud-native architectures.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 inline-block text-left"
            >
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-12 text-base font-medium rounded-xl"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary text-foreground px-6 h-12 text-base font-medium rounded-xl"
                onClick={scrollToResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
