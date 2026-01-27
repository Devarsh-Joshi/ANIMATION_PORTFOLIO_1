import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NEON GENESIS",
    category: "Character Animation",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1920&auto=format&fit=crop",
    year: "2025",
    description: "Lead animator for the opening sequence. Focused on high-speed combat fluidity and particle effects."
  },
  {
    id: 2,
    title: "CYBER SOUL",
    category: "Visual Effects",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1920&auto=format&fit=crop",
    year: "2024",
    description: "Compositing and VFX supervision for a short film about AI consciousness in a decaying metropolis."
  },
  {
    id: 3,
    title: "VOID RUNNER",
    category: "Compositing",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1920&auto=format&fit=crop",
    year: "2024",
    description: "Integrated 2D characters into 3D environments using camera mapping and deep compositing techniques."
  },
  {
    id: 4,
    title: "TOKYO GHOST",
    category: "Keyframes",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1920&auto=format&fit=crop",
    year: "2023",
    description: "Provided key animation for emotional acting cuts in this award-winning music video."
  }
];

export function Gallery() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <section className="relative min-h-screen py-24 flex items-center bg-background overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "circOut" }}
            className="absolute inset-0 w-full h-full"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
             <div className="absolute inset-0 bg-background/60 z-10" />
            <img 
              src={activeProject.image} 
              alt="Background Preview" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Project List */}
        <div className="space-y-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12"
           >
            <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">/ Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-display text-white">CASE STUDIES</h3>
           </motion.div>

           <div className="flex flex-col">
             {projects.map((project) => (
               <ProjectListItem 
                 key={project.id} 
                 project={project} 
                 isActive={activeProject.id === project.id}
                 onHover={() => setActiveProject(project)}
               />
             ))}
           </div>
        </div>

        {/* Project Detail Preview */}
        <div className="hidden lg:flex flex-col justify-center h-full pl-12 border-l border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                 <span className="text-6xl font-display text-white/20">0{activeProject.id}</span>
                 <div className="h-px bg-white/20 flex-1" />
              </div>
              
              <h2 className="text-5xl font-display text-white leading-none tracking-wide">
                {activeProject.title}
              </h2>
              
              <div className="flex gap-4 text-sm font-mono">
                <span className="text-primary px-2 py-1 border border-primary/30 bg-primary/10">
                  {activeProject.category}
                </span>
                <span className="text-white/60 px-2 py-1 border border-white/10">
                  {activeProject.year}
                </span>
              </div>

              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                {activeProject.description}
              </p>

              <button className="group flex items-center gap-2 text-white hover:text-primary transition-colors mt-4">
                <span className="font-mono uppercase tracking-wider text-sm">View Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function ProjectListItem({ 
  project, 
  isActive, 
  onHover 
}: { 
  project: Project; 
  isActive: boolean; 
  onHover: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={cn(
        "group cursor-pointer py-6 border-b border-white/10 relative transition-all duration-500",
        isActive ? "pl-8 border-primary/50" : "hover:pl-4 hover:border-white/30"
      )}
    >
      {/* Active Indicator */}
      {isActive && (
        <motion.div 
          layoutId="activeIndicator"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary shadow-[0_0_15px_rgba(0,255,255,0.5)]" 
        />
      )}

      <div className="flex justify-between items-center">
        <h3 className={cn(
          "text-2xl md:text-4xl font-display transition-colors duration-300",
          isActive ? "text-white" : "text-white/40 group-hover:text-white/80"
        )}>
          {project.title}
        </h3>
        <span className={cn(
          "font-mono text-xs transition-colors duration-300",
          isActive ? "text-primary" : "text-white/20"
        )}>
          {project.category} // {project.year}
        </span>
      </div>
    </motion.div>
  );
}
