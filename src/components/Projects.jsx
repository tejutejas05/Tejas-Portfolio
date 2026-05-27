import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import exc from "../images/excc.png";
import mudra from "../images/mudrax.png";
import chessImg from "../images/chess.png";
import tttImg from "../images/xo.png";

// ── Animation Variants ──────────────────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.4, ease: "easeOut" } },
};

// ── Project Data ────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Realtime Chess",
    description:
      "A real-time multiplayer Chess game with live WebSocket-based gameplay, move validation, game state persistence, and an intuitive interface for seamless gameplay.",
    img: chessImg,
    github: "https://github.com/nikhilachale/Chess",
    live: "https://chesss.thecabbro.com/",
    tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"],
    category: "Real-time Gaming",
    featured: true,
  },
  
  {
    id: 2,
    title: "MudraX",
    description:
      "A Solana Web3 app that lets users create HD wallets, mint SPL tokens, request airdrops, sign messages, and transfer tokens — all in one place. Supports local wallets and Phantom via Wallet Adapter.",
    img: mudra,
    github: "https://github.com/nikhilachale/MudraX",
    live: "https://mudrax.vercel.app/",
    tags: [
      "React",
      "TypeScript",
      "Solana",
      "Web3",
      "SPL-Token",
      "Wallet Adapter",
      "bip39",
      "Token Launchpad",
    ],
    category: "Web3 Application",
    featured: true,
  },
  {
    id: 3,
    title: "Excalidraw Clone",
    description:
      "A collaborative whiteboard tool inspired by Excalidraw, designed for real-time visual ideation and sketching. Perfect for brainstorming sessions with an intuitive drawing interface.",
    img: exc,
    github: "https://github.com/nikhilachale/Excalidraw",
    live: "https://canvas-ui.onrender.com/",
    tags: ["React", "Tailwind", "TypeScript", "Canvas", "Realtime"],
    category: "Creative Tools",
    featured: false,
  },

  {
    id: 4,
    title: "XOXO Clash",
    description:
      "A real-time multiplayer Tic Tac Toe game built with React and WebSockets. Players compete in live matches with instant move synchronization and persistent game state tracking.",
    img: tttImg,
    github: "https://github.com/nikhilachale/XOXO-Clash",
    live: "https://xoxo-clash-mu.vercel.app/",
    tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"],
    category: "Real-time Gaming",
    featured: true,
  },
];

// ── Component ───────────────────────────────────────────────────────
function Projects() {
  return (
    <section
      id="projects"
      className="py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-neutral-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-neutral-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full mb-4" />
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A curated collection of projects showcasing full-stack development,
            real-time applications, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-14 sm:space-y-18"
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center`}
              >
                {/* ── Image Side ── */}
                <motion.div
                  className={`relative lg:col-span-7 ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                  initial="rest"
                  whileHover="hover"
                >
                  {/* Glow */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-neutral-500/10 via-neutral-400/10 to-neutral-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                 
              

                  {/* Image Card */}
                  <motion.div
                    variants={imageVariants}
                    className="relative bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl group-hover:border-neutral-700 transition-colors duration-500"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.img}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-5 sm:p-6">
                        <div className="flex gap-3">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                            >
                              <FaExternalLinkAlt className="w-3 h-3" />
                              Demo
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* ── Info Side ── */}
                <motion.div
                  className={`lg:col-span-5 space-y-3 ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.15,
                  }}
                >
                  {/* Category & Featured */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-neutral-500 font-medium text-xs uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="bg-neutral-800/60 border border-neutral-700/60 text-neutral-300 px-3 py-0.5 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-neutral-100 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-2.5 py-1 rounded-md hover:border-neutral-600 hover:text-neutral-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-4 pt-1">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 bg-gradient-to-r from-neutral-200 to-neutral-300 text-black px-5 py-2 rounded-lg font-semibold text-xs transition-all duration-300 shadow-lg hover:shadow-neutral-400/20"
                      >
                        Live Demo
                        <FaArrowRight className="w-3 h-3" />
                      </motion.a>
                    )}

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 font-medium text-xs transition-colors duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;