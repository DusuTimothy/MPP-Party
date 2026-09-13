import React, { useState } from 'react';
import { COMMITTEE_MEMBERS } from '../data/partyData';
import { FaPodcast, FaPlay, FaHeadphones, FaUsers, FaArrowRight, FaVideo } from 'react-icons/fa';
import Button from './common/Button';

/**
 * MediaPodcastSection - Mirrors NITDA's 'Explore Our Service Departments' & 'NITDA Podcast' section
 */
const MediaPodcastSection = ({ onOpenJoinModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Party Organs & Service Directorates (NITDA "Explore Our Service Departments") */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
                Statutory Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
                Party Organs & Directorates
              </h2>
              <div className="w-16 h-1 bg-mpp-green mt-3 rounded-full" />
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Our national administration is subdivided into autonomous directorates executing policies decided by the National Working Committee.
              </p>
            </div>

            {/* Department Quick List (NITDA style) */}
            <div className="space-y-3">
              {COMMITTEE_MEMBERS.slice(0, 4).map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-4 rounded-xl border border-gray-200 hover:border-mpp-green hover:shadow-sm transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-11 h-11 rounded-lg object-cover object-top border border-gray-100"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-mpp-green transition-colors">
                        {member.department}
                      </h4>
                      <div className="text-xs text-gray-500">
                        {member.name} — <span className="text-mpp-green-dark font-medium">{member.role}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-gray-400 group-hover:text-mpp-green transition-colors p-2"
                    aria-label={`Contact ${member.name}`}
                  >
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button to="/about" variant="outline" size="sm" icon={FaUsers}>
                View Full Organogram & Leadership
              </Button>
            </div>
          </div>

          {/* Right Column: Campaign Media & Civic Podcast (NITDA "NITDA Podcast") */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
                Multimedia Communications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
                The Civic Voice Broadcast & Podcast
              </h2>
              <div className="w-16 h-1 bg-mpp-green mt-3 rounded-full" />
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Tune in to weekly policy debates, field interviews with ward coordinators, and civic masterclasses.
              </p>
            </div>

            {/* Video / Podcast Player Container (NITDA style) */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 border-4 border-white aspect-video group">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="MPP Civic Broadcast Episode"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                    alt="MPP Convention & Broadcast Studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Red Accent Play Button */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-18 h-18 sm:w-20 sm:h-20 bg-mpp-red text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 focus:outline-none"
                    aria-label="Play Civic Broadcast"
                  >
                    <FaPlay className="w-7 h-7 ml-1" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FaHeadphones className="text-green-300" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Ep. 18: Reclaiming Local Government Autonomy
                      </span>
                    </div>
                    <span className="text-[11px] bg-black/50 px-2 py-0.5 rounded backdrop-blur">
                      24 mins
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-gray-700">
                <FaPodcast className="text-mpp-green text-base" />
                <span className="font-semibold">Available on Spotify, Apple Podcasts & Google Podcasts</span>
              </div>
              <Button variant="cta" size="sm" onClick={onOpenJoinModal}>
                Subscribe Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPodcastSection;
