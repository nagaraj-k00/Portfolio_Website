import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Palette, Layers, Database, Wrench, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Java & Backend',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'Spring', icon: '🌱' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    title: 'Frontend',
    icon: Palette,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Tailwind CSS', icon: '🌊' },
    ],
  },
  {
    title: 'Full Stack',
    icon: Layers,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MERN Stack', icon: '📦' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Express.js', icon: '🚀' },
      { name: 'ASP.NET', icon: '🔷' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Supabase', icon: '⚡' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'VS Code', icon: '💻' },
      { name: 'IntelliJ IDEA', icon: '🧠' },
    ],
  },
  {
    title: 'Other',
    icon: Cpu,
    color: 'from-primary to-cyan',
    skills: [
      { name: 'ML/DL', icon: '🤖' },
      { name: 'REST API', icon: '🔗' },
      { name: 'Postman', icon: '📮' },
      { name: 'Eclipse', icon: '🌑' },
    ],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div
        className="absolute -bottom-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
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
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Technical Skills</span>
            </motion.div>
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
                whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary) / 0.5)' }}
                className="glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.08, 
                        backgroundColor: 'hsl(var(--primary) / 0.15)',
                        borderColor: 'hsl(var(--primary) / 0.5)'
                      }}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/50 border border-border/50 cursor-default transition-all duration-300"
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span className="text-sm font-medium text-secondary-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
