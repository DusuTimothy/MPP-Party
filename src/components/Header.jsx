import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './common/Logo';
import Button from './common/Button';
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaUserCheck,
  FaVoteYea,
} from 'react-icons/fa';
import { PARTY_INFO } from '../data/partyData';

/**
 * Header - Transparent Glassmorphic CityGovt/NITDA multi-tier navigation
 */
const Header = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'Who We Are & Origin', path: '/about' },
        { name: 'Party Constitution & Rules', path: '/about' },
        { name: 'National Working Committee', path: '/about' },
        { name: 'From The Chairman’s Desk', path: '/about' },
      ],
    },
    {
      name: 'Strategic Plan',
      path: '/about',
      dropdown: [
        { name: 'SDRAP 2024–2027 Blueprint', path: '/about' },
        { name: '8 Core Strategic Pillars', path: '/about' },
        { name: 'Campaign Finance Disclosures', path: '/about' },
      ],
    },
    {
      name: 'Programmes',
      path: '/get-involved',
      dropdown: [
        { name: 'Ward Grassroots Mobilisation', path: '/get-involved' },
        { name: 'Civic Leadership Academy', path: '/about' },
        { name: 'Cooperative Micro-Grants', path: '/get-involved' },
        { name: 'Volunteer With Us', path: '/get-involved' },
      ],
    },
    {
      name: 'Elections',
      path: '/elections',
      dropdown: [
        { name: 'Certified Candidates Directory', path: '/elections' },
        { name: '2027 Election Countdown', path: '/elections' },
        { name: 'Voter Unit Accreditation Check', path: '/elections' },
        { name: 'Candidate Ethics Audit', path: '/elections' },
      ],
    },
    { name: 'News & Media', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* NITDA Top Bar: Contact info, Federal Slogan & Quick Access */}
      <div className="bg-[#00563F]/95 backdrop-blur-md text-white text-xs py-2 px-4 hidden md:block border-b border-green-800/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${PARTY_INFO.email}`}
              className="flex items-center text-green-100 hover:text-white transition-colors"
            >
              <FaEnvelope className="mr-2 text-green-300 text-[11px]" />
              <span>{PARTY_INFO.email}</span>
            </a>
            <a
              href={`tel:${PARTY_INFO.phone}`}
              className="flex items-center text-green-100 hover:text-white transition-colors"
            >
              <FaPhoneAlt className="mr-2 text-green-300 text-[11px]" />
              <span>call on: {PARTY_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-green-200 italic font-medium">
              Official Slogan: "{PARTY_INFO.tagline}"
            </span>
            <span className="text-green-500">|</span>
            <Link
              to="/elections"
              className="text-white hover:text-green-200 font-semibold flex items-center space-x-1"
            >
              <FaVoteYea className="text-mpp-red text-xs mr-1" />
              <span>2027 Election Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-lg border-b border-gray-200/50 py-2.5'
            : 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Federal Shield */}
          <Link to="/" className="flex items-center focus:outline-none flex-shrink-0">
            <Logo className="h-11 w-11" textClass="text-gray-900" />
          </Link>

          {/* Desktop Navigation with Dropdowns (NITDA style with Glassmorphism) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-xs xl:text-sm font-bold tracking-wide transition-all duration-200 flex items-center space-x-1 ${
                        isActive && item.path === location.pathname
                          ? 'bg-[#008751] text-white shadow-sm'
                          : 'text-gray-800 hover:text-[#008751] hover:bg-green-50/80'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    {hasDropdown && (
                      <FaChevronDown className="w-2.5 h-2.5 ml-1 text-gray-500 group-hover:text-[#008751] group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </NavLink>

                  {/* Dropdown Menu (NITDA CityGovt style with top green border & Glassmorphism) */}
                  {hasDropdown && (
                    <div className="absolute left-0 mt-1.5 w-64 bg-white/95 backdrop-blur-xl text-gray-900 rounded-xl shadow-2xl border-t-4 border-[#008751] border-x border-b border-gray-100/80 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2">
                      {item.dropdown.map((subItem, idx) => (
                        <Link
                          key={idx}
                          to={subItem.path}
                          className="block px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-green-50 hover:text-[#008751] transition-colors border-b border-gray-50/80 last:border-0"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action: Red Accent CTA Button (Join MPP) */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              variant="cta"
              size="md"
              onClick={onOpenJoinModal}
              icon={FaUserCheck}
              className="shadow-lg border border-red-500/20 text-xs uppercase tracking-wider font-black"
            >
              Join MPP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button
              variant="cta"
              size="sm"
              onClick={onOpenJoinModal}
              className="sm:hidden text-xs py-1 px-2.5"
            >
              Join MPP
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-mpp-green"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer with Glassmorphic styling */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-1">
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-bold transition-colors block ${
                        isActive
                          ? 'bg-[#008751] text-white'
                          : 'text-gray-800 hover:bg-green-50 hover:text-[#008751]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  {item.dropdown && (
                    <div className="pl-6 pt-1 pb-1 space-y-1">
                      {item.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-gray-600 hover:text-[#008751] py-1 font-medium"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
              <Button
                variant="cta"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full justify-center shadow-lg"
                icon={FaUserCheck}
              >
                Join MPP Today
              </Button>
              <div className="text-center text-xs text-gray-500 font-medium italic">
                "{PARTY_INFO.tagline}"
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
