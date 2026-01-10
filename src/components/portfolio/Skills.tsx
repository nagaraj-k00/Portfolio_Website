import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Palette, Layers } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications with Java, Spring Boot, and RESTful APIs with clean architecture.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Palette,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using React, JavaScript, and modern CSS frameworks like Tailwind.',
    color: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'End-to-end web application development using MERN Stack, Spring Boot with modern deployment practices.',
    color: 'bg-green-500/10 text-green-400',
  },
];

const skillsWithProgress = [
  { name: 'Java', icon: '☕', progress: 90 },
  { name: 'Spring Boot', icon: '🍃', progress: 85 },
  { name: 'React', icon: '⚛️', progress: 85 },
  { name: 'JavaScript', icon: '⚡', progress: 88 },
  { name: 'Node.js', icon: '💚', progress: 80 },
  { name: 'MongoDB', icon: '🍃', progress: 82 },
  { name: 'MySQL', icon: '🐬', progress: 85 },
  { name: 'Tailwind CSS', icon: '🎨', progress: 90 },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Services</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
              Services I Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              I craft digital solutions with modern technologies to create scalable applications that deliver real value.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: 'hsl(var(--primary) / 0.5)' }}
                className="glass-card rounded-2xl p-8 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 glass-icon ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Skills & Awards Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="section-badge mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Skills & Awards</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
              Masterful Talents and Honors
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Technologies and tools I use to bring ideas to life with expertise and precision.
            </p>
          </div>

          {/* Skills with Progress */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {skillsWithProgress.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 glass-icon flex items-center justify-center text-lg">
                      {skill.icon}
                    </div>
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                  <span className="text-primary font-semibold">{skill.progress}%</span>
                </div>
                <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.progress}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
