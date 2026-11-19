import { useState } from "react";
import { motion } from "motion/react";

// === REAL BRAND COLORED SVG LOGOS ===
function ChatGPTIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#10a37f] text-white shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-3.5 w-3.5">
        <path d="M12 3.5a4.2 4.2 0 0 1 3.8 2.4A4.2 4.2 0 0 1 20 10a4.2 4.2 0 0 1-1.8 3.4A4.2 4.2 0 0 1 14.4 19a4.2 4.2 0 0 1-3.8-2.4A4.2 4.2 0 0 1 6.4 12.5a4.2 4.2 0 0 1 1.8-3.4A4.2 4.2 0 0 1 12 3.5Z" />
        <circle cx="12" cy="11.2" r="2" />
      </svg>
    </span>
  );
}

function ClaudeIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#d97757] text-white shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-3.5 w-3.5">
        <path d="M12 3v18M3 12h18M5.8 5.8l12.4 12.4M18.2 5.8 5.8 18.2M8.8 4l6.4 16M20 8.8l-16 6.4" />
      </svg>
    </span>
  );
}

function GeminiIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#4285f4] via-[#9b72cb] to-[#d96570] text-white shadow-sm">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M12 2c.4 5.2 4.8 9.6 10 10-5.2.4-9.6 4.8-10 10-.4-5.2-4.8-9.6-10-10 5.2-.4 9.6-4.8 10-10Z" />
      </svg>
    </span>
  );
}

function GammaIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#7c3aed] to-[#ec4899] text-white shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M18 7.5A6.5 6.5 0 1 0 18 16.5H12V12h6" />
      </svg>
    </span>
  );
}

function ElevenLabsIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-zinc-950 shadow-sm">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <rect x="7" y="4.5" width="3.4" height="15" rx="0.8" />
        <rect x="13.6" y="4.5" width="3.4" height="15" rx="0.8" />
      </svg>
    </span>
  );
}

function GoogleAIStudioIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#1a73e8] text-white shadow-sm">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M12 3.5c.3 3.7 3.3 6.7 7 7-3.7.3-6.7 3.3-7 7-.3-3.7-3.3-6.7-7-7 3.7-.3 6.7-3.3 7-7Z" />
        <circle cx="17.5" cy="17.5" r="2" fill="#8ab4f8" />
      </svg>
    </span>
  );
}

function NotebookLMIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#34a853] to-[#4285f4] text-white shadow-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
        <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4Z" />
        <path d="M9 9h6M9 13h4" />
      </svg>
    </span>
  );
}

const aiToolsList = [
  { name: "ChatGPT", Icon: ChatGPTIcon, offset: "lg:translate-x-3" },
  { name: "Claude", Icon: ClaudeIcon, offset: "lg:translate-x-1" },
  { name: "Gemini", Icon: GeminiIcon, offset: "lg:translate-x-0" },
  { name: "Gamma", Icon: GammaIcon, offset: "lg:-translate-x-1" },
  { name: "ElevenLabs", Icon: ElevenLabsIcon, offset: "lg:translate-x-0" },
  { name: "Google AI Studio", Icon: GoogleAIStudioIcon, offset: "lg:translate-x-1" },
  { name: "NotebookLM", Icon: NotebookLMIcon, offset: "lg:translate-x-3" },
];

const devStackList = [
  { name: "Python", badgeColor: "bg-[#3776ab] text-[#ffd43b]", symbol: "PY", offset: "lg:-translate-x-3" },
  { name: "FastAPI", badgeColor: "bg-[#009688] text-white", symbol: "⚡", offset: "lg:-translate-x-1" },
  { name: "React.js", badgeColor: "bg-[#20232a] text-[#61dafb] border border-[#61dafb]/40", symbol: "⚛", offset: "lg:translate-x-0" },
  { name: "JavaScript", badgeColor: "bg-[#f7df1e] text-zinc-950", symbol: "JS", offset: "lg:translate-x-1" },
  { name: "HTML5", badgeColor: "bg-[#e34f26] text-white", symbol: "5", offset: "lg:translate-x-0" },
  { name: "CSS3", badgeColor: "bg-[#1572b6] text-white", symbol: "3", offset: "lg:-translate-x-1" },
  { name: "MySQL", badgeColor: "bg-[#4479a1] text-white", symbol: "DB", offset: "lg:-translate-x-3" },
];

