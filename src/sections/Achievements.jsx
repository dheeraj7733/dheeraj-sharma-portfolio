import { useState } from "react";
import { motion } from "motion/react";
import { Trophy, Sparkles, Eye } from "lucide-react";
import TiltCard from "../components/TiltCard";
import CertificateModal from "../components/CertificateModal";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
            // Leadership & Conferences
          </p>
          <h2 className="font-editorial mt-2 text-3xl font-semibold text-white sm:text-5xl">
            Achievements & Recognition
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <TiltCard className="group flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-[#070c1d]/70 transition hover:border-[#d4a359]/50">
                <div
                  onClick={() => setSelectedCert(item)}
                  className="relative h-52 w-full cursor-pointer overflow-hidden border-b border-white/10 bg-[#040712]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#040712]/60 opacity-0 transition group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 border border-[#d4a359] bg-[#040712]/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a359]">
                      <Eye className="h-4 w-4" />
                      View Certificate
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <Trophy className="h-5 w-5 text-[#d4a359]" />
                      <span className="inline-flex items-center gap-1 border border-white/10 bg-[#040712] px-3 py-1 font-mono text-xs text-slate-300">
                        <Sparkles className="h-3 w-3 text-[#d4a359]" />
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-editorial mt-4 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#d4a359]">
                      {item.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </div>

                  <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(item)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#d4a359] transition hover:text-amber-300"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Full Certificate
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal selectedCert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}