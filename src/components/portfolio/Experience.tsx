import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    id: 2,
    title: 'AI Intern (Entry Level)',
    company: 'Edutainer',
    location: 'Remote',
    period: '2026',
    achievements: [
      'Completed a 12-week AI program: ML fundamentals, ChatGPT for Professionals, and Midjourney Mastery',
      'Applied ML concepts — regression, data visualisation, feature correlation, neural networks, ensemble learning',
      'Practised prompt engineering for professional text and AI image-generation workflows',
      'Completed weekly quizzes and assignments across the program',
    ],
  },
  {
    id: 0,
    title: 'QA Testing & Full Stack Developer',
    company: 'Springevening',
    location: 'India',
    period: '2026',
    achievements: [
      'Developed and maintained full-stack web application features and RESTful APIs',
      'Performed functional, API, integration, and regression testing to identify and resolve software defects',
      'Debugged application issues and validated frontend, backend, database, and user workflows',
      'Collaborated with developers using Git to improve application quality, reliability, and performance',
    ],
  },
  {
    id: 1,
    title: 'Full Stack Development Intern',
    company: 'Revolution IT Solutions',
    location: 'India',
    period: '2024',
    achievements: [
      'Developed RESTful APIs using Spring Boot, reducing backend response time by 30%',
      'Built responsive React components following best practices and accessibility standards',
      'Integrated MySQL databases with proper indexing and query optimization',
      'Collaborated with team using Git workflow and participated in code reviews',
    ],
  },
];

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-badge mb-4">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              Work History
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

                {/* Content */}
                <div className="pro-card p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-foreground font-display">
                      {exp.title}
                    </h3>
                    <span className="text-primary font-medium">{exp.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};