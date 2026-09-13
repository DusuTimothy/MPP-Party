import React from 'react';
import { Link } from 'react-router-dom';
import { PARTY_SERVICES } from '../data/partyData';
import {
  FaUsers,
  FaUserShield,
  FaGraduationCap,
  FaSeedling,
  FaBalanceScale,
  FaSolarPanel,
  FaArrowRight,
} from 'react-icons/fa';

const iconMap = {
  FaUsers,
  FaUserShield,
  FaGraduationCap,
  FaSeedling,
  FaBalanceScale,
  FaSolarPanel,
};

/**
 * ServicesSection - Mirrors NITDA's 'services-section' / 'featured-block-two' grid
 */
const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header (NITDA style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
            Mandate & Interventions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Our Core Programmes & Services
          </h2>
          <div className="w-20 h-1 bg-mpp-green mx-auto mt-3 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Delivering tangible democratic dividends through structured grassroots interventions, candidate vetting standards, and community empowerment.
          </p>
        </div>

        {/* 6 Grid Service Cards (NITDA style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTY_SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || FaUsers;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-mpp-green hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Hover Accent Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-mpp-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Square Green Icon Box (NITDA signature) */}
                  <div className="w-14 h-14 rounded-xl bg-green-50 text-mpp-green flex items-center justify-center text-2xl mb-6 group-hover:bg-mpp-green group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mpp-green-dark transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="text-xs font-bold text-mpp-green hover:text-mpp-green-dark inline-flex items-center space-x-1.5 group/link"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono uppercase text-gray-400">
                    Pillar 0{service.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
