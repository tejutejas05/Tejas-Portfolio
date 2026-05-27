import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/tejutejas05", label: "GitHub", hoverColor: "#ffffff" },
  { icon: FaLinkedin, href: "www.linkedin.com/in/tejas-r-tej05", label: "LinkedIn", hoverColor: "#60a5fa" },
  { icon: FaEnvelope, href: "mailto:tejasprof05@gmail.com", label: "Email", hoverColor: "#f87171" },
  { icon: FaWhatsapp, href: "https://wa.me/7022840448", label: "WhatsApp", hoverColor: "#4ade80" },
];

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "AI", label: "Focused" },
];

const tags = ["Go", "Python", "Docker", "SQL", "AI Agents"];

function Main() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialsRef = useRef(null);
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);

  const [hoveredSocial, setHoveredSocial] = useState(null);

  /* ── GSAP entrance animation ── */
  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.from(contentRef.current.children, {
      y: 70, opacity: 0, duration: 1, stagger: 0.13, ease: "power4.out",
    })
      .from(subtitleRef.current, { y: 24, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
      .from(socialsRef.current.children, { y: 20, opacity: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" }, "-=0.4");
  }, []);

  /* ── Parallax orbs ── */
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 22;
    const y = (e.clientY / window.innerHeight - 0.5) * 22;
    gsap.to(orb1.current, { x: x * 1.4, y: y * 1.4, duration: 1.2, ease: "power1.out" });
    gsap.to(orb2.current, { x: -x, y: -y, duration: 1.4, ease: "power1.out" });
    gsap.to(orb3.current, { x: x * 0.7, y: y * 1.8, duration: 1.0, ease: "power1.out" });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,#111_0%,#000_70%)] flex flex-col items-center justify-center"
    >
      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Parallax atmosphere orbs */}
      <div ref={orb1} className="absolute top-[22%] left-[14%] w-[380px] h-[380px] rounded-full blur-[100px] bg-white/[0.07] pointer-events-none" />
      <div ref={orb2} className="absolute bottom-[20%] right-[14%] w-[300px] h-[300px] rounded-full blur-[100px] bg-neutral-400/[0.08] pointer-events-none" />
      <div ref={orb3} className="absolute top-[62%] left-[48%] w-[260px] h-[260px] rounded-full blur-[90px] bg-neutral-500/[0.06] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-[720px] mx-auto px-6 text-center">
        <div ref={contentRef}>
          {/* Status badge */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5 bg-black/65 border border-white/[0.08] rounded-full px-5 py-2 backdrop-blur-[10px] animate-badge-glow font-mono text-[11px] tracking-[0.1em] text-white/40 uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block shrink-0" />
              Open to opportunities
            </div>
          </div>

          {/* Name */}
          <h1 className="na-name font-playfair animate-shimmer select-none mb-5">
            Nikhil
            <br />
            Achale
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center justify-center gap-3.5 mb-2">
            <div className="h-px w-11 shrink-0 bg-gradient-to-r from-transparent via-white/[0.13] to-transparent" />
            <p className="font-mono text-xs tracking-[0.12em] text-white/35 uppercase min-w-[210px]">
              <Typewriter
                words={["Full Stack Developer", "Web3 Enthusiast", "Backend Engineer", "React Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </p>
            <div className="h-px w-11 shrink-0 bg-gradient-to-r from-transparent via-white/[0.13] to-transparent" />
          </div>
        </div>

        {/* Tagline */}
        <p
          ref={subtitleRef}
          className="font-mono text-[13px] text-white/[0.22] max-w-[380px] mx-auto leading-[1.75] mt-4 mb-6"
        >
          Building performant web apps, real‑time systems &amp; Web3 experiences
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-[0.09em] uppercase text-white/[0.28] bg-white/[0.04] border border-white/[0.08] px-3.5 py-1 rounded-full transition-all duration-200 hover:text-white/70 hover:bg-white/[0.09]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div ref={socialsRef} className="flex items-center justify-center gap-3.5">
          {socials.map((s) => {
            const active = hoveredSocial === s.label;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-[8px] no-underline transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-110"
                style={{
                  borderColor: active ? s.hoverColor + "55" : undefined,
                  color: active ? s.hoverColor : "rgba(255,255,255,0.35)",
                }}
                onMouseEnter={() => setHoveredSocial(s.label)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <s.icon className="w-4 h-4 transition-colors duration-200" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-16 left-0 right-0 z-10 flex items-center justify-center gap-3 px-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/[0.02] border border-white/[0.07] rounded-xl py-3.5 px-5 text-center min-w-[88px] animate-border-breathe transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-0.5"
          >
            <div className="font-playfair font-bold text-[22px] text-white mb-0.5">
              {s.value}
            </div>
            <div className="font-mono text-[9px] tracking-[0.13em] text-white/30 uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-scroll-bob">
        <span className="font-mono text-[9px] tracking-[0.15em] text-white/20 uppercase">
          scroll
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}

export default Main;