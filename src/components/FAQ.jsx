import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/partyData';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import Button from './common/Button';

const FAQ = ({ onOpenJoinModal }) => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Understanding My Political Party (MPP)
          </h2>
          <div className="w-16 h-1 bg-mpp-red mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-base mt-3">
            Clear answers regarding our party constitution, membership rights, candidate selection, and grassroots financing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-mpp-green bg-green-50/20 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center space-x-3 pr-4">
                    <FaQuestionCircle
                      className={`flex-shrink-0 w-4 h-4 ${
                        isOpen ? 'text-mpp-green' : 'text-gray-400'
                      }`}
                    />
                    <span className="font-bold text-gray-900 text-base sm:text-lg">
                      {item.question}
                    </span>
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? 'bg-mpp-green text-white rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <FaChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200 border-t border-gray-100/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-xl bg-gray-50 border border-gray-200 text-center space-y-3">
          <p className="text-sm font-semibold text-gray-800">
            Have a question not covered here or need help contacting your local ward chapter?
          </p>
          <div className="flex justify-center space-x-4">
            <Button to="/contact" variant="outline" size="sm">
              Contact Secretariat Desk
            </Button>
            <Button variant="cta" size="sm" onClick={onOpenJoinModal}>
              Register as Member
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
