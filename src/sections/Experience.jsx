import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
            // Career Journey
          </p>
          <h2 className="font-editorial mt-2 text-3xl font-semibold text-white sm:text-5xl">
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
              className="border border-white/10 bg-[#070c1d]/70 p-8"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <div className="border border-[#d4a359]/30 bg-[#d4a359]/10 p-3 text-[#d4a359]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a359]">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 border border-white/10 bg-[#040712] px-3 py-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#d4a359]" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 border border-white/10 bg-[#040712] px-3 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-sky-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">{item.description}</p>

              <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                {item.achievements.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#d4a359]" />
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