import React from 'react';
import { Link } from 'react-router-dom';
import { KEY_LINKS } from '../data/partyData';
import {
  FaIdCard,
  FaBullhorn,
  FaUserCheck,
  FaHandsHelping,
  FaFileContract,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';

const iconComponents = {
  FaIdCard,
  FaBullhorn,
  FaUserCheck,
  FaHandsHelping,
  FaFileContract,
  FaDownload,
};

/**
 * KeyLinksSection - Mirrors NITDA's 'welcome-section' / 'featured-blocks' row directly beneath the hero
 */
const KeyLinksSection = () => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {KEY_LINKS.map((item) => {
            const IconComponent = iconComponents[item.icon] || FaArrowRight;
            return (
              <Link
                key={item.id}
                to={item.link}
                className="group p-3.5 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-green-50/50 hover:border-mpp-green transition-all duration-300 flex flex-col items-center text-center shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-mpp-green flex items-center justify-center text-lg mb-2.5 group-hover:bg-mpp-green group-hover:text-white group-hover:border-mpp-green transition-all duration-300 shadow-sm">
                  <IconComponent />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-mpp-green-dark transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1 group-hover:text-gray-700">
                  {item.subtitle}
                </p>
                <div className="mt-2 text-[10px] font-bold text-mpp-green flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Access</span>
                  <FaArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyLinksSection;
