import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User } from 'lucide-react';
import blogsData from '../data/blogs.json';

const BlogPage = () => {
  const posts = blogsData || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getExcerpt = (htmlContent) => {
    if (!htmlContent) return "";
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    const text = doc.body.textContent || "";
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  const extractImage = (htmlContent) => {
    if (!htmlContent) return null;
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.src : null;
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              Blog
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, experiences, and stories published on Medium.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <div className="text-center p-8 glass dark:glass-dark rounded-2xl">
             <p className="text-gray-600 dark:text-gray-400 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={post.thumbnail || extractImage(post.content) || extractImage(post.description) || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                     <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-brand-primary backdrop-blur-sm rounded-full text-xs font-semibold shadow-sm">
                        Medium
                     </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 title-font hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {getExcerpt(post.description)}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                       <span className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                       </span>
                       <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.pubDate)}
                       </span>
                    </div>
                    
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white dark:bg-brand-accent/10 dark:hover:bg-brand-accent dark:text-brand-accent dark:hover:text-white rounded-lg transition-colors font-medium text-sm gap-2"
                    >
                      Read Full Post <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
