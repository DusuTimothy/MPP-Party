import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/partyData';
import { FaChartLine } from 'react-icons/fa';

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 bg-gradient-to-br from-mpp-green to-mpp-green-dark text-white relative overflow-hidden shadow-inner"
    >
      {/* Subtle geometric background watermark */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-green-200 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
            <FaChartLine className="text-xs" />
            <span>Party Strength in Numbers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            A Growing Nationwide Civic Coalition
          </h2>
        </div>

        {/* 4 Stat Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <StatItem
              key={stat.id}
              stat={stat}
              startCounting={isVisible}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component for individual animated stat counter
const StatItem = ({ stat, startCounting, delay }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime;
    let animationFrame;
    const duration = 2000; // 2 seconds

    const timeout = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out quad function for smooth deceleration
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(easeOutQuad * stat.value);
        setDisplayValue(current);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setDisplayValue(stat.value);
        }
      };
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [startCounting, stat.value, delay]);

  // Format number for display
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/15 hover:bg-white/15 transition-colors">
      {/* Small subtle red dot as required */}
      <div className="w-2 h-2 rounded-full bg-mpp-red mx-auto mb-3" />

      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight">
        {startCounting ? formatNumber(displayValue) : '0'}
        {stat.suffix}
      </div>

      <div className="text-sm font-bold text-green-100 uppercase tracking-wider mt-2">
        {stat.label}
      </div>

      <div className="text-xs text-green-200/80 mt-1 line-clamp-2">
        {stat.description}
      </div>
    </div>
  );
};

export default StatsBar;
