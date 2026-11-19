import { motion } from "motion/react";
import { Bot, Terminal, Sparkles, Layers } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { aiTools } from "../data/portfolioData";

const toolIcons = [Bot, Terminal, Sparkles, Layers];

export default function AiTools() {
  return (
    <section id="ai-tools" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
            // AI Ecosystem
          </p>
          <h2 className="font-editorial mt-2 text-3xl font-semibold text-white sm:text-5xl">
            AI Tools & Automation Stack
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool, idx) => {
            const Icon = toolIcons[idx % toolIcons.length];
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TiltCard className="group flex h-full flex-col justify-between border border-white/10 bg-[#070c1d]/70 p-6 transition hover:border-[#d4a359]/60 hover:bg-[#091026]">
                  <div>
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-sky-400 transition group-hover:text-[#d4a359]" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {tool.tag}
                      </span>
                    </div>

                    <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#d4a359]">{tool.category}</p>

                    <p className="mt-4 text-xs leading-relaxed text-slate-400">{tool.useCase}</p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-xs font-semibold text-[#d4a359]">{tool.index}</span>
                    <span className="h-[2px] w-6 bg-sky-400/50 transition group-hover:w-10 group-hover:bg-[#d4a359]" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}