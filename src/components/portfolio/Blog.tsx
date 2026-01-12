import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

export const Blog = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const navigate = useNavigate();

  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="section-badge mb-4">Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-4">
              Technical Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="pro-card group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="tech-badge">{post.category}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors font-display line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};