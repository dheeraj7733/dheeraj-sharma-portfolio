import { motion } from "motion/react";
import { Cpu, Layout, Server } from "lucide-react";
import { skills } from "../data/portfolioData";

const categoryIcons = [Cpu, Layout, Server];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
            // Core Capabilities
          </p>
          <h2 className="font-editorial mt-2 text-3xl font-semibold text-white sm:text-5xl">
            Technical Stack
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-white/10 bg-[#070c1d]/60 p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#d4a359]" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 bg-[#040712] px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:border-[#d4a359]/50 hover:text-[#d4a359]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}