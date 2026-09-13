import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

/**
 * ScrollToTopButton - Floating button shown in the screenshot
 */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 bg-white text-gray-900 shadow-2xl border border-gray-200 flex items-center justify-center hover:bg-[#008751] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      aria-label="Scroll back to top"
    >
      <FaChevronUp className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTopButton;
