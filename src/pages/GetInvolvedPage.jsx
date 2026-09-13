import React, { useState } from 'react';
import Button from '../components/common/Button';
import { PARTY_INFO } from '../data/partyData';
import { FaHandsHelping, FaCheckCircle, FaHeart, FaUsers, FaShareAlt, FaMapPin } from 'react-icons/fa';

const GetInvolvedPage = ({ onOpenJoinModal }) => {
  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Canvassing & Door-to-Door',
    availability: 'Weekends',
    notes: '',
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // Donation simulator state
  const [selectedAmount, setSelectedAmount] = useState('5000');
  const [donationDone, setDonationDone] = useState(false);

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  const handleDonation = (e) => {
    e.preventDefault();
    setDonationDone(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-mpp-green-dark text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-mpp-green">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-green-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Citizen Power
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Get Involved with MPP
          </h1>
          <p className="text-sm sm:text-base text-green-100 max-w-2xl mx-auto">
            From volunteering in your neighbourhood to supporting democratic voter education, discover practical pathways to shape our shared destiny.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Volunteer Application & Member Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form: Volunteer Registration */}
          <div className="lg:col-span-7 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-100/60 px-3 py-1 rounded-full">
              Join Our Field Team
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3">
              Volunteer In Your Local Ward
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Field volunteers are the heartbeat of our movement. Sign up below to join your community's outreach desk.
            </p>

            {volunteerSubmitted ? (
              <div className="mt-6 p-6 rounded-xl bg-green-100/60 border border-green-300 text-center space-y-3">
                <FaCheckCircle className="text-4xl text-mpp-green mx-auto" />
                <h3 className="text-xl font-bold text-gray-900">Application Submitted!</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Thank you, <strong>{volunteerForm.fullName}</strong>. Your local ward mobilization coordinator will connect with you via email ({volunteerForm.email}) within 48 hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setVolunteerSubmitted(false)}
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerForm.fullName}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, fullName: e.target.value })}
                    placeholder="e.g. Chinedu Adeleke"
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
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Primary Area of Interest
                    </label>
                    <select
                      value={volunteerForm.role}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none bg-white"
                    >
                      <option value="Canvassing & Door-to-Door">Canvassing & Door-to-Door</option>
                      <option value="Digital Media & Online Organizing">Digital Media & Online Organizing</option>
                      <option value="Event Planning & Town Hall Logistics">Event Planning & Town Hall Logistics</option>
                      <option value="Voter Education & Accreditation Desk">Voter Education & Accreditation Desk</option>
                      <option value="Legal & Ballot Protection Observer">Legal & Ballot Protection Observer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Availability
                    </label>
                    <select
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-mpp-green outline-none bg-white"
                    >
                      <option value="Weekends Only">Weekends Only</option>
                      <option value="Weekday Evenings">Weekday Evenings</option>
                      <option value="Full-Time Campaign Support">Full-Time Campaign Support</option>
                      <option value="Remote / Flexible">Remote / Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
                    Submit Volunteer Application
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Grassroots Micro-Donation Simulator & Member Portal */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Member Registration Card */}
            <div className="bg-gradient-to-br from-mpp-green to-mpp-green-dark text-white p-6 rounded-2xl shadow-md space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded">
                Official Credential
              </span>
              <h3 className="text-xl font-bold">Register as a Full Party Member</h3>
              <p className="text-xs text-green-100 leading-relaxed">
                Receive your digital membership credential, voting rights in candidate primaries, and free admittance to quarterly policy summits.
              </p>
              <Button variant="cta" size="md" onClick={onOpenJoinModal} className="w-full">
                Claim Free Membership
              </Button>
            </div>

            {/* Grassroots Micro-Contribution Simulator */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
              <div className="flex items-center space-x-2 text-mpp-green font-bold text-xs uppercase tracking-wider">
                <FaHeart />
                <span>Small-Dollar Grassroots Fund</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Support People-Powered Democracy
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                MPP accepts no corporate backroom funds. 100% of grassroots contributions go directly to local voter registration drives and campaign materials.
              </p>

              {donationDone ? (
                <div className="p-4 rounded-xl bg-green-100 border border-green-300 text-center text-xs text-green-900 space-y-1 animate-in fade-in">
                  <div className="font-bold">Thank you for your generous simulated pledge!</div>
                  <div>Pledge of ₦{Number(selectedAmount).toLocaleString()} registered successfully.</div>
                </div>
              ) : (
                <form onSubmit={handleDonation} className="space-y-3">
                  <div className="grid grid-cols-4 gap-2">
                    {['1000', '2500', '5000', '20000'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-2 px-1 text-xs font-bold border transition-colors ${
                          selectedAmount === amt
                            ? 'bg-mpp-green text-white border-mpp-green'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-mpp-green'
                        }`}
                      >
                        ₦{Number(amt).toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <Button type="submit" variant="cta" size="sm" className="w-full">
                    Simulate Contribution of ₦{Number(selectedAmount).toLocaleString()}
                  </Button>
                  <p className="text-[10px] text-gray-400 text-center">
                    Simulated educational tool — no real payment is collected.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
