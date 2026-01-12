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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between min-h-[calc(100vh-5rem)] py-16">
          {/* Text Content */}
          <div className="space-y-8 flex-1 max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-badge"
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
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              I build scalable backend systems and intuitive web interfaces. 
              Specializing in Spring Boot, React, and cloud-native architectures.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
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
              className="flex flex-wrap items-center gap-4 pt-4"
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

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center flex-shrink-0"
          >
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl scale-90" />
              
              {/* Image container with border */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent">
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-[1.4rem] overflow-hidden bg-card">
                  <img
                    src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg"
                    alt="Nagaraj Kamatagi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};