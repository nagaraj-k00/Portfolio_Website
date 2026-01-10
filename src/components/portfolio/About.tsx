import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, Calendar, Globe, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const personalInfo = [
  { icon: Mail, label: 'Contact', value: 'nagarajkamatagi@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 (XXX) XXX-XXXX' },
  { icon: Calendar, label: 'Date of Birth', value: 'Student Developer' },
  { icon: Globe, label: 'Spoken Languages', value: 'English - Kannada - Hindi' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/GPTMudhol', color: 'hover:bg-[#333]' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nagaraj-kamatagi-8b52972a2', color: 'hover:bg-[#0077b5]' },
  { icon: Twitter, href: '#', color: 'hover:bg-[#1da1f2]' },
  { icon: MessageCircle, href: '#', color: 'hover:bg-[#25d366]' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
              Hi! I'm Nagaraj Kamatagi
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                I'm a passionate and results-driven <span className="text-foreground font-medium">Java & Full Stack Developer</span> with hands-on experience in building scalable web applications using Java, Spring Boot, MERN Stack, and modern frontend technologies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                Strong in user-centered design, REST API development, database architecture, and problem-solving. Quick learner with internship experience, real-world projects, and industry-recognized certifications.
              </motion.p>

              {/* Personal Info Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="grid sm:grid-cols-2 gap-6 pt-6"
              >
                {personalInfo.map((info, index) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                      {info.label}
                    </div>
                  </div>
                ))}
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={`value-${info.label}`}
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

              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <div className="text-muted-foreground text-sm font-medium lowercase mb-2">Interest</div>
                <div className="text-foreground font-medium">Coding, Open Source, Tech Blogs</div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <div className="text-muted-foreground text-sm font-medium lowercase mb-4">Social Media</div>
                <div className="flex items-center gap-3">
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
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary via-card to-secondary">
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="text-9xl opacity-80">👨‍💻</span>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
