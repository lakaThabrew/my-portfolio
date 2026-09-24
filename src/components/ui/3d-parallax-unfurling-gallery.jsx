import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { galleryImages } from "../../data/gallery";

// Extract src strings from the gallery data
const IMAGE_SRCS = galleryImages.map((img) => img.src);

// Fisher-Yates shuffle - returns a new shuffled array
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
    className="w-full flex-shrink-0 bg-[#111] transition-transform duration-300 hover:scale-[1.02] cursor-pointer relative"
    style={{ height: "clamp(150px, 18vw, 280px)", willChange: "transform" }}
  >
    <img
      src={process.env.PUBLIC_URL + src}
      alt={alt || "Gallery Image"}
      loading="lazy"
      onLoad={onLoad}
      onError={(e) => { e.target.style.opacity = "0"; }}
      className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

const ParallaxGallery = () => {
  const containerRef = useRef(null);
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

  const colMedia = useMemo(() => {
    const base = IMAGE_SRCS.length >= 8
      ? shuffle(IMAGE_SRCS)
      : shuffle([...IMAGE_SRCS, ...IMAGE_SRCS, ...IMAGE_SRCS]);
    const col1Base = base.filter((_, i) => i % 4 === 0);
    const col2Base = base.filter((_, i) => i % 4 === 1);
    const col3Base = base.filter((_, i) => i % 4 === 2);
    const col4Base = base.filter((_, i) => i % 4 === 3);
    return {
      col1: [...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base],
    };
  }, []);

  // Use page (window) scroll, target the section so progress maps 0->1 over its height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 18,
    mass: 0.5,
  });

  // Banner unfurl: rounded pill -> full screen
  const bannerWidth = useTransform(smoothProgress, [0, 0.15], ["88vw", "100vw"]);
  const bannerHeight = useTransform(smoothProgress, [0, 0.15], ["78vh", "100vh"]);
  const bannerRadius = useTransform(smoothProgress, [0, 0.15], ["40px", "0px"]);
  const bannerBorder = useTransform(smoothProgress, [0, 0.15], ["3px", "0px"]);

  // 3D tilt flattens as you scroll
  const rotateY = useTransform(smoothProgress, [0.15, 1], [-42, -6]);
  const rotateX = useTransform(smoothProgress, [0.15, 1], [22, 3]);
  const rotateZ = useTransform(smoothProgress, [0.15, 1], [12, 1]);
  const transZ = useTransform(smoothProgress, [0.15, 1], [-700, 0]);

  // Column parallax (alternating speeds)
  const yCol1 = useTransform(smoothProgress, [0.15, 1], ["0%", "-38%"]);
  const yCol2 = useTransform(smoothProgress, [0.15, 1], ["-38%", "12%"]);
  const yCol3 = useTransform(smoothProgress, [0.15, 1], ["0%", "-38%"]);
  const yCol4 = useTransform(smoothProgress, [0.15, 1], ["-28%", "18%"]);

  const columns = [
    { data: colMedia.col1, y: yCol1, key: "col1" },
    { data: colMedia.col2, y: yCol2, key: "col2" },
    { data: colMedia.col3, y: yCol3, key: "col3" },
    { data: colMedia.col4, y: yCol4, key: "col4" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505]"
      style={{ height: "600vh" }}
    >
      {/* Sticky canvas that fills the viewport as you scroll */}
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
        <motion.div
          style={{
            width: bannerWidth,
            height: bannerHeight,
            borderRadius: bannerRadius,
            borderWidth: bannerBorder,
            borderColor: "#2c2738",
            borderStyle: "solid",
            maxWidth: "1920px",
          }}
          className="relative bg-black overflow-hidden flex items-center justify-center mx-auto"
        >
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            style={{ perspective: "1000px" }}
          >
            {/* Vignette */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                boxShadow:
                  "inset 0 100px 150px -50px rgba(0,0,0,1)," +
                  "inset 0 -100px 150px -50px rgba(0,0,0,1)," +
                  "inset 150px 0 150px -50px rgba(0,0,0,1)," +
                  "inset -150px 0 150px -50px rgba(0,0,0,1)",
              }}
            />

            {/* 3D Image Grid */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                z: transZ,
                transformStyle: "preserve-3d",
                willChange: "transform",
                width: "120vw",
                height: "150vh",
              }}
              className="flex gap-4 md:gap-6 justify-center items-center origin-center"
            >
              {columns.map(({ data, y, key }) => (
                <motion.div
                  key={key}
                  style={{ y, width: "22vw", minWidth: "155px" }}
                  className="flex flex-col gap-4 md:gap-6 pointer-events-auto"
                >
                  {data.map((src, index) => {
                    const imgObj = galleryImages.find((g) => g.src === src);
                    return (
                      <ImageCard
                        key={`${key}-${index}`}
                        src={src}
                        alt={imgObj?.alt || "Gallery Image"}
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
    </section>
  );
};

export default ParallaxGallery;