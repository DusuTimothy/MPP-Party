import React from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import {
  FaFileAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaUserPlus,
  FaCheckCircle,
} from 'react-icons/fa';

/**
 * PortalsFormsSection - Mirrors NITDA's 'Service Portals and Forms' section
 */
const PortalsFormsSection = ({ onOpenJoinModal }) => {
  const portals = [
    {
      title: "Digital Membership Register Portal",
      desc: "Complete biometric ward profile, update voting accreditation, and obtain digital membership ID card.",
      action: "Register Online",
      isModal: true,
      icon: FaUserPlus,
    },
    {
      title: "Candidate Statutory Nomination Forms",
      desc: "Download official Expression of Interest & Nomination guidelines for general and council elections.",
      action: "Download Forms",
      link: "/elections",
      icon: FaDownload,
    },
    {
      title: "Public Ethics & Asset Declaration Desk",
      desc: "Independent oversight mechanism where party nominees submit binding asset audits for public review.",
      action: "Review Ethics Code",
      link: "/about",
      icon: FaShieldAlt,
    },
    {
      title: "Grassroots Cooperative Grant Application",
      desc: "Community ward funding portal for agricultural cooperatives, youth startups, and artisan clusters.",
      action: "Apply for Grants",
      link: "/get-involved",
      icon: FaFileAlt,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-100/60 px-3.5 py-1.5 rounded-full">
            E-Governance & Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Service Portals and Forms
          </h2>
          <div className="w-16 h-1 bg-mpp-green mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Direct access to official democratic portals, statutory documentation, and citizen assistance forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, idx) => {
            const Icon = portal.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-mpp-green hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-green-50 text-mpp-green flex items-center justify-center text-lg mb-4 group-hover:bg-mpp-green group-hover:text-white transition-colors">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">
                    {portal.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {portal.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  {portal.isModal ? (
                    <button
                      type="button"
                      onClick={onOpenJoinModal}
                      className="text-xs font-bold text-mpp-green hover:text-mpp-green-dark inline-flex items-center space-x-1.5"
                    >
                      <span>{portal.action}</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </button>
                  ) : (
                    <Link
                      to={portal.link}
                      className="text-xs font-bold text-mpp-green hover:text-mpp-green-dark inline-flex items-center space-x-1.5"
                    >
                      <span>{portal.action}</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortalsFormsSection;
