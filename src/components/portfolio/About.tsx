import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { label: 'Projects Completed', value: 5 },
  { label: 'Certifications', value: 6 },
  { label: 'Technologies', value: 20 },
  { label: 'GitHub Repos', value: 10 },
];

const skills = [
  { name: 'Java / Spring Boot', level: 90 },
  { name: 'React / JavaScript', level: 85 },
  { name: 'MERN Stack', level: 80 },
  { name: 'MySQL / MongoDB', level: 85 },
  { name: 'HTML / CSS / Tailwind', level: 90 },
  { name: 'Docker / AWS', level: 70 },
];

const techStack = [
  'Java', 'Spring Boot', 'React', 'Node.js', 'JavaScript', 'TypeScript',
  'MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'Docker', 'AWS',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'REST API'
];

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">{'// About Me'}</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Who I Am
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer crafting digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Bio & Image */}
            <div className="space-y-8">
              {/* Profile Image */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass-card p-2">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
              </motion.div>

              {/* Bio */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Hello!</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Java & Full Stack Developer (Student) with hands-on experience in building web applications 
                  using Java, Spring Boot, MERN Stack, and modern frontend technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Strong in REST API development, database design, and problem-solving. Quick learner with internship 
                  experience, real-world projects, and industry-recognized certifications.
                </p>
              </div>
            </div>

            {/* Right Column - Stats, Skills, Tech */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
                ))}
              </div>

              {/* Skills */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} isVisible={isVisible} />
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 text-center group hover:border-primary/50 transition-colors duration-300"
    >
      <div className="text-4xl font-bold gradient-text mb-2">
        {count}+
      </div>
      <div className="text-muted-foreground text-sm">{stat.label}</div>
    </motion.div>
  );
};

const SkillBar = ({ skill, index, isVisible }: { skill: typeof skills[0]; index: number; isVisible: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-primary to-cyan rounded-full"
        />
      </div>
    </motion.div>
  );
};
