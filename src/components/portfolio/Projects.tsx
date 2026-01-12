import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = ['All', 'Java', 'Full-Stack', 'Security'];

const projects = [
  {
    id: 1,
    title: 'Hospital Management System',
    problem: 'Streamlined patient records and appointment scheduling for healthcare providers.',
    description: 'Complete CRUD operations for patients, doctors, appointments, and billing modules.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    category: 'Full-Stack',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    result: 'Reduced administrative time by 40%',
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
  },
  {
    id: 2,
    title: 'Fake Website Detection',
    problem: 'Protecting users from phishing and malicious websites.',
    description: 'ML-powered system to identify and flag potentially harmful URLs and websites.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
    category: 'Security',
    tech: ['Java', 'Machine Learning', 'Web Scraping'],
    result: 'Achieved 92% detection accuracy',
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    problem: 'Building a complete online shopping experience.',
    description: 'Full-featured store with product catalog, cart, checkout, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    category: 'Full-Stack',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    result: 'Handled 1000+ concurrent users',
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
  },
  {
    id: 4,
    title: 'Spam Detection System',
    problem: 'Filtering fraudulent SMS and email messages.',
    description: 'Neural network-based classifier for identifying spam with high precision.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop',
    category: 'Security',
    tech: ['Python', 'TensorFlow', 'NLP', 'MySQL'],
    result: '95% spam detection rate',
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
  },
  {
    id: 5,
    title: 'Car Rental System',
    problem: 'Simplifying vehicle booking and fleet management.',
    description: 'Booking system with availability tracking, pricing, and customer management.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop',
    category: 'Java',
    tech: ['Java', 'JDBC', 'MySQL', 'Swing'],
    result: 'Manages 50+ vehicles efficiently',
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="section-badge mb-4">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Real-world applications demonstrating problem-solving and technical skills.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="pro-card group"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Overlay Links */}
                    <div className="absolute inset-0 bg-card/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {project.problem}
                    </p>
                    
                    {/* Result */}
                    <p className="text-sm text-primary font-medium mb-4">
                      ↗ {project.result}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};