import { motion } from "motion/react";
import { ExternalLink, FolderGit2, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { featuredProjects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="font-mono text-sm font-medium text-emerald-400">// Featured Work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects I’ve Built
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Production-ready full-stack web applications and AI services architected for reliability and clean user experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:border-emerald-500/40 hover:bg-zinc-900"
            >
              <div>
                {/* Top Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-400">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-zinc-400">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100"
                      aria-label={`${project.title} Source Code`}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-zinc-800 p-2 text-zinc-400 transition hover:border-emerald-500/50 hover:text-emerald-400"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <ul className="mt-5 space-y-2">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-7 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-zinc-950 px-2.5 py-1 font-mono text-xs text-zinc-300 border border-zinc-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}