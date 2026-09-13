import React, { useState, useMemo } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { NEWS_ARTICLES } from '../data/newsData';
import { FaSearch, FaCalendarAlt, FaClock, FaArrowRight, FaFilter } from 'react-icons/fa';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Policy & Programs', 'Manifesto', 'Grassroots', 'Youth Wing'];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.fullContent.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-mpp-green-dark text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-mpp-green">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-green-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Press Office & Media Releases
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Party News & Public Bulletins
          </h1>
          <p className="text-sm sm:text-base text-green-100 max-w-2xl mx-auto">
            Stay updated with verified dispatches, statutory resolutions, and local civic updates straight from party organizers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-100">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            <FaFilter className="text-gray-400 mr-1 text-sm hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-mpp-green text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search news or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-mpp-green focus:border-mpp-green outline-none"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="pt-6 pb-2 flex justify-between items-center text-xs text-gray-500">
          <span>Showing {filteredArticles.length} articles</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-mpp-red hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* News Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200 my-6">
            <p className="text-gray-500 text-sm font-medium">No articles matched your criteria.</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                image={article.image}
                imageAlt={article.title}
                imageBadge={article.category}
                className="flex flex-col h-full hover:border-green-300"
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
                  <h3 className="font-bold text-gray-900 text-lg leading-snug line-clamp-2 hover:text-mpp-green transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>

                <CardBody className="flex-grow">
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardBody>

                <CardFooter className="pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="text-xs font-bold text-mpp-green hover:text-mpp-green-dark inline-flex items-center space-x-1.5 group"
                  >
                    <span className="border-b border-transparent group-hover:border-mpp-red transition-colors">
                      Continue Reading
                    </span>
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-gray-400">
                    {article.author}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Article Modal Reader */}
      {activeArticle && (
        <Modal
          isOpen={Boolean(activeArticle)}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.category}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-5">
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="font-semibold text-mpp-green">{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>By {activeArticle.author}</span>
            </div>

            <h2 className="text-2xl font-black text-gray-900 leading-snug">
              {activeArticle.title}
            </h2>

            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-3 border-t border-gray-100 pt-4">
              {activeArticle.fullContent}
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Official bulletin verified by Communications Directorate
              </span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setActiveArticle(null)}
              >
                Close Bulletin
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewsPage;
