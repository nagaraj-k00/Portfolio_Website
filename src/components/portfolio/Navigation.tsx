import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((current) => !current);
  };

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-border transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-background shadow-neo-sm' 
          : 'py-4 bg-background'
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute -bottom-1 left-0 h-1 bg-primary"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-3">
          {/* Left - Logo & Name */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-3 cursor-pointer group justify-self-start"
            whileHover={{ x: 2 }}
            whileTap={{ x: 4, y: 4 }}
          >
            <motion.div 
              className="w-10 h-10 border-2 border-border bg-primary flex items-center justify-center shadow-neo-sm"
              whileHover={{ rotate: -4 }}
            >
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </motion.div>
            <span className="text-lg font-black uppercase text-foreground group-hover:text-primary transition-colors duration-200">
              Nagaraj<span className="text-primary">.</span>
            </span>
          </motion.a>

          {/* Center - Navigation Menu */}
          <div className="hidden md:flex items-center justify-self-center">
            <div className="flex items-center border-2 border-border bg-card p-1 shadow-neo-sm">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-3 py-2 text-xs font-black uppercase transition-all duration-200 cursor-pointer lg:px-4 ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right - Actions */}
          <div className="hidden md:flex items-center gap-3 justify-self-end">
            <motion.div whileTap={{ x: 2, y: 2 }}>
              <Button
                variant="ghost"
                onClick={toggleDarkMode}
                className="h-10 w-16 border-2 border-border bg-card p-1 shadow-neo-sm hover:bg-card"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                <motion.span
                  initial={false}
                  animate={{ x: isDarkMode ? 12 : -12, rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid h-7 w-7 place-items-center border-2 border-border bg-accent text-accent-foreground"
                >
                  {isDarkMode ? <Moon size={15} /> : <Sun size={15} />}
                </motion.span>
              </Button>
            </motion.div>

            <motion.div whileTap={{ x: 3, y: 3 }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="h-10 px-5 text-xs uppercase"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="justify-self-end md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 border-2 border-border bg-card text-foreground shadow-neo-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t-4 border-border bg-background mt-3"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`border-2 border-transparent py-3 px-4 text-base font-black uppercase transition-all ${
                      activeSection === item.href.slice(1) 
                        ? 'border-border bg-accent text-accent-foreground shadow-neo-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <motion.div 
                className="flex items-center gap-3 mt-4 pt-4 border-t-2 border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="w-12 h-10 border-2 border-border bg-card text-foreground shadow-neo-sm"
                  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </Button>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="flex-1 h-11 uppercase"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
