import React from 'react';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';
import FeaturedLeader from '../components/FeaturedLeader';
import CommitteeGrid from '../components/CommitteeGrid';
import { PARTY_INFO } from '../data/partyData';
import { FaFilePdf, FaCheckCircle, FaHistory, FaHandsHelping, FaUniversity, FaBalanceScale } from 'react-icons/fa';

const AboutPage = ({ onOpenJoinModal }) => {
  const manifestoPillars = [
    {
      number: "01",
      title: "Economic Diversification & Community Credit",
      detail: "Empowering rural and suburban enterprises with micro-capital, low-interest agricultural equipment credit, and community-managed solar cold storage.",
    },
    {
      number: "02",
      title: "Comprehensive Public Healthcare Guarantee",
      detail: "Upgrading primary health centers with 24/7 solar electrification, essential drug reserves, and subsidized maternal-infant welfare programs.",
    },
    {
      number: "03",
      title: "Decentralized Clean Energy & Smart Grids",
      detail: "Phasing out monolithic grid vulnerabilities by subsidizing municipal renewable power grids and removing tariffs on green technology components.",
    },
    {
      number: "04",
      title: "Judicial Independence & Anti-Corruption Shield",
      detail: "Protecting public integrity through open-book government contracting APIs, whistleblower safeguards, and real-time public asset registries.",
    },
    {
      number: "05",
      title: "Youth Tech Innovation & Educational Reform",
      detail: "Equipping vocational colleges with advanced technical labs, fiber internet, and an annual national venture fund for youth-led ventures.",
    },
    {
      number: "06",
      title: "Equal Rights & Participatory Inclusivity",
      detail: "Guaranteeing full civic inclusion through affirmative action quotas and disability accessibility mandates in all public spaces.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero Banner */}
      <div className="bg-mpp-green-dark text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-mpp-green">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-green-200 border border-white/20">
            <span>Our Foundation & Principles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            About {PARTY_INFO.name} ({PARTY_INFO.acronym})
          </h1>
          <p className="text-base sm:text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
            Founded on the conviction that governance must remain transparent, compassionate, and directly accountable to the citizens it serves.
          </p>
          <div className="pt-2 text-xs font-mono text-green-300">
            Motto: "{PARTY_INFO.tagline}"
          </div>
        </div>
      </div>

      {/* Origin & Core Philosophy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-200">
              Our Genesis
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              A Democratic Movement Rising from Grassroots Civic Forums
            </h2>
            <div className="w-16 h-1 bg-mpp-red rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              My Political Party (MPP) emerged from non-partisan citizen consultative councils organized across community centers, farm cooperatives, and university campuses. Frustrated by exclusionary political machineries, citizens from all walks of life convened to establish a party governed strictly by internal democracy and ethical integrity.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every provision in our Constitution was voted on by ordinary delegates. We are proudly funded by small-dollar grassroots contributions from everyday families, ensuring our loyalty remains solely pledged to public welfare.
            </p>
            <div className="pt-2">
              <Button variant="cta" onClick={onOpenJoinModal}>
                Become an MPP Member
              </Button>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <FaBalanceScale className="text-mpp-green" />
              <span>Core Ideological Tenets</span>
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Direct Internal Democracy",
                  desc: "Nominees for all elected positions are decided via member balloting, not arbitrary executive imposition.",
                },
                {
                  title: "Fiscal Transparency",
                  desc: "All campaign finances, donations, and administrative expenditures are published quarterly for public inspection.",
                },
                {
                  title: "Generational Inclusion",
                  desc: "Constitutional requirement that 40% of all executive seats are reserved for dynamic young leaders under 35.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-3">
                  <FaCheckCircle className="text-mpp-green mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.detail || item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 Manifesto Pillars */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-200">
              Policy Roadmap
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
              The 6 Pillars of the MPP National Covenant
            </h2>
            <div className="w-16 h-1 bg-mpp-red mx-auto mt-3 rounded-full" />
            <p className="text-gray-600 text-sm mt-2">
              Actionable, costed legislative priorities designed to deliver long-term equity and shared prosperity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manifestoPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all space-y-3"
              >
                <div className="text-2xl font-black text-mpp-green font-mono">
                  {pillar.number}
                </div>
                <h3 className="font-bold text-gray-900 text-base">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Download Official PDFs Banner */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-mpp-red flex items-center justify-center text-2xl flex-shrink-0">
                <FaFilePdf />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Download Party Constitution & Manifesto (PDF)</h4>
                <p className="text-xs text-gray-500">Official 2026 Edition — Complete statutory articles and economic annexes (2.4 MB)</p>
              </div>
            </div>
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading placeholder MPP 2026 Constitution & Manifesto PDF document.");
              }}
              className="inline-flex items-center px-4 py-2.5 bg-mpp-green hover:bg-mpp-green-dark text-white rounded-lg text-xs font-bold transition-colors space-x-2"
            >
              <FaFilePdf className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Sections */}
      <FeaturedLeader />
      <CommitteeGrid />
    </div>
  );
};

export default AboutPage;
