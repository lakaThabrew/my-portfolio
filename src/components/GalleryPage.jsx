import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "../data/gallery";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-transparent transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Check out{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                My Gallery
              </span>
            </h1>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A collection of moments and perspectives captured through my lens.
          </motion.p>
        </motion.div>
 
        {/* Masonry Grid */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-brand-primary/30 transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
              layoutId={`image-${image.id}`}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />

              <motion.img
                src={process.env.PUBLIC_URL + image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }} // Reset scale to avoid conflict with whileHover parent junk if needed, but mainly for cleaner DOM
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
            >
              {/* Close Button - Viewport Fixed */}
              <button
                className="fixed top-24 right-6 sm:right-10 text-white hover:text-white bg-white/10 hover:bg-brand-primary p-3 rounded-full transition-all duration-300 z-[10001] shadow-2xl hover:scale-110 flex items-center justify-center border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                aria-label="Close"
              >
                <X size={28} />
              </button>

              <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  layoutId={`image-${selectedImage.id}`}
                  className="rounded-lg overflow-hidden shadow-2xl"
                >
                  <img
                    src={process.env.PUBLIC_URL + selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>
                
                {/* Optional: Add image info/alt text below image for better UX if needed */}
                <div className="mt-4 text-center">
                  <p className="text-white/60 text-sm font-medium">{selectedImage.alt}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryPage;
