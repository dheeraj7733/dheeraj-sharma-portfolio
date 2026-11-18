
import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {personalInfo.availability}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-6xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="mt-3 text-2xl font-semibold text-zinc-300 sm:text-3xl">
            {personalInfo.role}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {personalInfo.tagline}
          </p>

          {/* Tech Pill Highlights */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Python", "FastAPI", "React.js", "Node.js", "MongoDB", "Docker", "GenAI"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              <FileText className="h-4 w-4 text-emerald-400" />
              Resume
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-800 p-3 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-100"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-800 p-3 text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-100"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
