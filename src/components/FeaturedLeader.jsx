import React, { useState } from 'react';
import Button from './common/Button';
import Modal from './common/Modal';
import { FEATURED_LEADER, PARTY_INFO } from '../data/partyData';
import { FaQuoteLeft, FaBookOpen, FaAward, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

/**
 * FeaturedLeader - Leadership profile with authoritative black background
 */
const FeaturedLeader = () => {
  const [bioModalOpen, setBioModalOpen] = useState(false);

  return (
    <section className="py-20 bg-black text-white border-b border-neutral-800 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008751]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait Photo with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#008751] to-neutral-900 rounded-3xl opacity-40 transform rotate-1 blur-xs" />

              {/* Main Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-800 aspect-[4/5] bg-neutral-900 group">
                <img
                  src={FEATURED_LEADER.image}
                  alt={FEATURED_LEADER.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white">
                  <div className="inline-block bg-[#008751] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded mb-1">
                    Party Leadership
                  </div>
                  <h3 className="text-xl font-bold">{FEATURED_LEADER.name}</h3>
                  <p className="text-xs text-green-300 font-medium">
                    {FEATURED_LEADER.title}
                  </p>
                </div>
              </div>

              {/* Small accent corner badge */}
              <div className="absolute -bottom-4 -right-4 bg-neutral-900 rounded-xl p-3.5 shadow-xl border border-neutral-700 hidden sm:flex items-center space-x-3 text-white">
                <div className="w-10 h-10 rounded-full bg-[#008751]/20 text-[#008751] flex items-center justify-center text-lg border border-[#008751]/30">
                  <FaAward />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Tenure Mandate</div>
                  <div className="text-xs font-bold text-white">Elected 2024–2028</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details & Leadership Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest bg-green-950/80 px-3.5 py-1.5 rounded-full border border-green-700/60 inline-block">
                Featured Leader
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
                {FEATURED_LEADER.name}
              </h2>
              <p className="text-base font-semibold text-green-300 mt-1">
                {FEATURED_LEADER.title}
              </p>
              <div className="w-20 h-1 bg-[#008751] mt-3 rounded-full" />
            </div>

            {/* Leadership Quote */}
            <div className="relative pl-6 py-4 border-l-4 border-[#008751] bg-neutral-900/90 rounded-r-xl border-y border-r border-neutral-800">
              <FaQuoteLeft className="text-[#008751] w-6 h-6 mb-2" />
              <p className="text-base sm:text-lg italic text-gray-200 font-medium leading-relaxed">
                "{FEATURED_LEADER.quote}"
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {FEATURED_LEADER.shortBio}
            </p>

            {/* Core Leadership Priorities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {FEATURED_LEADER.achievements.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300">
                  <FaCheckCircle className="text-[#008751] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="outlineWhite"
                size="md"
                onClick={() => setBioModalOpen(true)}
                icon={FaBookOpen}
                iconPosition="left"
                className="hover:bg-white hover:text-black border-neutral-600"
              >
                Read Biography
              </Button>
              <Button
                to="/contact"
                variant="ghost"
                size="md"
                icon={FaEnvelope}
                className="text-gray-300 hover:text-white hover:bg-neutral-800"
              >
                Message the Secretariat
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Full Biography Modal */}
      <Modal
        isOpen={bioModalOpen}
        onClose={() => setBioModalOpen(false)}
        title={`Profile: ${FEATURED_LEADER.name}`}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
            <img
              src={FEATURED_LEADER.image}
              alt={FEATURED_LEADER.name}
              className="w-28 h-32 object-cover rounded-xl shadow-md flex-shrink-0"
            />
            <div>
              <div className="text-xs font-bold text-mpp-green uppercase tracking-wider">
                {FEATURED_LEADER.role}
              </div>
              <h3 className="text-2xl font-black text-gray-900">{FEATURED_LEADER.name}</h3>
              <p className="text-xs text-gray-500 mt-1">
                National Secretariat, {PARTY_INFO.name}
              </p>
              <div className="mt-3 inline-block bg-green-100 text-mpp-green-dark text-xs px-3 py-1 rounded-full font-medium">
                Mandate: Grassroots Renewal & Integrity
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
            <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">
              Background & Public Service Record
            </h4>
            <p>{FEATURED_LEADER.shortBio}</p>
            <p>{FEATURED_LEADER.extendedBio}</p>
          </div>

          <div className="space-y-3 border-t border-gray-100 pt-4">
            <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">
              Pivotal Reform Milestones
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              {FEATURED_LEADER.achievements.map((ach, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-mpp-green" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <Button variant="primary" size="sm" onClick={() => setBioModalOpen(false)}>
              Close Biography
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default FeaturedLeader;
