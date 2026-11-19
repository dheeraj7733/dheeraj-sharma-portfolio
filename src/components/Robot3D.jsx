import { useState } from "react";
import { motion } from "motion/react";
import { Bot, Cpu, Sparkles, Workflow } from "lucide-react";

export default function Robot3D() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    setRotate({
      x: -deltaY * 14,
      y: deltaX * 16,
    });
    setEyeOffset({
      x: deltaX * 6,
      y: deltaY * 4,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setEyeOffset({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[380px] w-full items-center justify-center sm:h-[440px]"
      style={{ perspective: "1000px" }}
    >
      {/* Ambient Radial Aura */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 blur-3xl" />

      {/* Outer Rotating Holographic Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute h-72 w-72 rounded-full border border-dashed border-emerald-500/25 sm:h-80 sm:w-80"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute h-56 w-56 rounded-full border border-cyan-400/20 sm:h-64 sm:w-64"
      />

      {/* 3D Interactive Robot Head Container */}
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className="animate-float-slow relative flex flex-col items-center"
      >
        {/* Top Neural Antenna */}
        <div className="flex flex-col items-center" style={{ transform: "translateZ(20px)" }}>
          <div className="h-3.5 w-3.5 animate-ping rounded-full bg-emerald-400/75" />
          <div className="-mt-3.5 h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399]" />
          <div className="h-6 w-1 bg-gradient-to-b from-emerald-400 to-zinc-700" />
        </div>

        {/* Robot Cranium / Helmet */}
        <div
          className="relative flex h-44 w-52 flex-col items-center justify-center rounded-[2.2rem] border border-emerald-400/40 bg-gradient-to-b from-zinc-800/90 via-zinc-900/95 to-zinc-950 shadow-[0_20px_50px_rgba(16,185,129,0.2)] backdrop-blur-xl sm:h-48 sm:w-56"
          style={{ transform: "translateZ(35px)" }}
        >
          {/* Side Ear Pods */}
          <div className="absolute -left-3.5 h-16 w-3 rounded-l-xl border border-cyan-400/40 bg-zinc-900 shadow-[0_0_12px_rgba(34,211,238,0.3)]" />
          <div className="absolute -right-3.5 h-16 w-3 rounded-r-xl border border-cyan-400/40 bg-zinc-900 shadow-[0_0_12px_rgba(34,211,238,0.3)]" />

          {/* Forehead Core */}
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-1.5 w-6 rounded-full bg-emerald-400/60" />
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="h-1.5 w-6 rounded-full bg-emerald-400/60" />
          </div>

          {/* Digital Visor Screen */}
          <div
            className="relative flex h-20 w-40 items-center justify-around rounded-2xl border border-cyan-400/30 bg-zinc-950/95 px-4 shadow-inner"
            style={{ transform: "translateZ(18px)" }}
          >
            {/* Left Glowing Eye */}
            <motion.div
              animate={{ x: eyeOffset.x, y: eyeOffset.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/10"
            >
              <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_16px_#34d399]" />
            </motion.div>

            {/* Neural Bridge Wave */}
            <div className="h-0.5 w-5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 opacity-70" />

            {/* Right Glowing Eye */}
            <motion.div
              animate={{ x: eyeOffset.x, y: eyeOffset.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/10"
            >
              <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]" />
            </motion.div>
          </div>

          {/* Voice Synthesizer / Mouth Grille */}
          <div className="mt-4 flex items-center gap-1.5" style={{ transform: "translateZ(12px)" }}>
            {[10, 18, 12, 20, 12, 18, 10].map((height, idx) => (
              <motion.span
                key={idx}
                animate={{ scaleY: [1, 1.4, 0.8, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: idx * 0.12 }}
                style={{ height: `${height}px` }}
                className="w-1 rounded-full bg-gradient-to-t from-emerald-500 to-cyan-400"
              />
            ))}
          </div>
        </div>

        {/* Cybernetic Neck & Chest Core */}
        <div
          className="mt-1 flex flex-col items-center"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="h-4 w-14 rounded-b-lg border-x border-zinc-700 bg-zinc-900" />
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-zinc-900/90 px-4 py-1.5 font-mono text-[11px] font-semibold text-emerald-300 shadow-lg">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>AGENTIC-AI v2.6</span>
          </div>
        </div>

        {/* Floating 3D HUD Badges */}
        <div
          style={{ transform: "translateZ(55px)" }}
          className="absolute -left-10 top-8 hidden items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-zinc-950/90 px-3 py-1.5 font-mono text-xs text-emerald-300 shadow-xl backdrop-blur-md sm:flex"
        >
          <Bot className="h-3.5 w-3.5 text-emerald-400" />
          <span>Autonomous Agents</span>
        </div>

        <div
          style={{ transform: "translateZ(60px)" }}
          className="absolute -right-12 bottom-10 hidden items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-zinc-950/90 px-3 py-1.5 font-mono text-xs text-cyan-300 shadow-xl backdrop-blur-md sm:flex"
        >
          <Workflow className="h-3.5 w-3.5 text-cyan-400" />
          <span>AI Automation</span>
        </div>

        <div
          style={{ transform: "translateZ(45px)" }}
          className="absolute -right-6 top-2 flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900/90 px-2.5 py-1 font-mono text-[10px] text-zinc-300"
        >
          <Sparkles className="h-3 w-3 text-emerald-400" />
          <span>Move Cursor</span>
        </div>
      </motion.div>
    </div>
  );
}