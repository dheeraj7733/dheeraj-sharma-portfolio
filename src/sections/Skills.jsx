import { motion } from "motion/react";
import { Cpu, Layout, Server } from "lucide-react";
import { skills } from "../data/portfolioData";

const categoryIcons = [Cpu, Layout, Server];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="font-mono text-sm font-medium text-emerald-400">// Tech Stack</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Tools and frameworks I use to design, build, containerize, and deploy modern applications.
          </p>
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
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-zinc-100">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-800 bg-zinc-950/90 px-3 py-1.5 font-mono text-xs text-zinc-300 transition hover:border-emerald-500/40 hover:text-emerald-300"
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
