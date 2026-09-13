import React, { useState } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from './common/Card';
import Button from './common/Button';
import Modal from './common/Modal';
import { NEWS_ARTICLES } from '../data/newsData';
import { FaCalendarAlt, FaClock, FaArrowRight, FaShareAlt } from 'react-icons/fa';

const NewsGrid = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="py-20 bg-gray-50/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
              Press Office & Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
              Latest News & Public Statements
            </h2>
            <div className="w-16 h-1 bg-mpp-red mt-3 rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
              Stay informed with official briefings, community town-hall outcomes, and policy releases from the MPP National Secretariat.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button to="/news" variant="outline" size="md" icon={FaArrowRight} iconPosition="right">
              View All Press Releases
            </Button>
          </div>
        </div>

        {/* Responsive Grid: 4 placeholder articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ARTICLES.slice(0, 4).map((article) => (
            <Card
              key={article.id}
              image={article.image}
              imageAlt={article.title}
              imageBadge={article.category}
              className="flex flex-col h-full hover:border-green-200"
            >
              <div className="flex items-center space-x-3 text-xs text-gray-400 mb-3">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1 text-mpp-green" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <FaClock className="mr-1 text-gray-400" />
                  {article.readTime}
                </span>
              </div>

              <CardHeader>
                <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 hover:text-mpp-green transition-colors">
                  {article.title}
                </h3>
              </CardHeader>

              <CardBody className="flex-grow">
                <p className="line-clamp-3 text-xs sm:text-sm text-gray-600">
                  {article.excerpt}
                </p>
              </CardBody>

              <CardFooter className="pt-3">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-mpp-green hover:text-mpp-green-dark inline-flex items-center space-x-1 group"
                >
                  <span className="border-b border-transparent group-hover:border-mpp-red transition-colors">
                    Continue Reading
                  </span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] text-gray-400">
                  {article.author.split(' ')[0]}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <Modal
          isOpen={Boolean(selectedArticle)}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.category}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-4">
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="font-semibold text-mpp-green">{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>By {selectedArticle.author}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
              {selectedArticle.title}
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-3">
              {selectedArticle.fullContent}
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-xs text-gray-400 italic">
                Official release from My Political Party Secretariat
              </div>
              <Button
                variant="outline"
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

export default NewsGrid;
