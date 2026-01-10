import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { Code2, Award, Layers, GitBranch } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 5, icon: Code2 },
  { label: 'Certifications', value: 6, icon: Award },
  { label: 'Technologies', value: 20, icon: Layers },
  { label: 'GitHub Repos', value: 10, icon: GitBranch },
];

const skills = [
  { name: 'Java / Spring Boot', level: 90, color: 'from-orange-500 to-red-500' },
  { name: 'React / JavaScript', level: 85, color: 'from-cyan-500 to-blue-500' },
  { name: 'MERN Stack', level: 80, color: 'from-green-500 to-emerald-500' },
  { name: 'MySQL / MongoDB', level: 85, color: 'from-blue-500 to-indigo-500' },
  { name: 'HTML / CSS / Tailwind', level: 90, color: 'from-pink-500 to-purple-500' },
  { name: 'Docker / AWS', level: 70, color: 'from-primary to-cyan' },
];

const techStack = [
  'Java', 'Spring Boot', 'React', 'Node.js', 'JavaScript', 'TypeScript',
  'MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'Docker', 'AWS',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'REST API'
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">About Me</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Who I Am
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Bio & Image */}
            <div className="space-y-8">
              {/* Profile Image with Animated Border */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass-card p-1">
                  <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-secondary to-cyan/20 flex items-center justify-center overflow-hidden">
                    <span className="text-8xl relative z-10">👨‍💻</span>
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-cyan/20"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                </div>
                {/* Animated border glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan to-primary rounded-2xl blur-lg -z-10"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Bio Card with Enhanced Styling */}
              <motion.div 
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-1 h-8 bg-primary rounded-full" />
                  Hello!
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a <span className="text-foreground font-medium">Java & Full Stack Developer</span> (Student) 
                  with hands-on experience in building web applications using Java, Spring Boot, MERN Stack, 
                  and modern frontend technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Strong in <span className="text-primary">REST API development</span>, database design, 
                  and problem-solving. Quick learner with internship experience, real-world projects, 
                  and industry-recognized certifications.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Stats, Skills, Tech */}
            <div className="space-y-8">
              {/* Stats Grid with Icons */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
                ))}
              </div>

              {/* Skills with Colored Bars */}
              <motion.div 
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan/5 rounded-full blur-2xl" />
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Core Skills
                </h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} isVisible={isVisible} />
                  ))}
                </div>
              </motion.div>

              {/* Tech Stack with Enhanced Tags */}
              <motion.div 
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.03 }}
                      whileHover={{ 
                        scale: 1.08, 
                        backgroundColor: 'hsl(var(--primary) / 0.15)',
                        borderColor: 'hsl(var(--primary) / 0.5)',
                        color: 'hsl(var(--primary))'
                      }}
                      className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-medium border border-border/50 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary) / 0.5)' }}
      className="glass-card rounded-xl p-6 text-center group transition-all duration-300 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <div className="relative z-10">
        <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
          <Icon size={24} />
        </div>
        <div className="text-4xl font-bold gradient-text mb-2">
          {count}+
        </div>
        <div className="text-muted-foreground text-sm">{stat.label}</div>
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill, index, isVisible }: { skill: typeof skills[0]; index: number; isVisible: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium text-sm">{skill.name}</span>
        <span className="text-primary text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
