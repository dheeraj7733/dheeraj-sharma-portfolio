import { useState } from "react";
import { motion } from "motion/react";
import { BadgeCheck, Calendar, Eye, ShieldCheck } from "lucide-react";
import TiltCard from "../components/TiltCard";
import CertificateModal from "../components/CertificateModal";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
            // Verified Credentials
          </p>
          <h2 className="font-editorial mt-2 text-3xl font-semibold text-white sm:text-5xl">
            Certifications & Training
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <TiltCard className="group flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-[#070c1d]/70 transition hover:border-[#d4a359]/50">
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-52 w-full cursor-pointer overflow-hidden border-b border-white/10 bg-[#040712]"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
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
                    <div className="flex items-center justify-between gap-3">
                      <BadgeCheck className="h-5 w-5 text-sky-400" />
                      <span className="inline-flex items-center gap-1 border border-[#d4a359]/30 bg-[#d4a359]/10 px-2.5 py-1 font-mono text-[11px] text-[#d4a359]">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {cert.badge}
                      </span>
                    </div>

                    <h3 className="font-editorial mt-4 text-xl font-semibold text-white">{cert.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{cert.issuer}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-[#d4a359]" />
                      {cert.date}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1 text-[#d4a359] transition hover:text-amber-300"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Full
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