import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2018 - 2020',
    description: 'Specialized in Machine Learning and Distributed Systems. Thesis on scalable microservices architecture.',
    gpa: '3.9/4.0',
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'MIT',
    period: '2014 - 2018',
    description: 'Focus on software engineering and algorithms. Graduated with honors.',
    gpa: '3.8/4.0',
  },
];

const certifications = [
  {
    id: 1,
    name: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: '#',
  },
  {
    id: 2,
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialUrl: '#',
  },
  {
    id: 3,
    name: 'Meta React Developer Certificate',
    issuer: 'Meta',
    date: '2022',
    credentialUrl: '#',
  },
  {
    id: 4,
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2022',
    credentialUrl: '#',
  },
  {
    id: 5,
    name: 'Machine Learning Specialization',
    issuer: 'Coursera / Stanford',
    date: '2021',
    credentialUrl: '#',
  },
  {
    id: 6,
    name: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: '2020',
    credentialUrl: '#',
  },
];

export const Education = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">{'// Academic Background'}</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Education & Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {edu.gpa}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Award className="text-primary" />
                Certifications
              </h3>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={cert.id}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-card rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
