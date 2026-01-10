import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Folder, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = ['All', 'Java', 'Full-Stack', 'Security', 'Web Dev'];

const projects = [
  {
    id: 1,
    title: 'Fake Website Detection System',
    description: 'Built a system to identify malicious websites and improve user security using machine learning techniques.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
    category: 'Security',
    tech: ['Java', 'Web Tech', 'ML'],
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
    featured: true,
  },
  {
    id: 2,
    title: 'Fake Text / SMS / Email Detection',
    description: 'Developed an application to classify spam and fraudulent messages using text analysis and database integration.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop',
    category: 'Java',
    tech: ['Java', 'MySQL', 'NLP'],
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
    featured: false,
  },
  {
    id: 3,
    title: 'Hospital Management System',
    description: 'Designed modules for patients, doctors, appointments, and billing with complete CRUD operations.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    category: 'Full-Stack',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
    featured: true,
  },
  {
    id: 4,
    title: 'Car Rental System',
    description: 'Implemented booking, availability tracking, and CRUD operations for a complete car rental management solution.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop',
    category: 'Web Dev',
    tech: ['Java', 'Web Tech', 'Database'],
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
    featured: false,
  },
  {
    id: 5,
    title: 'Spam Detection (Neural Networks)',
    description: 'Applied neural network concepts for spam classification using deep learning techniques.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    category: 'Security',
    tech: ['Python', 'Neural Networks', 'ML/DL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
    featured: true,
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div
        className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on, showcasing my skills in various technologies
            </p>
          </div>

          {/* Category Filter with Enhanced Styling */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className={`transition-all duration-300 ${
                    activeCategory === category
                      ? 'glow-button bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.span
                      layoutId="categoryIndicator"
                      className="ml-2 w-2 h-2 rounded-full bg-primary-foreground"
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="glass-card rounded-2xl overflow-hidden transition-all duration-500"
        whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)' }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full"
            >
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-medium text-yellow-500">Featured</span>
            </motion.div>
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          
          {/* Hover Overlay with Links */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-xl text-sm font-medium hover:bg-secondary/80 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Code
            </motion.a>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <motion.span 
              className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="p-1 rounded-md bg-primary/10"
            >
              <ArrowUpRight className="text-primary" size={18} />
            </motion.div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack with Enhanced Styling */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.15)' }}
                className="px-2.5 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md border border-border/30 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-cyan/20 to-primary/20 rounded-2xl blur-xl -z-10"
        animate={{ opacity: isHovered ? 0.8 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
