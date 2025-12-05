import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = ['All', 'React', 'Node.js', 'DevOps', 'Career'];

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Learn how to design and implement a microservices architecture that scales efficiently with your application needs.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    category: 'Node.js',
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    tags: ['Node.js', 'Microservices', 'Architecture'],
  },
  {
    id: 2,
    title: 'React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to optimize your React applications for better performance and user experience.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    category: 'React',
    date: 'Nov 25, 2024',
    readTime: '6 min read',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    id: 3,
    title: 'CI/CD Pipeline Best Practices',
    excerpt: 'A comprehensive guide to setting up robust CI/CD pipelines for your development workflow.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop',
    category: 'DevOps',
    date: 'Nov 18, 2024',
    readTime: '10 min read',
    tags: ['DevOps', 'CI/CD', 'Automation'],
  },
  {
    id: 4,
    title: 'How I Landed My Dream Job as a Developer',
    excerpt: 'My journey from bootcamp graduate to senior developer at a top tech company, and lessons learned along the way.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    category: 'Career',
    date: 'Nov 10, 2024',
    readTime: '5 min read',
    tags: ['Career', 'Tips', 'Growth'],
  },
  {
    id: 5,
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into React Server Components and how they change the way we build web applications.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop',
    category: 'React',
    date: 'Nov 5, 2024',
    readTime: '7 min read',
    tags: ['React', 'Server Components', 'Next.js'],
  },
  {
    id: 6,
    title: 'Docker for Development: A Practical Guide',
    excerpt: 'Learn how to use Docker to create consistent development environments across your team.',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop',
    category: 'DevOps',
    date: 'Oct 28, 2024',
    readTime: '9 min read',
    tags: ['Docker', 'DevOps', 'Development'],
  },
];

export const Blog = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono mb-2">{'// Latest Articles'}</p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Blog & Insights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sharing my knowledge and experiences in software development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={`transition-all duration-300 ${
                  activeCategory === category
                    ? 'glow-button bg-primary text-primary-foreground'
                    : 'border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10"
            >
              View All Articles
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
