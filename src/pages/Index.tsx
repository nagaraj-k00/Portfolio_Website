import { Navigation } from '@/components/portfolio/Navigation';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Experience } from '@/components/portfolio/Experience';
import { Education } from '@/components/portfolio/Education';
import { Resume } from '@/components/portfolio/Resume';
import { Testimonials } from '@/components/portfolio/Testimonials';
import { Blog } from '@/components/portfolio/Blog';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { BackToTop } from '@/components/ui/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Resume />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
