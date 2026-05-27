import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "CDAC Patna",
    logo: "https://www.presentations.gov.in/wp-content/uploads/2020/06/Preview-22.png",
    location: "Patna, India",
    duration: "Feb 2025 – Apr 2025",
    points: [
      "Designed and developed responsive web pages for an internal government project.",
      "Collaborated with senior engineers on UI/UX improvements and accessibility standards.",
      "Optimized site performance and ensured cross-browser compatibility.",
    ],
    tags: ["HTML/CSS", "JavaScript", "Responsive Design"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: "easeOut" },
  }),
};

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.1}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 sm:left-4 top-8 w-3 h-3 rounded-full bg-neutral-400 border-2 border-black shadow-lg shadow-neutral-400/30 hidden sm:block" />

                {/* Card */}
                <div className="group bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 sm:p-8 transition-all duration-500 shadow-xl hover:shadow-neutral-500/10">
                  {/* Top row: logo + meta */}
                  <div className="flex flex-col sm:flex-row gap-5 mb-5">
                    {/* Logo */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-neutral-800 bg-white flex-shrink-0 shadow-md">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-neutral-300 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt className="w-3 h-3" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;