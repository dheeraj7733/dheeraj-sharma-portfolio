import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="font-mono text-zinc-600">Built with React, Vite, Tailwind CSS & Motion</p>
      </div>
    </footer>
  );
}