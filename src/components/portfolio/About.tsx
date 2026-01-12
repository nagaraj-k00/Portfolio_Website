import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Mail } from "lucide-react";

const valueProps = [
  "Building production-ready Java & Spring Boot applications",
  "Creating responsive React interfaces with modern tooling",
  "Designing efficient database schemas and REST APIs",
  "Writing clean, maintainable, and well-tested code",
  "Collaborating effectively in agile development teams",
];

const socialLinks = [
  { icon: Github, href: "https://github.com/GPTMudhol", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nagaraj-kamatagi-8b52972a2", label: "LinkedIn" },
  { icon: Mail, href: "mailto:nagarajkamatagi@gmail.com", label: "Email" },
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-badge mb-4">About</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              What I Bring to the Table
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Value Props */}
            <div className="md:col-span-2">
              <ul className="space-y-4">
                {valueProps.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="pro-card p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Karnataka, India</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="text-foreground font-medium">Full Stack Development</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p className="text-foreground font-medium">English, Kannada, Hindi</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};