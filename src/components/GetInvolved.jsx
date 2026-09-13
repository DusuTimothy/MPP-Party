import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUsers, FaQuestion, FaHandshake, FaHandPointer } from 'react-icons/fa';

/**
 * GetInvolved - Exact reproduction of the Nigerian political party "Get Involved" UI
 * Features:
 * - Real Nigerian campaign rally crowd background with dark overlay
 * - Top-left heading: "Get Involved / Contribute To Your Great Party"
 * - 3 solid colored cards: Red (Know Your Candidates), Green (Volunteer), Cyan (Register To Vote)
 * - Centered "JOIN NOW" interactive badge
 */
const GetInvolved = ({ onOpenJoinModal }) => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-950 text-white">
      {/* Real Nigerian campaign crowd rally background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=2000&q=80"
          alt="Nigerian Campaign Rally Crowd"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to make cards and text stand out clearly */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top-Left Section Heading */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Contribute To Your Great Party
          </h2>
        </div>

        {/* 3 Prominent Solid Colored Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Card 1: Red Card - KNOW YOUR CANDIDATES */}
          <div
            onClick={() => navigate('/elections')}
            className="bg-[#D71920] hover:bg-[#c4131a] rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/40 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <FaUsers />
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider mb-4 leading-tight">
              KNOW YOUR CANDIDATES
            </h3>

            <div className="space-y-1.5 text-sm sm:text-base text-white/95 leading-relaxed flex-grow">
              <p className="font-semibold">Know Your Candidate</p>
              <p className="text-white/90">
                Get the latest news about your representatives
              </p>
            </div>
          </div>

          {/* Card 2: Green Card - VOLUNTEER */}
          <div
            onClick={onOpenJoinModal}
            className="bg-[#38A137] hover:bg-[#2f8c2e] rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-green-500/40 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl font-black mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <FaQuestion />
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider mb-4 leading-tight">
              VOLUNTEER
            </h3>

            <div className="text-sm sm:text-base text-white/95 leading-relaxed flex-grow">
              <p>
                We are committed to organizing Grassroots Youth Movement in every local government (LGA) powered by volunteers like you
              </p>
            </div>
          </div>

          {/* Card 3: Cyan/Blue Card - REGISTER TO VOTE */}
          <div
            onClick={() => navigate('/elections')}
            className="bg-[#20A6DF] hover:bg-[#1895cc] rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/40 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <FaHandshake />
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider mb-4 leading-tight">
              REGISTER TO VOTE
            </h3>

            <div className="space-y-1.5 text-sm sm:text-base text-white/95 leading-relaxed flex-grow">
              <p>Let your voice be heard. You can make a difference.</p>
              <p className="font-bold text-white">
                Get Your Permanent Voter's Card (PVC)
              </p>
            </div>
          </div>
        </div>

        {/* Centered JOIN NOW Badge */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={onOpenJoinModal}
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3.5 shadow-2xl border-4 border-white/80 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
            aria-label="Join MPP Now"
          >
            {/* Target concentric ring icon container */}
            <div className="relative w-12 h-12 rounded-full border-3 border-gray-900 flex items-center justify-center mr-3.5 group-hover:border-[#008751] transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-[#008751] transition-colors">
                <FaHandPointer className="w-4 h-4" />
              </div>
            </div>

            <div className="text-left pr-3">
              <span className="block text-2xl font-black tracking-wider leading-none text-gray-950 group-hover:text-[#008751] transition-colors">
                JOIN NOW
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Official Membership
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
