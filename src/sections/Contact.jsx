import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-8 sm:p-12"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-medium text-emerald-400">// Get In Touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Let’s Build Something Together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              I’m currently open to Full-Stack Developer, AI Engineer, and Software Engineering opportunities. Feel free to reach out for roles, collaborations, or project discussions.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              <Send className="h-4 w-4" />
              Say Hello
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3.5 font-mono text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-zinc-400" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/80 pt-8 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-zinc-100"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-zinc-100"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 transition hover:text-zinc-100"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}