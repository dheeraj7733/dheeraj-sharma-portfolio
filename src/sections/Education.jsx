import { motion } from "motion/react";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
            // Academic Background
          </p>
          <h2 className="font-editorial mt-2 text-3xl font-semibold text-white sm:text-5xl">
            Education
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full border border-white/10 bg-[#070c1d]/70 p-7 transition hover:border-[#d4a359]/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="border border-[#d4a359]/30 bg-[#d4a359]/10 p-3 text-[#d4a359]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-mono text-xs font-semibold text-sky-300">
                    <Award className="h-3.5 w-3.5" />
                    {edu.score}
                  </span>
                </div>

                <h3 className="font-editorial mt-5 text-2xl font-semibold text-white">{edu.degree}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4a359]">
                  {edu.institution}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 font-mono text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-500" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}