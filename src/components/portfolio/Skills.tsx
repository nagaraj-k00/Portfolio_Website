import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🌊' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '💚' },
      { name: 'Django', icon: '🐍' },
      { name: 'Flask', icon: '🌶️' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'Express.js', icon: '🚀' },
      { name: 'GraphQL', icon: '◼️' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', icon: '💙' },
      { name: 'React Native', icon: '📱' },
      { name: 'Dart', icon: '🎯' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Postman', icon: '📮' },
      { name: 'CI/CD', icon: '🔄' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'ML/DL', icon: '🤖' },
      { name: 'WebSockets', icon: '🔌' },
      { name: 'REST API', icon: '🔗' },
      { name: 'UI/UX', icon: '✨' },
      { name: 'Agile', icon: '📋' },
    ],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">{'// Technical Skills'}</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              My Skillset
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: 'hsl(var(--primary) / 0.2)',
                        borderColor: 'hsl(var(--primary) / 0.5)'
                      }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 cursor-default transition-all duration-300"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium text-secondary-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
