import React, { useState } from 'react';
import { FaPlay, FaVideo, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import Button from './common/Button';

const VideoSection = ({ onOpenJoinModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // High quality placeholder video / embed
  // Using an official YouTube embed URL for civic / town hall / assembly practice
  const youtubeVideoId = "dQw4w9WgXcQ"; // or generic placeholder embed

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Video Embed Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border-4 border-white aspect-video group">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="MPP National Convention Keynote Address"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  {/* Video Poster Image (high-resolution crowd convention) */}
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                    alt="MPP Convention Keynote Presentation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Play Button Overlay */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-20 h-20 bg-mpp-red text-white flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:bg-[#b00e1f] focus:outline-none focus:ring-4 focus:ring-red-300/60"
                    aria-label="Play Party Convention Keynote Address"
                  >
                    <FaPlay className="w-7 h-7 ml-1" />
                  </button>

                  {/* Bottom Caption on Poster */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-mpp-red animate-ping" />
                      <span className="text-xs uppercase font-bold tracking-wider bg-black/50 px-2.5 py-1 rounded backdrop-blur">
                        Featured Broadcast
                      </span>
                    </div>
                    <span className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded backdrop-blur">
                      12:45 mins
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center flex items-center justify-center space-x-2">
              <FaVideo className="text-mpp-green" />
              <span>Full transcript & closed captions available in 4 languages</span>
            </div>
          </div>

          {/* Right Column: Context & Key Takeaways */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
                Keynote Broadcast
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-4 tracking-tight leading-snug">
                Watch: "A Covenant of Service" — The 2026 Party Address
              </h2>
              <div className="w-16 h-1 bg-mpp-red mt-3 rounded-full" />
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              In this special address delivered before 8,000 delegates at the National Convention, party leaders set forth our 10-year policy compact for economic revitalization, civic decentralization, and electoral integrity.
            </p>

            <div className="space-y-3">
              {[
                "The 5 pillars of the Grassroots Civic Renewal Act",
                "Funding mechanism for free primary maternal care",
                "Constitutional amendment proposal for open party primaries",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-mpp-green mt-1 flex-shrink-0 w-4 h-4" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="cta"
                size="md"
                onClick={onOpenJoinModal}
              >
                Join the Movement
              </Button>
              <Button
                to="/about"
                variant="outline"
                size="md"
                icon={FaExternalLinkAlt}
                iconPosition="right"
              >
                Read Manifesto Text
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
