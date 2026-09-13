import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../data/partyData';
import Button from './common/Button';
import Modal from './common/Modal';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCheckCircle, FaTicketAlt } from 'react-icons/fa';

/**
 * EventsSection - Mirrors NITDA's 'events-section' with prominent date badges and venue details
 */
const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');

  const handleRsvp = (e) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setRsvpSubmitted(false);
    setRsvpName('');
    setRsvpEmail('');
  };

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
              Civic Engagements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
              Upcoming Activities & Events
            </h2>
            <div className="w-20 h-1 bg-mpp-green mt-3 rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
              Participate in our open consultative town halls, youth hackathons, and statutory party conventions across the federation.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button to="/elections" variant="outline" size="md">
              View Election Calendar
            </Button>
          </div>
        </div>

        {/* Event Blocks Grid (NITDA style with date box) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl border border-gray-200 hover:border-mpp-green hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Date Box + Category Badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  {/* NITDA Signature Calendar Date Block */}
                  <div className="w-16 h-16 rounded-xl bg-green-50 border border-green-200 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-mpp-green transition-colors duration-300 shadow-xs">
                    <span className="text-2xl font-black text-mpp-green-dark group-hover:text-white leading-none">
                      {event.day}
                    </span>
                    <span className="text-[11px] font-bold text-mpp-green uppercase group-hover:text-white/90 tracking-wider">
                      {event.month}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full group-hover:bg-green-100 group-hover:text-mpp-green-dark transition-colors">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-mpp-green transition-colors mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 text-xs text-gray-500 mb-6">
                  <div className="flex items-start space-x-2">
                    <FaMapMarkerAlt className="text-mpp-green mt-0.5 flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-400 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedEvent(event)}
                  className="w-full justify-center text-xs"
                  icon={FaTicketAlt}
                >
                  Register to Attend
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <Modal
          isOpen={Boolean(selectedEvent)}
          onClose={handleCloseModal}
          title={`RSVP: ${selectedEvent.title}`}
          maxWidth="max-w-lg"
        >
          {rsvpSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <FaCheckCircle className="text-4xl text-mpp-green mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Registration Confirmed!</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Thank you, <strong>{rsvpName}</strong>. Your attendee pass for <strong>{selectedEvent.title}</strong> on <strong>{selectedEvent.day} {selectedEvent.month} {selectedEvent.year}</strong> has been logged.
              </p>
              <div className="p-3 bg-gray-50 border rounded-lg text-xs text-gray-700">
                <strong>Venue:</strong> {selectedEvent.venue}
              </div>
              <Button variant="primary" size="sm" onClick={handleCloseModal} className="w-full">
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleRsvp} className="space-y-4">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-xs text-green-900">
                Admission is free for all accredited party members and registered citizens.
              </div>

              <div className="text-xs text-gray-600">
                <div><strong>Date:</strong> {selectedEvent.day} {selectedEvent.month} {selectedEvent.year}</div>
                <div><strong>Time:</strong> {selectedEvent.time}</div>
                <div><strong>Location:</strong> {selectedEvent.venue}</div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="e.g. Babatunde Adeyemi"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={rsvpEmail}
                  onChange={(e) => setRsvpEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="cta" size="md" className="w-full">
                  Confirm Attendee RSVP
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </section>
  );
};

export default EventsSection;
