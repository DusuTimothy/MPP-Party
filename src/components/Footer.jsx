import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';
import { PARTY_INFO } from '../data/partyData';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaCheck,
  FaShieldAlt,
} from 'react-icons/fa';

/**
 * Footer - Structured after NITDA's CityGovt multi-column agency footer
 */
const Footer = ({ onOpenJoinModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const navLinks = [
    { label: 'Home Page', path: '/' },
    { label: 'Who We Are & Origin', path: '/about' },
    { label: 'Party Constitution & By-Laws', path: '/about' },
    { label: 'National Working Committee', path: '/about' },
    { label: 'State Zonal Secretariats', path: '/contact' },
    { label: 'From The Chairman’s Desk', path: '/about' },
  ];

  const statutoryLinks = [
    { label: 'SDRAP 2024–2027 Action Plan', path: '/about' },
    { label: 'Certified Candidates Registry', path: '/elections' },
    { label: 'Voter Unit Verification Desk', path: '/elections' },
    { label: 'Candidate Asset Disclosure Charter', path: '/elections' },
    { label: 'Public Campaign Finance Audits', path: '/about' },
    { label: 'Download Statutory Forms', path: '/get-involved' },
  ];

  return (
    <footer className="bg-[#00563F] text-white border-t-4 border-[#008751] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-green-800/80">
          {/* Column 1: Logo & Agency Profile (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <Logo className="h-12 w-12" textClass="text-white" />
            </Link>

            <p className="text-xs sm:text-sm text-green-100/90 leading-relaxed max-w-sm">
              {PARTY_INFO.name} ({PARTY_INFO.acronym}) is an independent democratic organization committed to civic empowerment, equitable prosperity, and ethical public administration across all 774 Local Government Areas in Nigeria.
            </p>

            <div className="pt-2 text-xs text-green-200">
              <span className="font-bold text-white uppercase tracking-wider block mb-1">
                Official Motto
              </span>
              <span className="italic font-medium text-green-100">"{PARTY_INFO.tagline}"</span>
            </div>

            {/* Social Icons (NITDA style) */}
            <div className="pt-2 flex items-center space-x-2.5">
              {[
                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
                { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="w-8 h-8 bg-white/10 hover:bg-[#008751] text-green-100 hover:text-white flex items-center justify-center transition-colors text-xs"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Governance & Organs (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              About MPP
            </h4>
            <ul className="space-y-2 text-xs text-green-100">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:underline underline-offset-4 decoration-mpp-red decoration-2 transition-colors flex items-center group"
                  >
                    <span className="text-green-400 mr-1.5 group-hover:text-mpp-red transition-colors text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Statutory Portals (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              Portals & Governance
            </h4>
            <ul className="space-y-2 text-xs text-green-100">
              {statutoryLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:underline underline-offset-4 decoration-mpp-red decoration-2 transition-colors flex items-center group"
                  >
                    <span className="text-green-400 mr-1.5 group-hover:text-mpp-red transition-colors text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              National Secretariat
            </h4>

            <div className="space-y-2 text-xs text-green-100">
              <div className="flex items-start space-x-2.5">
                <FaMapMarkerAlt className="text-green-300 mt-1 flex-shrink-0" />
                <span>{PARTY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <FaPhoneAlt className="text-green-300 flex-shrink-0" />
                <span>{PARTY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <FaEnvelope className="text-green-300 flex-shrink-0" />
                <span>{PARTY_INFO.email}</span>
              </div>
            </div>

            {/* Newsletter Subscription (NITDA style) */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-white block mb-1.5">
                Subscribe for Official Party Gazette
              </span>
              {subscribed ? (
                <div className="bg-white/10 border border-green-400/30 p-2.5 rounded-lg text-xs text-green-200 flex items-center space-x-2">
                  <FaCheck className="text-green-400 flex-shrink-0" />
                  <span>Subscribed! You will receive verified circulars.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-green-300 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-mpp-red hover:bg-[#b00e1f] text-white px-3 py-2 text-xs font-bold transition-colors flex-shrink-0 flex items-center justify-center space-x-1"
                  >
                    <span>Subscribe</span>
                    <FaArrowRight className="text-[10px]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-green-200/80">
          <div>
            © {new Date().getFullYear()} {PARTY_INFO.name} ({PARTY_INFO.acronym}). All rights reserved. Personal practice project.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded text-white font-mono">
              Fictional Demo Entity
            </span>
            <button
              onClick={onOpenJoinModal}
              className="text-white hover:text-green-200 underline font-medium"
            >
              Member Portal Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
