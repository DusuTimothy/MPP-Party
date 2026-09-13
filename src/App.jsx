import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import JoinModal from './components/common/JoinModal';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ElectionsPage from './pages/ElectionsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import Button from './components/common/Button';
import { FaHome } from 'react-icons/fa';

// Helper component to smoothly scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 404 Fallback Page
const NotFoundPage = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
    <div className="text-6xl font-black text-mpp-green mb-4">404</div>
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Located</h2>
    <p className="text-gray-600 text-sm max-w-md mb-6">
      The page or document you were looking for does not exist or has been relocated within the party directory.
    </p>
    <Button to="/" variant="primary" icon={FaHome}>
      Return to Home
    </Button>
  </div>
);

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleOpenJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-mpp-green selection:text-white relative">
      <ScrollToTop />

      {/* Global Header */}
      <Header onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Routed Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenJoinModal={handleOpenJoinModal} />} />
          <Route path="/about" element={<AboutPage onOpenJoinModal={handleOpenJoinModal} />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/elections" element={<ElectionsPage onOpenJoinModal={handleOpenJoinModal} />} />
          <Route path="/get-involved" element={<GetInvolvedPage onOpenJoinModal={handleOpenJoinModal} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer onOpenJoinModal={handleOpenJoinModal} />

      {/* Global Membership Registration Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoinModal} />

      {/* Floating Scroll To Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
