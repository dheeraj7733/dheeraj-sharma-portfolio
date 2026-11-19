import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="bg-topo-band relative border-y border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top Minimal Label */}
        <div className="mb-12 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
          <span className="h-1.5 w-1.5 bg-[#d4a359]" />
          <span>About Me</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Gold-Framed Portrait Photo Slot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Decorative Offset Architectural Frame */}
              <div className="absolute -inset-3 border border-[#d4a359]/30 bg-white/[0.01]" />

              {/* Main Portrait Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#d4a359]/60 bg-[#080e21] shadow-[0_25px_60px_rgba(0,0,0,0.75)]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />

                {/* Subtle Bottom Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#040712] via-[#040712]/70 to-transparent p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4a359]">
                    {personalInfo.location}
                  </p>
                  <p className="font-editorial mt-0.5 text-xl font-semibold text-white">
                    {personalInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Description & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
              {personalInfo.name} · Developer Profile
            </p>

            <h2 className="font-editorial mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {personalInfo.aboutHeading}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300/90 sm:text-base">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Key Metrics Row */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-y border-white/10 py-6">
              <div>
                <p className="font-editorial text-3xl font-semibold text-white">80.5%</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">BCA Score</p>
              </div>
              <div>
                <p className="font-editorial text-3xl font-semibold text-[#d4a359]">2x</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">Conf. Coordinator</p>
              </div>
              <div>
                <p className="font-editorial flex items-center gap-1.5 text-3xl font-semibold text-sky-400">
                  <span>AI</span>
                  <Sparkles className="h-4 w-4 text-[#d4a359]" />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">Agentic Focus</p>
              </div>
            </div>

            {/* Editorial Action & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 border border-white/20 bg-white/[0.03] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition hover:border-[#d4a359] hover:text-[#d4a359]"
              >
                <span className="h-3 w-[2px] bg-[#d4a359]" />
                <span>View Projects</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#d4a359]" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 px-4 py-3 text-xs text-slate-300 transition hover:border-white/30 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 px-4 py-3 text-xs text-slate-300 transition hover:border-white/30 hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-[#d4a359]" />
                {personalInfo.location}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}