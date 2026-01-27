import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Awards } from "@/components/awards";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = () => (
    <>
      <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4 text-left">ABOUT</button>
      <button onClick={() => scrollToSection('work')} className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4 text-left">WORK</button>
      <button onClick={() => scrollToSection('awards')} className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4 text-left">AWARDS</button>
      <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4 text-left">CONTACT</button>
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <NoiseOverlay />
      
      <main>
        <Hero />
        
        {/* Story / About Section */}
        <section id="about" className="py-32 px-4 flex justify-center bg-black/50 relative overflow-hidden">
          {/* Animated background element */}
          <motion.div 
            className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 group"
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
              <img 
                src="/artist.png" 
                alt="Artist Workspace" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-display">
                <span className="text-primary">DIGITAL</span> <br/>
                ARTISAN
              </h2>
              <div className="h-0.5 w-12 bg-secondary" />
              <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                My work exists at the intersection of traditional anime aesthetics and modern motion graphics. 
                I treat every frame as a painting and every movement as a verse.
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-sm text-white/70">
                <div className="border-l-2 border-primary/30 pl-3">
                  <span className="block text-xs text-primary mb-1">TOOLS</span>
                  Clip Studio, After Effects, Blender
                </div>
                <div className="border-l-2 border-secondary/30 pl-3">
                  <span className="block text-xs text-secondary mb-1">FOCUS</span>
                  Character Acting, FX Animation
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="work">
          <Gallery />
        </div>

        <Awards />

        {/* Footer / CTA */}
        <section id="contact" className="py-32 px-4 text-center border-t border-white/5 bg-gradient-to-b from-background to-black relative">
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-secondary/5 rounded-full blur-[120px]"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-8 relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-display uppercase leading-tight">
              Let's Create <br/> <span className="text-transparent text-stroke hover:text-white transition-colors duration-300 cursor-default">Together</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              Available for freelance projects and collaborations.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-primary hover:text-black rounded-none text-lg px-8 py-6 font-display tracking-wider transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = "mailto:contact@kaizen.studio"}
            >
              INITIATE CONTACT
            </Button>
          </motion.div>
        </section>
      </main>
      
      {/* Fixed Nav Overlay */}
      <nav className="fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-[100] pointer-events-none mix-blend-difference text-white">
        <span 
          className="font-display tracking-widest text-xl cursor-pointer pointer-events-auto hover:text-primary transition-colors relative z-[101]"
          onClick={() => scrollToSection('home')}
        >
          KZN
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex font-mono text-xs gap-6 pointer-events-auto relative z-[101]">
          <NavLinks />
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden pointer-events-auto relative z-[101] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center pointer-events-auto md:hidden border-l border-white/10"
            >
              <div className="flex flex-col gap-8 font-display text-2xl tracking-widest items-center">
                <NavLinks />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
