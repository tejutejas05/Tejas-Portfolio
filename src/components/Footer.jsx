import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const RESUME_LINK =
  "https://drive.google.com/drive/folders/1NgOfSic3HvXTgYsOH_I3kECwt-lhcXyE?usp=drive_link";

const socials = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/nikhilachale", hoverClass: "hover:text-white hover:border-neutral-500" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/nikhil-achale-b398aa195/", hoverClass: "hover:text-blue-400 hover:border-blue-400/40" },
  { name: "Email", icon: FaEnvelope, href: "mailto:nikhilsmailbox01@gmail.com", hoverClass: "hover:text-red-400 hover:border-red-400/40" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/7691912890", hoverClass: "hover:text-green-400 hover:border-green-400/40" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: "easeOut" } }),
};

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="relative mt-16 overflow-hidden">
      {/* ── Decorative BG ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-neutral-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* ── Top divider ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* ── CTA Banner ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-14"
        >
         
          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href="mailto:nikhilsmailbox01@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-200 to-neutral-300 text-black px-6 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-neutral-400/20 transition-all duration-300"
            >
              <FaEnvelope className="w-3.5 h-3.5" />
              Get In Touch
            </motion.a>
            <motion.a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-neutral-100 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300"
            >
              <FaDownload className="w-3.5 h-3.5" />
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* ── Grid: Info · Nav · Social ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mb-12"
        >
          {/* Col 1 — Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Contact
            </h4>
            <div className="flex items-center gap-2.5 text-neutral-400 text-sm">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
              <span>NIT Patna, Bihar, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-neutral-400 text-sm">
              <FaEnvelope className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
              <a
                href="mailto:nikhilsmailbox01@gmail.com"
                className="hover:text-neutral-200 transition-colors"
              >
                nikhilsmailbox01@gmail.com
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-400 text-sm hover:text-neutral-200 hover:translate-x-1 transform transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Socials
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={s.name}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-400 transition-all duration-300 ${s.hoverClass}`}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Nikhil Achale
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 text-xs transition-colors duration-300"
          >
            <FaArrowUp className="w-3 h-3" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;