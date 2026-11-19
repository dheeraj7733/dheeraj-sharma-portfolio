import { motion } from "motion/react";
import { ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import RobotLaptop3D from "../components/RobotLaptop3D";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] py-16 sm:py-24">
      {/* Subtle Midnight & Gold Ambient Lighting */}
      <div className="pointer-events-none absolute -top-24 left-10 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 -z-10 h-96 w-96 rounded-full bg-[#d4a359]/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
        {/* LEFT SIDE: Greeting, Name, Agentic AI Role & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-6"
        >
          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 border border-[#d4a359]/40 bg-[#d4a359]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4a359]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4a359]" />
            <span>{personalInfo.availability}</span>
          </div>

          {/* Hello, I am Dheeraj Sharma */}
          <p className="text-sm font-medium tracking-wide text-slate-300 sm:text-base">
            Hello, I am
          </p>
          <h1 className="font-editorial mt-1 text-4xl font-semibold tracking-wide text-white sm:text-6xl">
            {personalInfo.name}
          </h1>

          {/* Agentic AI & Full-Stack Title */}
          <h2 className="mt-3 text-lg font-semibold text-[#d4a359] sm:text-xl">
            {personalInfo.role}
          </h2>

          {/* Short Description */}
          <p className="mt-5 text-sm leading-relaxed text-slate-300/85 sm:text-base">
            Building autonomous Agentic AI workflows, intelligent automation systems, and scalable full-stack web applications from backend APIs to modern interactive interfaces.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 border border-[#d4a359] bg-[#d4a359] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#040712] transition hover:bg-amber-300"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#d4a359] hover:text-[#d4a359]"
            >
              <FileText className="h-3.5 w-3.5 text-[#d4a359]" />
              <span>Resume</span>
            </a>

            <div className="flex items-center gap-2 pl-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="border border-white/15 bg-white/[0.02] p-3 text-slate-300 transition hover:border-[#d4a359] hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-white/15 bg-white/[0.02] p-3 text-slate-300 transition hover:border-sky-400 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: 3D Robot + Laptop + Floating Tech Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <RobotLaptop3D />
        </motion.div>
      </div>
    </section>
  );
}