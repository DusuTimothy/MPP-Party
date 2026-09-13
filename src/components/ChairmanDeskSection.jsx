import React, { useState } from 'react';
import { CHAIRMAN_DESK } from '../data/partyData';
import Button from './common/Button';
import Modal from './common/Modal';
import { FaQuoteLeft, FaBookOpen, FaAward, FaCheckCircle } from 'react-icons/fa';

/**
 * ChairmanDeskSection - Mirrors NITDA's "From The Director General's Desk"
 * Styled with a sleek black background as requested
 */
const ChairmanDeskSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 bg-black text-white border-b border-neutral-800 relative overflow-hidden">
      {/* Subtle emerald ambient lighting on black backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008751]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#00563F]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Framed Portrait on Black Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Emerald Ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#008751] to-neutral-900 rounded-3xl opacity-40 transform -rotate-1 blur-xs" />

              {/* Main Portrait Box */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-800 aspect-[4/5] bg-neutral-900 group">
                <img
                  src={CHAIRMAN_DESK.image}
                  alt={CHAIRMAN_DESK.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay for Title Banner */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white">
                  <span className="inline-block bg-[#008751] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded mb-1">
                    Leadership & Governance
                  </span>
                  <h3 className="text-xl font-bold">{CHAIRMAN_DESK.name}</h3>
                  <p className="text-xs text-green-300 font-medium">
                    {CHAIRMAN_DESK.role}
                  </p>
                </div>
              </div>

              {/* Verified Mandate Badge (Dark theme) */}
              <div className="absolute -bottom-4 -right-4 bg-neutral-900 text-white rounded-xl p-3.5 shadow-2xl border border-neutral-700 hidden sm:flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#008751]/20 text-[#008751] flex items-center justify-center text-lg border border-[#008751]/30">
                  <FaAward />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">National Secretariat</div>
                  <div className="text-xs font-bold text-white">Abuja Headquarters</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Quote, Message, Signature */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest bg-green-950/80 px-3.5 py-1.5 rounded-full border border-green-700/60 inline-block">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 tracking-tight">
                From The National Chairman's Desk
              </h2>
              <div className="w-20 h-1 bg-[#008751] mt-3 rounded-full" />
            </div>

            {/* Quote Box on Black Background */}
            <div className="relative pl-6 pr-4 py-4 border-l-4 border-[#008751] bg-neutral-900/90 rounded-r-xl border-y border-r border-neutral-800">
              <FaQuoteLeft className="text-[#008751] w-6 h-6 mb-1" />
              <p className="text-sm sm:text-base italic text-gray-200 font-medium leading-relaxed">
                "{CHAIRMAN_DESK.quote}"
              </p>
            </div>

            {/* Address Body */}
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3">
              {CHAIRMAN_DESK.message.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Signature Block */}
            <div className="pt-4 flex items-center justify-between border-t border-neutral-800">
              <div>
                <div className="font-serif italic text-xl sm:text-2xl text-green-400 tracking-wide font-bold">
                  {CHAIRMAN_DESK.signatureText}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  National Chairman, My Political Party (MPP)
                </div>
              </div>

              <Button
                variant="outlineWhite"
                size="md"
                onClick={() => setModalOpen(true)}
                icon={FaBookOpen}
                iconPosition="left"
                className="hover:bg-white hover:text-black border-neutral-600"
              >
                Read Biography
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Full Biography Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Profile: ${CHAIRMAN_DESK.name}`}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
            <img
              src={CHAIRMAN_DESK.image}
              alt={CHAIRMAN_DESK.name}
              className="w-28 h-32 object-cover rounded-xl shadow-md flex-shrink-0"
            />
            <div>
              <div className="text-xs font-bold text-mpp-green uppercase tracking-wider">
                {CHAIRMAN_DESK.role}
              </div>
              <h3 className="text-2xl font-black text-gray-900">{CHAIRMAN_DESK.name}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {CHAIRMAN_DESK.office}
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
            <p>
              Dr. Oluwaseun Adeleke is an economist, public administrator, and advocate for transparent democratic reform. With over two decades of experience in community development policy, he has led MPP toward becoming a values-driven coalition dedicated to integrity and sustainable democratic growth.
            </p>
            <p>
              Holding degrees in Public Economics and Comparative Governance, Dr. Adeleke has authored pivotal policy frameworks on regional economic diversification, local agricultural infrastructure, and judicial independence.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <Button variant="primary" size="sm" onClick={() => setModalOpen(false)}>
              Close Profile
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ChairmanDeskSection;
