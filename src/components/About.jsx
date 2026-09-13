import React from 'react';
import Button from './common/Button';
import Logo from './common/Logo';
import { FaBalanceScale, FaUsers, FaLeaf, FaShieldAlt, FaArrowRight, FaCheck } from 'react-icons/fa';
import { PARTY_INFO } from '../data/partyData';

const About = () => {
  const pillars = [
    {
      icon: FaBalanceScale,
      title: "Ethical & Accountable Governance",
      description: "Rooting out systemic complacency through transparent procurement, open public audits, and strictly merit-based civil appointments.",
    },
    {
      icon: FaUsers,
      title: "People-Centered Prosperity",
      description: "Stimulating localized economies by investing in primary education, modern healthcare facilities, and accessible micro-credit for small enterprises.",
    },
    {
      icon: FaShieldAlt,
      title: "Equal Justice & Rule of Law",
      description: "Safeguarding civic freedoms and ensuring the legal system works equally for all citizens regardless of wealth, background, or social status.",
    },
    {
      icon: FaLeaf,
      title: "Sustainable Community Infrastructure",
      description: "Transitioning toward modern decentralized energy grids, clean water access, and resilient climate-smart agricultural networks.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
            About Our Movement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            A Modern Political Platform Founded on Civic Trust
          </h2>
          <div className="w-16 h-1 bg-mpp-red mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            {PARTY_INFO.name} ({PARTY_INFO.acronym}) is a forward-looking democratic organization dedicated to uniting citizens around collective dignity, constitutional respect, and grassroots economic empowerment.
          </p>
        </div>

        {/* Grid: Party Philosophy & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & Manifesto points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-mpp-green-dark">
              <span className="w-2 h-2 rounded-full bg-mpp-green" />
              <span>Neutral Civic Practice Framework</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              Building a responsive system that serves everyday families, not special interests.
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We believe a political party should serve as an open conduit for citizen engagement, not an exclusive club. Through decentralized town halls, open digital voting on party resolutions, and strict campaign finance ethics, MPP is pioneering a new standard for participatory democracy.
            </p>

            {/* Checklist of Commitments */}
            <div className="space-y-3 pt-2">
              {[
                "100% transparent member-led primaries for all electoral positions",
                "Strict public asset disclosure guidelines for party nominees",
                "Mandated 40% youth and women executive leadership quota",
                "Zero-tolerance policy on divisive or sectarian rhetoric",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-mpp-green flex items-center justify-center text-xs">
                    <FaCheck />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button to="/about" variant="primary" size="md" icon={FaArrowRight} iconPosition="right">
                Explore Full Manifesto & Constitution
              </Button>
              <Button to="/elections" variant="outline" size="md">
                View Candidate Directory
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Shield & Pillar Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-100 text-mpp-green flex items-center justify-center text-xl mb-4 group-hover:bg-mpp-green group-hover:text-white transition-colors duration-300">
                      <IconComponent />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-mpp-green transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Slogan Banner */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-mpp-green to-mpp-green-dark text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-3">
                <Logo className="w-10 h-10" showText={false} />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-green-200 font-semibold">Official Slogan</div>
                  <div className="text-sm font-bold tracking-wide italic">"{PARTY_INFO.tagline}"</div>
                </div>
              </div>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-medium">MPP 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
