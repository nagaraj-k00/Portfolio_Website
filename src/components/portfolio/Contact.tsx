import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_nsgtoqo';
const EMAILJS_TEMPLATE_ID = 'template_qg425te';
const EMAILJS_PUBLIC_KEY = '0SaGubQS4P6PgqBqJ';

const socialLinks = [
  { icon: Github, href: 'https://github.com/GPTMudhol', label: 'GitHub', color: 'hover:bg-[#333] hover:text-white' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nagaraj-kamatagi-8b52972a2', label: 'LinkedIn', color: 'hover:bg-[#0077b5] hover:text-white' },
  { icon: Mail, href: 'mailto:nagarajkamatagi@gmail.com', label: 'Email', color: 'hover:bg-primary hover:text-primary-foreground' },
];

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Nagaraj Kamatagi',
        },
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div
        className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-40 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Info Card */}
              <motion.div 
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
                <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <span className="w-1 h-8 bg-primary rounded-full" />
                  Contact Information
                </h3>
                
                <div className="space-y-5 relative z-10">
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:nagarajkamatagi@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                        nagarajkamatagi@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Mudhol, Karnataka, India</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="glass-card rounded-2xl p-8"
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-secondary/50 text-muted-foreground ${color} transition-all duration-300 border border-transparent hover:border-border/50`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    className="w-full glow-button bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href="mailto:nagarajkamatagi@gmail.com">
                      <Mail className="mr-2" size={18} />
                      Send Email
                    </a>
                  </Button>
                </motion.div>
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                  >
                    <a href="https://www.linkedin.com/in/nagaraj-kamatagi-8b52972a2" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={18} />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.form 
                onSubmit={handleSubmit} 
                className="glass-card rounded-2xl p-8 space-y-6 relative overflow-hidden"
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
              >
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan/5 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                <div className="space-y-5 relative z-10">
                  <motion.div animate={{ scale: focusedField === 'name' ? 1.01 : 1 }}>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                    />
                  </motion.div>

                  <motion.div animate={{ scale: focusedField === 'email' ? 1.01 : 1 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                    />
                  </motion.div>

                  <motion.div animate={{ scale: focusedField === 'message' ? 1.01 : 1 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground resize-none transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glow-button bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
