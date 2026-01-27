import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
}

const awards: Award[] = [
  { id: 1, title: "Best Visual Effects", organization: "Anime Awards 2024", year: "2024" },
  { id: 2, title: "Outstanding Achievement in Animation", organization: "Annie Awards", year: "2023" },
  { id: 3, title: "Best Art Direction", organization: "Crunchyroll Awards", year: "2023" },
  { id: 4, title: "Excellence in Digital Art", organization: "Japan Media Arts Festival", year: "2022" },
];

export function Awards() {
  return (
    <section id="awards" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white mb-4">RECOGNITION</h2>
          <p className="text-muted-foreground font-mono">INDUSTRY AWARDS & HONORS</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-card/30 border border-white/5 p-8 hover:bg-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-primary text-sm border border-primary/20 px-2 py-1 rounded bg-primary/5">
                  {award.year}
                </span>
                <div className="h-2 w-2 bg-white/20 rounded-full group-hover:bg-primary transition-colors" />
              </div>
              
              <h3 className="text-2xl font-display text-white mb-2 group-hover:text-primary transition-colors">
                {award.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                {award.organization}
              </p>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/10 group-hover:border-primary/50 transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/10 group-hover:border-primary/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
