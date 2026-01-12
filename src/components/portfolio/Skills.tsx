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

const skillData: Record<string, { icon: IconType; color: string }> = {
  'Java': { icon: FaJava, color: '#E76F00' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  'REST APIs': { icon: TbApi, color: '#FF6B6B' },
  'Microservices': { icon: TbBuildingBank, color: '#7C3AED' },
  'React': { icon: FaReact, color: '#61DAFB' },
  'JavaScript': { icon: FaJs, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'HTML/CSS': { icon: FaHtml5, color: '#E34F26' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'JPA/Hibernate': { icon: SiHibernate, color: '#59666C' },
  'Git': { icon: FaGitAlt, color: '#F05032' },
  'Docker': { icon: FaDocker, color: '#2496ED' },
  'AWS': { icon: FaAws, color: '#FF9900' },
  'Maven': { icon: SiApachemaven, color: '#C71A36' },
  'Postman': { icon: SiPostman, color: '#FF6C37' },
  'VS Code': { icon: VscCode, color: '#007ACC' },
};

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    gradient: 'from-orange-500 to-red-500',
    skills: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Database',
    icon: Database,
    gradient: 'from-green-500 to-emerald-500',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'JPA/Hibernate'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    gradient: 'from-purple-500 to-pink-500',
    skills: ['Git', 'Docker', 'AWS', 'Maven', 'Postman', 'VS Code'],
  },
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="section-badge mb-4">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
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
                className="pro-card p-6 group"
                whileHover={{ scale: 1.02 }}
              >
                {/* Category header with gradient icon */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div 
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground font-display group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const skillInfo = skillData[skill];
                    const SkillIcon = skillInfo?.icon;
                    const iconColor = skillInfo?.color;
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="skill-badge flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {SkillIcon && (
                          <SkillIcon 
                            className="w-4 h-4 transition-transform group-hover:scale-110" 
                            style={{ color: iconColor }} 
                          />
                        )}
                        <span>{skill}</span>
                      </motion.span>
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
