import React from "react";
import { ExternalLink, X, Play, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const DesignPage = ({
  graphicDesigns,
  isModalOpen,
  selectedDesign,
  openModal,
  closeModal,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Playground</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of my graphic design projects showcasing creativity, attention to detail, and design problem-solving across various mediums.
          </p>
        </motion.div>

        {/* Design Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {graphicDesigns.map((design) => (
            <motion.div
              key={design.id}
              variants={itemVariants}
              layoutId={`design-${design.id}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Thumbnail */}
              <div
                className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-900 overflow-hidden cursor-pointer"
                onClick={() => openModal(design)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    {design.type === 'video' ? <Play size={20} fill="currentColor" /> : <ExternalLink size={20} />}
                  </div>
                </div>

                {design.type === "image" ? (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={process.env.PUBLIC_URL + design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={process.env.PUBLIC_URL + design.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                  />
                )}

                <div className="absolute top-3 right-3 z-20">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                    {design.type === 'video' ? <Play size={10} /> : <ImageIcon size={10} />}
                    {design.type === 'video' ? 'Video' : 'Image'}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors line-clamp-1">
                    {design.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-500 whitespace-nowrap mt-1">
                    {design.year}
                  </span>
                </div>

                <p className="text-brand-primary dark:text-brand-secondary text-sm font-semibold mb-3">
                  {design.client}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                  {design.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-white/5">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {isModalOpen && selectedDesign && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[95vh] flex flex-col bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gray-900">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedDesign.title}</h3>
                  <p className="text-sm text-gray-400">{selectedDesign.client} • {selectedDesign.year}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-4">
                {selectedDesign.type === "video" ? (
                  <video
                    src={process.env.PUBLIC_URL + selectedDesign.image}
                    controls
                    autoPlay
                    className="max-w-full max-h-[calc(90vh-100px)] object-contain rounded-lg"
                  />
                ) : (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={process.env.PUBLIC_URL + selectedDesign.image}
                    alt={selectedDesign.title}
                    className="max-w-full max-h-[calc(90vh-100px)] object-contain rounded-lg"
                  />
                )}
              </div>

              <div className="p-4 bg-gray-900 border-t border-white/10">
                <p className="text-gray-300 text-sm max-w-3xl mx-auto text-center">{selectedDesign.description}</p>
              </div>

            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignPage;
