import React from 'react';
import { SDRAP_PILLARS, PARTY_INFO } from '../data/partyData';
import Button from './common/Button';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';

/**
 * RoadmapBanner - Mirrors NITDA's 'Strategic Roadmap and Action Plan (SRAP)' section
 */
const RoadmapBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-mpp-green-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-mpp-green/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Overview */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {PARTY_INFO.srapTenure}
              </h2>

              <p className="text-sm text-green-100/90 leading-relaxed">
                Formulated through extensive citizen consultative assemblies, the SDRAP serves as our 4-year statutory matrix to anchor ethical governance, cultivate youthful public leaders, and enforce campaign financial transparency.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  to="/about"
                  variant="cta"
                  size="md"
                  icon={FaArrowRight}
                  iconPosition="right"
                  className="shadow-lg"
                >
                  Explore 8 Strategic Pillars
                </Button>
                <Button
                  to="/about"
                  variant="outlineWhite"
                  size="md"
                  icon={FaBookOpen}
                >
                  Read Executive Summary
                </Button>
              </div>
            </div>

            {/* Right Side: 8 Pillars Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SDRAP_PILLARS.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 p-3.5 rounded-xl transition-all duration-200 flex items-start space-x-3 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-mpp-green text-white flex items-center justify-center flex-shrink-0 text-xs font-black shadow-sm group-hover:bg-mpp-red transition-colors">
                      {pillar.id}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-green-300 font-bold block">
                        {pillar.code}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug group-hover:text-green-100">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapBanner;
