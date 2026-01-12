import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'JPA/Hibernate'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Maven', 'Postman', 'VS Code'],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-badge mb-4">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Technologies I work with to build robust, scalable applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="pro-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 font-display">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
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