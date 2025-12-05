import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    type: 'Full-time',
    responsibilities: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored team of 5 junior developers on best practices',
      'Reduced API response time by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    achievements: [
      'Employee of the Quarter Q3 2023',
      'Led successful migration to cloud infrastructure',
    ],
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: 'Jun 2020 - Dec 2021',
    type: 'Full-time',
    responsibilities: [
      'Built and maintained React/Node.js web applications',
      'Designed and implemented RESTful APIs',
      'Collaborated with design team on UI/UX improvements',
      'Integrated third-party services (Stripe, AWS, Firebase)',
    ],
    achievements: [
      'Increased user engagement by 35% with new features',
      'Successfully launched 3 major product features',
    ],
  },
  {
    id: 3,
    title: 'Software Engineering Intern',
    company: 'InnovateTech',
    location: 'New York, NY',
    period: 'Jan 2020 - May 2020',
    type: 'Internship',
    responsibilities: [
      'Developed frontend components using React and TypeScript',
      'Participated in code reviews and agile sprints',
      'Wrote unit tests achieving 80% code coverage',
      'Documented technical specifications and APIs',
    ],
    achievements: [
      'Received return offer for full-time position',
      'Built internal tool saving 10+ hours/week',
    ],
  },
];

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono mb-2">{'// Career Journey'}</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Work Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions to various organizations
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'
                } pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 ${
                    index % 2 === 0 ? 'left-0 md:left-auto md:-right-2' : 'left-0 md:-left-2'
                  } transform md:translate-x-0`}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content Card */}
                <div className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }">
                      <Briefcase size={14} className="text-primary" />
                      Responsibilities
                    </h4>
                    <ul className={`space-y-1 text-sm text-muted-foreground ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-primary mt-1.5 ${index % 2 === 0 ? 'md:order-last' : ''}`}>•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <h4 className="text-sm font-semibold text-foreground mb-2">🏆 Achievements</h4>
                    <div className="flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
