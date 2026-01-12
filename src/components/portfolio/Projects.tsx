import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Folder } from 'lucide-react';
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
  },
  {
    id: 6,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with product management, cart system, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    category: 'Full-Stack',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/GPTMudhol',
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollAnimation(0.1);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const cardsY = useTransform(scrollYProgress, [0, 0.5, 1], ["50px", "0px", "-30px"]);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden bg-secondary/20">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="section-badge mb-4"
            >
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A selection of projects I've worked on, showcasing my skills in various technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            style={{ y: cardsY }}
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
        whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)', y: -5 }}
      >
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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          {/* Hover Overlay with Links */}
          <motion.div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
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
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
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
              className="px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 font-display">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-1.5 rounded-lg bg-primary/10"
            >
              <ArrowUpRight className="text-primary" size={16} />
            </motion.div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md border border-border/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
