import { motion } from "motion/react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import TiltCard from "../components/TiltCard";
import { featuredProjects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
            // Selected Work
          </p>
          <h2 className="font-editorial mt-2 text-3xl font-semibold text-white sm:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <TiltCard className="group flex h-full flex-col justify-between border border-white/10 bg-[#070c1d]/80 p-8 transition hover:border-[#d4a359]/50">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs font-semibold tracking-widest text-[#d4a359]">
                        {project.index}
                      </span>
                      <h3 className="font-editorial mt-1 text-2xl font-semibold text-white transition group-hover:text-[#d4a359]">
                        {project.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-white/10 bg-white/[0.02] p-2.5 text-slate-300 transition hover:border-white/30 hover:text-white"
                        aria-label={`${project.title} Source Code`}
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-[#d4a359]/40 bg-[#d4a359]/10 p-2.5 text-[#d4a359] transition hover:bg-[#d4a359]/20"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-300/85">{project.description}</p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4a359]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-[#040712] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}