import React, { useRef, useEffect, useMemo, useState, useCallback } from "react";
import {
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { galleryImages } from "../data/gallery";

// ── Gallery helpers ──────────────────────────────────────────────────────────
const IMAGE_SRCS = galleryImages.map((img) => img.src);

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ImageCard = ({ src, alt, onLoad }) => (
  <div
    className="w-full flex-shrink-0 bg-gray-200 dark:bg-[#111] transition-transform duration-300 hover:scale-[1.02] cursor-pointer relative"
    style={{ height: "clamp(150px, 18vw, 280px)", willChange: "transform" }}
  >
    <img
      src={process.env.PUBLIC_URL + src}
      alt={alt || "Gallery Image"}
      loading="lazy"
      onLoad={onLoad}
      onError={(e) => { e.target.style.opacity = "0"; }}
      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

// Watches <html class="dark"> and returns true when dark mode is active
const useIsDark = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() =>
      setIsDark(el.classList.contains("dark"))
    );
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return isDark;
};
// ────────────────────────────────────────────────────────────────────────────

const HomePage = ({ personalInfo, setCurrentPage, handleDownloadCV, handleViewCV }) => {
  const isDark = useIsDark();

  // ── Refs & ready state ───────────────────────────────────────────────
  const sectionRef   = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const loadedCountRef = useRef(0);

  const handleItemLoad = useCallback(() => {
    loadedCountRef.current += 1;
    if (!isReady && loadedCountRef.current >= 1) setIsReady(true);
  }, [isReady]);

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // ── Column data ──────────────────────────────────────────────────────
  const colMedia = useMemo(() => {
    const base = IMAGE_SRCS.length >= 8
      ? shuffle(IMAGE_SRCS)
      : shuffle([...IMAGE_SRCS, ...IMAGE_SRCS, ...IMAGE_SRCS]);
    const c1 = base.filter((_, i) => i % 4 === 0);
    const c2 = base.filter((_, i) => i % 4 === 1);
    const c3 = base.filter((_, i) => i % 4 === 2);
    const c4 = base.filter((_, i) => i % 4 === 3);
    return {
      col1: [...c1, ...c1],
      col2: [...c2, ...c2],
      col3: [...c3, ...c3],
      col4: [...c4, ...c4],
    };
  }, []);

  // ── Scroll-driven animations ─────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const sp = useSpring(scrollYProgress, { stiffness: 80, damping: 18, mass: 0.5 });

  const bW = useTransform(sp, [0, 0.15], ["88vw", "100vw"]);
  const bH = useTransform(sp, [0, 0.15], ["78vh", "100vh"]);
  const bR = useTransform(sp, [0, 0.15], ["40px", "0px"]);

  const rY = useTransform(sp, [0.15, 1], [-42, -6]);
  const rX = useTransform(sp, [0.15, 1], [22, 3]);
  const rZ = useTransform(sp, [0.15, 1], [12, 1]);
  const tZ = useTransform(sp, [0.15, 1], [-700, 0]);

  const yC1 = useTransform(sp, [0.15, 1], ["0%",   "-38%"]);
  const yC2 = useTransform(sp, [0.15, 1], ["-38%", "12%"]);
  const yC3 = useTransform(sp, [0.15, 1], ["0%",   "-38%"]);
  const yC4 = useTransform(sp, [0.15, 1], ["-28%", "18%"]);

  const columns = [
    { data: colMedia.col1, y: yC1, key: "c1" },
    { data: colMedia.col2, y: yC2, key: "c2" },
    { data: colMedia.col3, y: yC3, key: "c3" },
    { data: colMedia.col4, y: yC4, key: "c4" },
  ];

  // Vignette colour changes with dark/light mode
  const vigC = isDark ? "rgba(0,0,0,1)" : "rgba(243,244,246,1)";
  const vignetteStyle = {
    boxShadow:
      `inset 0 100px 150px -50px ${vigC},` +
      `inset 0 -100px 150px -50px ${vigC},` +
      `inset 140px 0 150px -50px ${vigC},` +
      `inset -140px 0 150px -50px ${vigC}`,
  };

  // ── Hero animation variants ──────────────────────────────────────────
  const heroContainer = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const heroItem = {
    hidden:  { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 12 } },
  };

  return (
    <div ref={sectionRef} className="relative w-full" style={{ height: "600vh" }}>

      {/* ══ BACKGROUND: sticky 3-D parallax gallery ══ */}
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden
        bg-gray-100 dark:bg-[#050505]">
        <motion.div
          style={{ width: bW, height: bH, borderRadius: bR, maxWidth: "1920px" }}
          className="relative bg-white dark:bg-black overflow-hidden flex items-center justify-center mx-auto"
        >
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            style={{ perspective: "1000px" }}
          >
            {/* Mode-aware vignette */}
            <div className="absolute inset-0 z-20 pointer-events-none" style={vignetteStyle} />

            {/* 3-D image grid */}
            <motion.div
              style={{
                rotateX: rX, rotateY: rY, rotateZ: rZ, z: tZ,
                transformStyle: "preserve-3d",
                willChange: "transform",
                width: "120vw", height: "150vh",
              }}
              className="flex gap-4 md:gap-6 justify-center items-center origin-center"
            >
              {columns.map(({ data, y, key }) => (
                <motion.div
                  key={key}
                  style={{ y, width: "22vw", minWidth: "155px" }}
                  className="flex flex-col gap-4 md:gap-6 pointer-events-auto"
                >
                  {data.map((src, i) => {
                    const obj = galleryImages.find((g) => g.src === src);
                    return (
                      <ImageCard
                        key={`${key}-${i}`}
                        src={src}
                        alt={obj?.alt || "Gallery"}
                        onLoad={handleItemLoad}
                      />
                    );
                  })}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ══ FOREGROUND: sticky hero text ══ */}
      <div
        className="sticky top-0 h-screen w-full flex items-center pointer-events-none z-30
          px-6 sm:px-12 lg:px-24"
        style={{ marginTop: "-100vh" }}
      >
        <motion.div
          className="pointer-events-auto flex flex-col items-start text-left space-y-6 max-w-2xl"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md shadow-sm
              bg-white/70 dark:bg-black/50
              border border-gray-200 dark:border-white/10"
            whileHover={{ scale: 1.04 }}
          >
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Available for projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={heroItem}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05]
              text-gray-900 dark:text-white">
              {"Hey, I'm"}
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05]
              text-transparent bg-clip-text bg-gradient-to-r
              from-brand-primary via-brand-secondary to-brand-accent">
              {personalInfo.name.split(" ")[0]}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={heroItem}
            className="text-base sm:text-lg lg:text-xl font-light max-w-xl
              text-gray-700 dark:text-gray-300"
          >
            <span className="font-semibold text-brand-primary">Full Stack Developer</span>
            {" & "}
            <span className="font-semibold text-brand-secondary">UI/UX Designer</span>
            {" — crafting digital experiences that blend "}
            <span className="italic text-gray-900 dark:text-white">beauty</span>
            {" with "}
            <span className="italic text-gray-900 dark:text-white">functionality</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-3 pt-1">
            {/* Primary */}
            <button
              onClick={() => setCurrentPage("projects")}
              className="group relative px-7 py-3 rounded-full font-bold text-sm shadow-xl
                bg-gray-900 dark:bg-white
                text-white dark:text-gray-900
                hover:shadow-brand-primary/40 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                Explore Work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* View CV */}
            <button
              onClick={handleViewCV}
              className="px-5 py-3 rounded-full font-semibold text-sm backdrop-blur-sm
                border border-gray-300 dark:border-white/20
                hover:border-brand-primary
                bg-white/70 dark:bg-white/10
                text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-white
                transition-all flex items-center gap-2 hover:scale-105 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              View CV
            </button>

            {/* Download CV */}
            <button
              onClick={handleDownloadCV}
              className="px-5 py-3 rounded-full font-semibold text-sm backdrop-blur-sm
                border border-gray-300 dark:border-white/20
                hover:border-brand-secondary
                bg-white/70 dark:bg-white/10
                text-gray-700 dark:text-gray-200 hover:text-brand-secondary dark:hover:text-white
                transition-all flex items-center gap-2 hover:scale-105 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={heroItem} className="flex items-center gap-3">
            {[
              { href: personalInfo.github,           icon: Github,   label: "GitHub"   },
              { href: personalInfo.linkedin,          icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:" + personalInfo.email, icon: Mail,     label: "Email"    },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 shadow-sm
                  bg-white/70 dark:bg-white/10
                  border border-gray-200 dark:border-white/15
                  hover:border-brand-primary
                  text-gray-600 dark:text-gray-300
                  hover:text-brand-primary dark:hover:text-brand-accent"
              >
                <item.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default HomePage;