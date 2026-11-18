import { Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-zinc-100">
          <Terminal className="h-5 w-5 text-emerald-400" />
          <span>dheeraj<span className="text-emerald-400">.dev</span></span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          <a href="#projects" className="transition hover:text-zinc-100">Projects</a>
          <a href="#skills" className="transition hover:text-zinc-100">Skills</a>
          <a href="#experience" className="transition hover:text-zinc-100">Experience</a>
          <a href="#contact" className="transition hover:text-zinc-100">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-300 transition hover:border-zinc-700 hover:text-white"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}