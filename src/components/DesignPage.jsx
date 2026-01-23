import React from "react";
import { ExternalLink, X } from "lucide-react";

const DesignPage = ({
  graphicDesigns,
  isModalOpen,
  selectedDesign,
  openModal,
  closeModal,
}) => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            My Creative Design Work
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my graphic design projects showcasing creativity,
            attention to detail, and design problem-solving across various
            mediums and industries.
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {graphicDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden flex items-center justify-center bg-gray-100">
                {design.type === "image" ? (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={process.env.PUBLIC_URL + design.image}
                    alt={design.title}
                    className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={process.env.PUBLIC_URL + design.image}
                    className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors flex-1">
                    {design.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                    {design.year}
                  </span>
                </div>

                <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-3">
                  {design.client}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {design.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <button
                    onClick={() => openModal(design)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Design
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedDesign && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative max-w-6xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="absolute -top-16 left-0 text-white mb-4">
                <h3 className="text-xl font-bold">{selectedDesign.title}</h3>
                <p className="text-gray-300">
                  {selectedDesign.client} • {selectedDesign.year}
                </p>
              </div>

              <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-2xl">
                {selectedDesign.type === "video" ? (
                  <video
                    src={process.env.PUBLIC_URL + selectedDesign.image}
                    controls
                    autoPlay
                    className="max-h-[90vh] w-full object-contain"
                  />
                ) : (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={process.env.PUBLIC_URL + selectedDesign.image}
                    alt={selectedDesign.title}
                    className="max-h-[90vh] w-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignPage;
