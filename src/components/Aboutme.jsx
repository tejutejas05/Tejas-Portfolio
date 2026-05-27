import { useRef } from "react";
import Me from "../images/me.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { FaCode, FaServer, FaCubes } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: FaCode, label: "Frontend", detail: "React, Next.js, TypeScript" },
  { icon: FaServer, label: "Backend", detail: "Node.js, WebSockets, DBs" },
  { icon: FaCubes, label: "Web3", detail: "Solidity, Rust, Solana" },
];

function Aboutme() {
  const headRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const splitText = new SplitType(textRef.current, {
      types: "lines, words",
    });

    gsap.from([headRef.current, imgRef.current], {
      opacity: 0,
      y: 80,
      duration: 0.5,
      scrollTrigger: {
        trigger: headRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(splitText.words, {
      opacity: 0,
      y: 40,
      duration: 0.3,
      stagger: 0.025,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 72%",
        end: "top 55%",
        toggleActions: "play none none reverse",
      },
    });

    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.12,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-neutral-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            ref={headRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full" />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Image */}
          <div
            ref={imgRef}
            className="md:col-span-4 flex justify-center md:justify-start"
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-neutral-500/30 to-neutral-700/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 group-hover:border-neutral-700 transition-colors duration-500 shadow-2xl">
                <img
                  src={Me}
                  alt="Tejas R"
                  className="w-52 h-52 sm:w-60 sm:h-60 md:w-full md:h-auto object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="md:col-span-8 space-y-5">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
              I'm{" "}
              <span className="font-semibold text-neutral-100">
                Tejas R
              </span>
              , a{" "}
              <span className="text-neutral-100 font-medium">
                Full Stack Developer & ML Engineer
              </span>{" "}
              and final-year Computer Science student at{" "}
              <span className="text-neutral-100 font-medium">Alva's Institute of Engineering & Technology</span>.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
              I work with{" "}
              <span className="text-neutral-100">
                Python, Flask, Go, Docker, MySQL, and modern web technologies
              </span>{" "}
              to develop efficient backend systems and responsive applications.
            </p>

            {/* <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
              I have developed projects including{" "}
              <span className="text-neutral-100">
                Face Recognition Attendance Systems, Hotel Management Systems,
                AI-based applications, and Machine Learning solutions
              </span>{" "}
              .
            </p> */}

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400">
              I'm passionate about{" "}
              <span className="font-medium text-neutral-200">
                System Design, AI agents, Backend Architecture,
                and Scalable Software Development.
              </span>{" "}
              I enjoy building clean, efficient, and real-world applications
              with modern technologies.{" "}
            </p>
          </div>
        </div>

        {/* Highlight cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-300 flex-shrink-0">
                <h.icon className="w-4 h-4 text-neutral-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-200">
                  {h.label}
                </p>
                <p className="text-xs text-neutral-500">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aboutme;