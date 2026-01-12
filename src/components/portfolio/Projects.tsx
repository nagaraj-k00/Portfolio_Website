import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Real-world applications demonstrating problem-solving and technical skills.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'border-border text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-primary/30'
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
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
                  className="pro-card group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    
                    {/* Overlay Links */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/60 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-secondary/80 backdrop-blur-sm text-foreground rounded-xl text-sm font-medium hover:bg-secondary transition-colors border border-border"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </motion.div>

                    {/* Category tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground font-display group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {project.problem}
                    </p>
                    
                    {/* Result */}
                    <p className="text-sm text-accent font-medium mb-4 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {project.result}
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
