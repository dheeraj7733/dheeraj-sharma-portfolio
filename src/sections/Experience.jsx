import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="font-mono text-sm font-medium text-emerald-400">// Career Journey</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-400">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">{item.role}</h3>
                    <p className="text-sm font-semibold text-emerald-400">{item.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5">
                    <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-300">{item.description}</p>

              <ul className="mt-5 space-y-2.5 border-t border-zinc-800/80 pt-5">
                {item.achievements.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}