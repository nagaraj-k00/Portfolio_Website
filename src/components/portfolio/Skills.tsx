import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Server, Layout, Database, Wrench } from 'lucide-react';
import { 
  FaJava, FaNodeJs, FaReact, FaJs, FaHtml5, FaDocker, FaAws, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, 
  SiMongodb, SiRedis, SiHibernate, SiPostman, SiApachemaven
} from 'react-icons/si';
import { TbApi, TbBuildingBank } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { IconType } from 'react-icons';

const skillIcons: Record<string, IconType> = {
  'Java': FaJava,
  'Spring Boot': SiSpringboot,
  'Node.js': FaNodeJs,
  'REST APIs': TbApi,
  'Microservices': TbBuildingBank,
  'React': FaReact,
  'JavaScript': FaJs,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'HTML/CSS': FaHtml5,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'JPA/Hibernate': SiHibernate,
  'Git': FaGitAlt,
  'Docker': FaDocker,
  'AWS': FaAws,
  'Maven': SiApachemaven,
  'Postman': SiPostman,
  'VS Code': VscCode,
};

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'JPA/Hibernate'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
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
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground font-display">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill];
                    return (
                      <span
                        key={skill}
                        className="skill-badge flex items-center gap-1.5"
                      >
                        {SkillIcon && <SkillIcon className="w-3.5 h-3.5" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
