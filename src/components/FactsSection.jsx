import React, { useState, useEffect, useRef } from 'react';
import { FACTS_STATS } from '../data/partyData';
import { FaChartLine, FaCheck } from 'react-icons/fa';

/**
 * FactsSection - Mirrors NITDA's 'facts-section' (full-width green stats strip with animated count-up)
 */
const FactsSection = () => {
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
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 bg-gradient-to-r from-mpp-green-dark via-[#014E2C] to-mpp-green-dark text-white relative overflow-hidden shadow-inner border-y border-green-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* NITDA Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-green-200 font-bold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
            <FaChartLine className="text-xs" />
            <span>National Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
            Facts & Key Metrics
          </h2>
          <div className="w-16 h-1 bg-white/40 mx-auto mt-3 rounded-full" />
        </div>

        {/* 6 Grid Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {FACTS_STATS.map((stat, idx) => (
            <StatBlock
              key={stat.id}
              stat={stat}
              startCounting={isVisible}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatBlock = ({ stat, startCounting, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime;
    let animationFrame;
    const duration = 2000;

    const timeout = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * stat.value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(stat.value);
        }
      };
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [startCounting, stat.value, delay]);

  const formatDisplay = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return num.toLocaleString();
    return num.toString();
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all">
      {/* Red accent dot as specified */}
      <div className="w-2 h-2 rounded-full bg-mpp-red mx-auto mb-2" />

      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono tracking-tight">
        {startCounting ? formatDisplay(count) : '0'}
        {stat.suffix}
      </div>

      <div className="text-xs font-bold text-green-100 uppercase tracking-wider mt-2">
        {stat.label}
      </div>

      <div className="text-[11px] text-green-200/75 mt-1 line-clamp-2">
        {stat.description}
      </div>
    </div>
  );
};

export default FactsSection;
