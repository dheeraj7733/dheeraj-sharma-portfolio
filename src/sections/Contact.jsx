import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
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
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="border border-white/10 bg-[#070c1d]/80 p-8 sm:p-14"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4a359]">
              // Get In Touch
            </p>
            <h2 className="font-editorial mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Let’s Build Autonomous & Scalable Systems
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300/85 sm:text-base">
              Open to AI Automation, Agentic AI, and Full-Stack Developer opportunities. Reach out directly via Email, WhatsApp, or LinkedIn.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 border border-[#d4a359] bg-[#d4a359] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#040712] transition hover:bg-amber-300"
            >
              <Send className="h-3.5 w-3.5" />
              Email Me
            </a>

            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 bg-white/[0.03] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#d4a359] hover:text-[#d4a359]"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#d4a359]" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 border border-white/10 bg-[#040712] px-5 py-3.5 font-mono text-xs text-slate-300 transition hover:border-white/30"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#d4a359]" />
                  <span className="text-[#d4a359]">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d4a359]" />
                {personalInfo.location}
              </span>
              <a href={`tel:${personalInfo.phone}`} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-sky-400" />
                {personalInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-6 uppercase tracking-[0.2em]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 transition hover:text-white"
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