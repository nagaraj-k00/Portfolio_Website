import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Calendar, Globe, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

const personalInfo = [
  { icon: Mail, label: "email", value: "nagarajkamatagi@gmail.com" },
  { icon: Phone, label: "phone", value: "+91 9380633832" },
  { icon: Calendar, label: "status", value: "Student Developer" },
  { icon: Globe, label: "languages", value: "English - Kannada - Hindi" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/GPTMudhol", color: "hover:bg-[#333]" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nagaraj-kamatagi-8b52972a2", color: "hover:bg-[#0077b5]" },
  { icon: Twitter, href: "#", color: "hover:bg-[#1da1f2]" },
  { icon: MessageCircle, href: "#", color: "hover:bg-[#25d366]" },
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="section-badge mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">Hi! I'm Nagaraj Kamatagi</h2>
          </div>

          <div className="max-w-3xl">
            {/* Bio */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                I'm a passionate and results-driven{" "}
                <span className="text-foreground font-medium">Java & Full Stack Developer</span> with hands-on
                experience in building scalable web applications using Java, Spring Boot, MERN Stack, and modern
                frontend technologies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                Strong in user-centered design, REST API development, database architecture, and problem-solving. Quick
                learner with internship experience, real-world projects, and industry-recognized certifications.
              </motion.p>

              {/* Personal Info Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
              >
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="text-muted-foreground text-sm font-medium lowercase">{info.label}</div>
                    <div className="text-foreground font-medium">{info.value}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Interests & Social Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="grid sm:grid-cols-2 gap-6 pt-4"
              >
                <div className="space-y-1">
                  <div className="text-muted-foreground text-sm font-medium lowercase">Interest</div>
                  <div className="text-foreground font-medium">Coding, Open Source, Tech Blogs</div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-muted-foreground text-sm font-medium lowercase">Social Media</div>
                  <div className="flex items-center gap-3 mt-1">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-white transition-all duration-300 ${social.color}`}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
