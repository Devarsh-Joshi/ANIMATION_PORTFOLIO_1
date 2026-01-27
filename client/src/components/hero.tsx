import { motion, useScroll, useTransform } from "framer-motion";
import { GlitchText } from "@/components/ui/glitch-text";
import { Github, Twitter, Instagram, Mail, FolderOpen, User, Send } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-background/40 z-10" />
        <img 
          src="/hero-bg.png" 
          alt="Cyberpunk City" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-primary mb-4 tracking-[0.2em] text-sm md:text-base">
            VISUAL STORYTELLER // ANIMATOR
          </p>
          <GlitchText text="KAIZEN" size="xl" className="text-white drop-shadow-2xl mb-2" />
          <GlitchText text="STUDIOS" size="lg" className="text-transparent text-stroke opacity-80" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-lg text-muted-foreground font-mono text-sm md:text-base leading-relaxed"
        >
          Crafting immersive worlds and fluid motion. 
          Specializing in 2D animation, compositing, and visual effects.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <NavButton icon={<FolderOpen size={18} />} label="Work" onClick={() => scrollToSection('work')} />
          <NavButton icon={<User size={18} />} label="About" onClick={() => scrollToSection('about')} />
          <NavButton icon={<Send size={18} />} label="Contact" onClick={() => scrollToSection('contact')} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function NavButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group flex items-center gap-3 px-6 py-3 rounded-none border border-white/20 bg-black/40 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
    >
      <span className="text-white/70 group-hover:text-primary transition-colors">{icon}</span>
      <span className="font-mono text-sm text-white group-hover:text-white tracking-widest uppercase">{label}</span>
    </button>
  );
}
