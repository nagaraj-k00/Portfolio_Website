import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 3, suffix: "", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Projects Done" },
  { value: 1, suffix: "", label: "Year Experience" },
];

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-[86svh] items-center overflow-hidden border-b-4 border-border pt-24">
      <div className="neo-grid absolute inset-0 pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="order-2 space-y-7 lg:order-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="section-badge"
            >
              <Sparkles className="h-4 w-4" />
              Available for projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="max-w-4xl text-5xl font-black uppercase leading-[0.9] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Java &amp; <span className="neo-highlight">Full Stack</span> Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground lg:text-xl"
            >
              Building scalable web applications, dependable REST APIs, and polished interfaces with clean, maintainable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap gap-4"
            >
              <Button onClick={scrollToProjects} size="lg" className="group h-14 px-7 text-base uppercase">
                View Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-7 text-base uppercase"
                onClick={() => document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Download />
                Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="grid max-w-xl grid-cols-3 border-4 border-border bg-card shadow-neo"
            >
              {stats.map((stat, index) => (
                <StatItem key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md pr-3 pb-3">
              <div className="absolute inset-3 -right-1 -bottom-1 border-4 border-border bg-accent" />
              <div className="relative aspect-[4/5] overflow-hidden border-4 border-border bg-card shadow-neo-lg">
                <img
                  src="https://i.postimg.cc/vHV7BBMJ/IMG-20250930-161945.jpg"
                  alt="Nagaraj Kamatagi"
                  className="h-full w-full object-cover object-top grayscale-[15%] transition duration-300 hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 border-r-4 border-t-4 border-border bg-primary px-4 py-3 text-sm font-black uppercase text-primary-foreground">
                  Full Stack / QA
                </div>
              </div>
              <motion.div
                animate={{ rotate: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 -top-5 grid h-16 w-16 place-items-center border-4 border-border bg-accent text-2xl font-black text-accent-foreground shadow-neo-sm"
              >
                NK
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index }: { stat: (typeof stats)[0]; index: number }) => {
  const count = useCountUp(stat.value, 1800, true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 + index * 0.08 }}
      className="border-r-4 border-border p-4 last:border-r-0 sm:p-5"
    >
      <div className="text-2xl font-black text-primary sm:text-3xl">
        {count}{stat.suffix}
      </div>
      <div className="mt-1 text-xs font-bold uppercase text-muted-foreground sm:text-sm">{stat.label}</div>
    </motion.div>
  );
};