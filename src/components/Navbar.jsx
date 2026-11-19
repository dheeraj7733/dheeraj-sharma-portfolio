import { Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#05070d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-zinc-100">
          <Terminal className="h-5 w-5 text-emerald-400" />
          <span>
            dheeraj<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">.ai</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-400 lg:flex">
          <a href="#projects" className="transition hover:text-emerald-400">Projects</a>
          <a href="#skills" className="transition hover:text-emerald-400">Skills</a>
          <a href="#experience" className="transition hover:text-emerald-400">Experience</a>
          <a href="#education" className="transition hover:text-emerald-400">Education</a>
          <a href="#certifications" className="transition hover:text-emerald-400">Certifications</a>
          <a href="#achievements" className="transition hover:text-emerald-400">Achievements</a>
          <a href="#contact" className="transition hover:text-emerald-400">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-800 bg-zinc-900/90 p-2 text-zinc-300 transition hover:border-emerald-500/40 hover:text-white"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-xs font-bold text-zinc-950 transition hover:opacity-90"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}