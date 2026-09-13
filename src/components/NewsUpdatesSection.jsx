import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/newsData';
import Button from './common/Button';
import Modal from './common/Modal';
import { FaCalendarAlt, FaClock, FaArrowRight, FaShareAlt } from 'react-icons/fa';

/**
 * NewsUpdatesSection - Mirrors NITDA's 'news-section' (Lead featured story on left + recent stack on right)
 */
const NewsUpdatesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const leadArticle = NEWS_ARTICLES[0];
  const sideArticles = NEWS_ARTICLES.slice(1, 4);

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NITDA Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
              Information Bureau
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
              News and Updates
            </h2>
            <div className="w-20 h-1 bg-mpp-green mt-3 rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
              Official press briefings, policy releases, and resolutions directly from the MPP Communications Bureau.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button to="/news" variant="outline" size="md" icon={FaArrowRight} iconPosition="right">
              View All Press Releases
            </Button>
          </div>
        </div>

        {/* NITDA Dual-Column News Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Featured Lead Article */}
          <div className="lg:col-span-7 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-mpp-green hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
              <img
                src={leadArticle.image}
                alt={leadArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-mpp-green text-white text-xs font-bold px-3 py-1 rounded shadow">
                {leadArticle.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <span className="flex items-center text-mpp-green font-medium">
                  <FaCalendarAlt className="mr-1.5 text-xs" />
                  {leadArticle.date}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <FaClock className="mr-1 text-xs" />
                  {leadArticle.readTime}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug group-hover:text-mpp-green transition-colors">
                {leadArticle.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {leadArticle.excerpt}
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedArticle(leadArticle)}
                  icon={FaArrowRight}
                  iconPosition="right"
                >
                  Continue Reading
                </Button>
              </div>
            </div>
          </div>

          {/* Right: 3 Stacked Recent News Cards */}
          <div className="lg:col-span-5 space-y-4">
            {sideArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-mpp-green hover:shadow-md transition-all cursor-pointer flex gap-4 group"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-mpp-green">
                      {art.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug group-hover:text-mpp-green transition-colors line-clamp-2 mt-1">
                      {art.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 mt-2">
                    <span>{art.date}</span>
                    <span className="text-mpp-green font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center space-x-1">
                      <span>Read</span>
                      <FaArrowRight className="text-[9px]" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <Modal
          isOpen={Boolean(selectedArticle)}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.category}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-4">
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-3 text-xs text-gray-500">
              <span className="font-semibold text-mpp-green">{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>By {selectedArticle.author}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-3 border-t border-gray-100 pt-4">
              {selectedArticle.fullContent}
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Official release verified by Secretariat Media Desk
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setSelectedArticle(null)}
              >
                Close Article
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default NewsUpdatesSection;
