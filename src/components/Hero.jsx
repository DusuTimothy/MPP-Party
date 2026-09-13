import React, { useState, useEffect, useCallback } from 'react';
import Button from './common/Button';
import { HERO_SLIDES } from '../data/partyData';
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';

/**
 * Hero - Auto-rotating carousel with authentic Nigerian campaign crowd images
 */
const Hero = ({ onOpenJoinModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(slideInterval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative bg-gray-950 text-white overflow-hidden min-h-screen flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images - Displayed directly without white gradient */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            {/* Nigerian Campaign Rally Image in full view */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out"
            />
            {/* Natural subtle vignette for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 flex-grow flex items-center w-full">
        <div className="max-w-3xl space-y-6">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-100 max-w-2xl leading-relaxed font-normal drop-shadow-md">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenJoinModal}
              icon={FaCheckCircle}
              className="shadow-2xl font-bold"
            >
              {HERO_SLIDES[currentSlide].ctaText}
            </Button>
            <Button
              to="/about"
              variant="outlineWhite"
              size="lg"
              className="bg-white/10 hover:bg-white hover:text-gray-900 backdrop-blur-sm shadow-sm font-bold"
            >
              {HERO_SLIDES[currentSlide].secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows & Indicators (Bottom of Hero) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between pb-8 pt-4">
        <div className="flex items-center space-x-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2.5 bg-black/40 hover:bg-black/70 text-white backdrop-blur border border-white/20 transition-colors"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 bg-black/40 hover:bg-black/70 text-white backdrop-blur border border-white/20 transition-colors"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
