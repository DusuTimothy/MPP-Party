import React, { useState } from 'react';
import Button from '../components/common/Button';
import { PARTY_INFO } from '../data/partyData';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaBuilding,
  FaPaperPlane,
} from 'react-icons/fa';

const BRANCH_OFFICES = [
  {
    city: "Abuja National Headquarters",
    address: "Plot 1044 Civic Freedom Boulevard, Central Business District",
    phone: "+234 (0) 800 677 7278",
    lead: "National Secretariat Desk",
  },
  {
    city: "Lagos Zonal Secretariat",
    address: "42 Commercial Avenue, Yaba, Lagos State",
    phone: "+234 (0) 802 111 4455",
    lead: "Southwest Coordination Bureau",
  },
  {
    city: "Kano Zonal Secretariat",
    address: "18 Bompai Road, Nassarawa, Kano State",
    phone: "+234 (0) 803 222 7788",
    lead: "Northwest Coordination Bureau",
  },
  {
    city: "Rivers Zonal Secretariat",
    address: "88 Olu Obasanjo Way, Port Harcourt, Rivers State",
    phone: "+234 (0) 805 333 9900",
    lead: "South-South Coordination Bureau",
  },
];

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-mpp-green-dark text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-mpp-green">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-green-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Open Communication
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact the Secretariat
          </h1>
          <p className="text-sm sm:text-base text-green-100 max-w-2xl mx-auto">
            Whether you have an inquiry, press request, or want to connect with your state branch, our team is ready to assist.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Contact Form & Primary Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-200">
                Direct Channels
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-3">
                Reach Out to Our Officers
              </h2>
              <div className="w-16 h-1 bg-mpp-red mt-2 rounded-full" />
              <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                Our national and regional desks are open Monday through Friday, 8:00 AM – 5:00 PM. All written correspondence receives a tracking ticket.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-mpp-green flex items-center justify-center text-lg flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400">Headquarters</h4>
                  <p className="text-sm font-semibold text-gray-900">{PARTY_INFO.headquarters}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-mpp-green flex items-center justify-center text-lg flex-shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400">Telephone Hotline</h4>
                  <p className="text-sm font-semibold text-gray-900">{PARTY_INFO.phone}</p>
                  <p className="text-xs text-gray-500">Toll-free across participating networks</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-mpp-green flex items-center justify-center text-lg flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400">Email Desks</h4>
                  <p className="text-sm font-semibold text-gray-900">{PARTY_INFO.email}</p>
                  <p className="text-xs text-gray-500">Press: press@mpp-party.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-mpp-green flex items-center justify-center text-lg flex-shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-gray-400">Public Hours</h4>
                  <p className="text-sm font-semibold text-gray-900">Mon – Fri: 08:00 – 17:00</p>
                  <p className="text-xs text-gray-500">Closed on statutory civic holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Send an Official Message</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Complete this form to submit your inquiry directly to the appropriate directorate.
            </p>

            {submitted ? (
              <div className="mt-6 p-8 rounded-xl bg-green-100/70 border border-green-300 text-center space-y-3">
                <FaCheckCircle className="text-4xl text-mpp-green mx-auto" />
                <h4 className="text-xl font-bold text-gray-900">Message Dispatched!</h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  Thank you, <strong>{formState.name}</strong>. Your correspondence has been logged with ticket reference <strong>#MPP-{Math.floor(10000 + Math.random() * 90000)}</strong>. Our desk officer will respond to <strong>{formState.email}</strong> shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: '',
                      email: '',
                      phone: '',
                      department: 'General Inquiries',
                      message: '',
                    });
                  }}
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Aminat Yusuf"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Direct To Directorate *
                  </label>
                  <select
                    value={formState.department}
                    onChange={(e) => setFormState({ ...formState, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none bg-white"
                  >
                    <option value="General Inquiries">General Secretariat Inquiries</option>
                    <option value="Press & Media Relations">Press & Media Relations</option>
                    <option value="Electoral & Candidate Matters">Electoral & Candidate Matters</option>
                    <option value="Youth & Women Wing">Youth & Women Wing</option>
                    <option value="Membership & Ward Affairs">Membership & Ward Affairs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Please specify your message, inquiry, or local ward request..."
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                  />
                </div>

                <div>
                  <Button type="submit" variant="primary" size="md" icon={FaPaperPlane}>
                    Transmit Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Regional Branches Directory */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-200">
              Field Offices
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">
              Principal Zonal Secretariats
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Visit or call your nearest regional coordinating office for local ward accreditation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANCH_OFFICES.map((branch, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-sm transition-all space-y-2"
              >
                <div className="flex items-center space-x-2 text-mpp-green text-sm font-bold">
                  <FaBuilding />
                  <span>{branch.city}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {branch.address}
                </p>
                <div className="text-xs font-medium text-gray-900 pt-1">
                  {branch.phone}
                </div>
                <div className="text-[10px] text-gray-400 font-mono">
                  {branch.lead}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