export default function RobotLaptop3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -ny * 9, y: nx * 11 });
    setEyeOffset({ x: nx * 4, y: ny * 2.5 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setEyeOffset({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex w-full max-w-[650px] flex-col items-center justify-center py-4"
      style={{ perspective: "1200px" }}
    >
      {/* Subtle Studio Backdrop Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.2)_0%,rgba(212,163,89,0.12)_55%,transparent_75%)] blur-2xl" />

      {/* 3-Column Command Center Grid: [AI Tools Stream] + [Masculine Mech & Laptop] + [Dev Stack Stream] */}
      <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-12 sm:gap-2">
        {/* LEFT STREAM: AI TOOLS */}
        <div className="order-2 flex flex-wrap justify-center gap-2 sm:order-1 sm:col-span-4 sm:flex-col sm:items-end sm:gap-2.5">
          <span className="mb-1 hidden font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4a359] sm:block">
            AI Ecosystem
          </span>
          {aiToolsList.map(({ name, Icon, offset }, idx) => (
            <motion.div
              key={name}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.6 + idx * 0.25, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
              className={`group flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#070d20]/90 py-1.5 pl-1.5 pr-3 shadow-lg backdrop-blur-md transition hover:border-[#d4a359]/60 ${offset}`}
            >
              <Icon />
              <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-slate-200 group-hover:text-white">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CENTER PIECE: MASCULINE 3D TACTICAL MECH + WORKSTATION LAPTOP */}
        <motion.div
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
          style={{ transformStyle: "preserve-3d" }}
          className="order-1 mx-auto flex w-[250px] flex-col items-center sm:order-2 sm:col-span-4 sm:w-full"
        >
          <svg viewBox="0 0 360 400" className="w-full drop-shadow-[0_26px_38px_rgba(0,0,0,0.9)]">
            <defs>
              {/* Gunmetal & Brushed Steel Gradients */}
              <linearGradient id="steelBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="30%" stopColor="#475569" />
                <stop offset="75%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <linearGradient id="armorPlate" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="45%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              <linearGradient id="darkChassis" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#050814" />
              </linearGradient>

              <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>

              <linearGradient id="screenReflection" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Upward Laptop Screen Light Cone */}
            <polygon points="88,238 272,238 242,105 118,105" fill="url(#screenReflection)" />

            {/* === MASCULINE TACTICAL MECH HELMET (Angular Jawline & Heavy Brow) === */}
            {/* Top Tactical Crest Fin */}
            <polygon points="172,18 188,18 193,38 167,38" fill="url(#armorPlate)" stroke="#94a3b8" strokeWidth="1" />
            <rect x="177" y="14" width="6" height="8" rx="1" fill="#38bdf8" />

            {/* Heavy Side Comms / Ear Armor Blocks */}
            <polygon points="94,68 110,60 110,122 94,114" fill="url(#darkChassis)" stroke="#64748b" strokeWidth="1.5" />
            <rect x="89" y="78" width="5" height="26" fill="url(#goldAccent)" />
            <polygon points="266,68 250,60 250,122 266,114" fill="url(#darkChassis)" stroke="#64748b" strokeWidth="1.5" />
            <rect x="266" y="78" width="5" height="26" fill="url(#goldAccent)" />

            {/* Angular Hexagonal Skull / Helmet */}
            <polygon
              points="126,36 234,36 254,64 248,118 214,148 146,148 112,118 106,64"
              fill="url(#steelBody)"
              stroke="#cbd5e1"
              strokeWidth="1.6"
            />

            {/* Forehead Armor Plating & Center Core */}
            <polygon points="134,42 226,42 214,62 146,62" fill="url(#armorPlate)" />
            <polygon points="174,46 186,46 183,58 177,58" fill="url(#goldAccent)" />

            {/* Sharp Determined Brow Ridge & Angular Visor */}
            <polygon
              points="118,68 180,74 242,68 236,104 180,108 124,104"
              fill="#030712"
              stroke="#38bdf8"
              strokeWidth="1.6"
            />
            {/* Brow Center Nose Bridge Divider */}
            <polygon points="175,68 185,68 183,108 177,108" fill="url(#steelBody)" />

            {/* Sharp Angular Glowing Eyes (Cursor Tracking) */}
            <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
              {/* Left Eye */}
              <polygon points="134,82 168,86 164,96 136,93" fill="#38bdf8" />
              <polygon points="142,85 162,87 160,92 143,90" fill="#ffffff" />

              {/* Right Eye */}
              <polygon points="226,82 192,86 196,96 224,93" fill="#38bdf8" />
              <polygon points="218,85 198,87 200,92 217,90" fill="#ffffff" />
            </g>

            {/* Strong Chiseled Jawline & Chin Guard */}
            <polygon
              points="128,112 162,116 198,116 232,112 212,146 148,146"
              fill="url(#darkChassis)"
              stroke="#64748b"
              strokeWidth="1.4"
            />
            {/* Jaw Cheek Vents */}
            <line x1="138" y1="124" x2="152" y2="127" stroke="#94a3b8" strokeWidth="1.8" />
            <line x1="222" y1="124" x2="208" y2="127" stroke="#94a3b8" strokeWidth="1.8" />
            {/* Chin Gold Plate */}
            <polygon points="164,132 196,132 192,144 168,144" fill="url(#goldAccent)" />

            {/* === HYDRAULIC NECK & BROAD MECH SHOULDERS === */}
            {/* Thick Neck & Pistons */}
            <rect x="152" y="148" width="56" height="22" fill="url(#darkChassis)" />
            <line x1="158" y1="148" x2="154" y2="170" stroke="#94a3b8" strokeWidth="4" />
            <line x1="202" y1="148" x2="206" y2="170" stroke="#94a3b8" strokeWidth="4" />
            <rect x="172" y="150" width="16" height="18" fill="#334155" />

            {/* Broad Heavy-Duty Shoulder Pauldrons */}
            <polygon
              points="58,215 84,174 134,168 226,168 276,174 302,215 290,248 70,248"
              fill="url(#steelBody)"
              stroke="#cbd5e1"
              strokeWidth="1.6"
            />
            {/* Left & Right Shoulder Gold Stripes */}
            <polygon points="74,192 96,178 106,184 82,202" fill="url(#goldAccent)" />
            <polygon points="286,192 264,178 254,184 278,202" fill="url(#goldAccent)" />

            {/* Angular Hexagonal Chest Reactor */}
            <polygon
              points="180,182 202,195 202,217 180,230 158,217 158,195"
              fill="#050814"
              stroke="url(#goldAccent)"
              strokeWidth="2.5"
            />
            <polygon points="180,190 194,198 194,214 180,222 166,214 166,198" fill="#38bdf8" />
            <circle cx="180" cy="206" r="4.5" fill="#ffffff" />

            {/* Heavy Mechanical Forearms Reaching to Keyboard */}
            <polygon points="62,212 86,216 96,282 72,286" fill="url(#darkChassis)" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="298,212 274,216 264,282 288,286" fill="url(#darkChassis)" stroke="#64748b" strokeWidth="1.5" />

            {/* === REALISTIC PRO WORKSTATION LAPTOP === */}
            {/* Anodized Aluminum Display Lid */}
            <rect x="76" y="220" width="208" height="126" rx="10" fill="url(#darkChassis)" stroke="#94a3b8" strokeWidth="2" />
            {/* Inner Glass Screen */}
            <rect x="84" y="228" width="192" height="110" rx="5" fill="#030712" />

            {/* IDE Top Bar */}
            <rect x="84" y="228" width="192" height="15" rx="3" fill="#0f172a" />
            <circle cx="94" cy="235.5" r="2.5" fill="#f43f5e" />
            <circle cx="102" cy="235.5" r="2.5" fill="#fbbf24" />
            <circle cx="110" cy="235.5" r="2.5" fill="#10b981" />
            <text x="148" y="238" fill="#cbd5e1" fontSize="8" fontFamily="monospace">
              autonomous_agent.py
            </text>

            {/* Live Code Lines */}
            <rect x="96" y="252" width="58" height="4.5" rx="2" fill="#f59e0b" />
            <rect x="160" y="252" width="84" height="4.5" rx="2" fill="#38bdf8" />

            <rect x="108" y="264" width="96" height="4.5" rx="2" fill="#10b981" />
            <rect x="210" y="264" width="46" height="4.5" rx="2" fill="#a855f7" />

            <rect x="108" y="276" width="70" height="4.5" rx="2" fill="#94a3b8" />
            <rect x="184" y="276" width="72" height="4.5" rx="2" fill="#38bdf8" />

            <rect x="96" y="288" width="104" height="4.5" rx="2" fill="#f59e0b" />
            <rect x="108" y="300" width="128" height="4.5" rx="2" fill="#34d399" />

            {/* IDE Bottom Telemetry Bar */}
            <rect x="84" y="322" width="192" height="16" rx="3" fill="#0c4a6e" />
            <text x="96" y="332.5" fill="#e0f2fe" fontSize="7.5" fontFamily="monospace">
              ● SYSTEM ONLINE  |  AGENTIC AI READY
            </text>

            {/* Realistic Metallic Unibody Laptop Base */}
            <polygon
              points="58,346 302,346 324,366 36,366"
              fill="url(#armorPlate)"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            <polygon points="78,349 282,349 292,358 68,358" fill="#090d16" />
            <path d="M36 366 L324 366 L316 373 L44 373 Z" fill="#334155" />
            <rect x="156" y="366" width="48" height="3.5" rx="1.5" fill="#0f172a" />
          </svg>
        </motion.div>

        {/* RIGHT STREAM: CORE TECH STACK */}
        <div className="order-3 flex flex-wrap justify-center gap-2 sm:col-span-4 sm:flex-col sm:items-start sm:gap-2.5">
          <span className="mb-1 hidden font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-400 sm:block">
            Core Tech Stack
          </span>
          {devStackList.map(({ name, badgeColor, symbol, offset }, idx) => (
            <motion.div
              key={name}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.7 + idx * 0.25, repeat: Infinity, ease: "easeInOut", delay: idx * 0.18 }}
              className={`group flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#070d20]/90 py-1.5 pl-1.5 pr-3.5 shadow-lg backdrop-blur-md transition hover:border-sky-400/60 ${offset}`}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-extrabold shadow-sm ${badgeColor}`}>
                {symbol}
              </span>
              <span className="whitespace-nowrap font-mono text-[11px] font-semibold tracking-wide text-slate-200 group-hover:text-white">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}