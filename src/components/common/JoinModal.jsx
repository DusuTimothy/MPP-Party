import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import Logo from './Logo';
import { FaCheckCircle, FaIdCard, FaUserPlus } from 'react-icons/fa';

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'Lagos',
    lga: '',
    hasVoterCard: 'yes',
  });
  const [submitted, setSubmitted] = useState(false);
  const [memberId, setMemberId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a realistic dummy membership ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setMemberId(`MPP-2026-${randomNum}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      state: 'Lagos',
      lga: '',
      hasVoterCard: 'yes',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title={submitted ? "Membership Registration Confirmed" : "Join My Political Party (MPP)"}>
      {submitted ? (
        <div className="text-center py-4 space-y-5">
          <div className="w-16 h-16 bg-green-100 text-mpp-green rounded-full flex items-center justify-center mx-auto text-3xl">
            <FaCheckCircle />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900">Welcome to the Movement!</h4>
            <p className="text-sm text-gray-600 mt-2">
              Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Your digital membership profile has been officially initialized.
            </p>
          </div>

          {/* Virtual Membership Card Badge */}
          <div className="bg-gradient-to-br from-mpp-green-dark to-mpp-green text-white p-5 rounded-xl shadow-lg text-left relative overflow-hidden">
            <div className="absolute right-3 top-3 opacity-20">
              <Logo className="w-24 h-24" showText={false} />
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-green-200">
              <FaIdCard className="w-4 h-4" />
              <span>Official Digital Credential</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-black">{formData.fullName || 'Valued Member'}</div>
              <div className="text-xs text-green-100">{formData.state} Chapter — General Assembly</div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex justify-between items-center text-xs">
              <div>
                <div className="text-[10px] uppercase text-green-200">Membership ID</div>
                <div className="font-mono font-bold tracking-widest text-sm text-yellow-300">{memberId}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase text-green-200">Status</div>
                <span className="inline-block bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold">Active</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            A confirmation packet with your local ward assembly schedule has been dispatched to <span className="font-medium text-gray-700">{formData.email}</span>.
          </p>

          <Button variant="primary" className="w-full" onClick={handleReset}>
            Done & Return to Site
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-3 bg-green-50/80 border border-green-200 rounded-lg text-xs text-green-900 leading-relaxed">
            <strong>100% Free & Open:</strong> Join millions of citizens advocating for ethical governance, civic empowerment, and sustainable community progress.
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Full Legal Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Adaeze Okonkwo"
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-mpp-green focus:border-mpp-green outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-mpp-green focus:border-mpp-green outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-mpp-green focus:border-mpp-green outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                State / Region *
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-mpp-green focus:border-mpp-green outline-none bg-white"
              >
                <option value="Abia">Abia</option>
                <option value="Abuja FCT">Abuja FCT</option>
                <option value="Anambra">Anambra</option>
                <option value="Delta">Delta</option>
                <option value="Edo">Edo</option>
                <option value="Enugu">Enugu</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Lagos">Lagos</option>
                <option value="Ogun">Ogun</option>
                <option value="Oyo">Oyo</option>
                <option value="Rivers">Rivers</option>
                <option value="Other">Other State / Diaspora</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Local Council / Ward
              </label>
              <input
                type="text"
                name="lga"
                value={formData.lga}
                onChange={handleChange}
                placeholder="e.g. Ward 04, Central"
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-mpp-green focus:border-mpp-green outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Do you have a valid Voter Card?
            </label>
            <div className="flex space-x-4 pt-1 text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasVoterCard"
                  value="yes"
                  checked={formData.hasVoterCard === 'yes'}
                  onChange={handleChange}
                  className="text-mpp-green focus:ring-mpp-green"
                />
                <span>Yes, ready to vote</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasVoterCard"
                  value="no"
                  checked={formData.hasVoterCard === 'no'}
                  onChange={handleChange}
                  className="text-mpp-green focus:ring-mpp-green"
                />
                <span>Need assistance registering</span>
              </label>
            </div>
          </div>

          <div className="pt-3">
            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              icon={FaUserPlus}
            >
              Complete Registration
            </Button>
            <p className="text-[11px] text-gray-400 text-center mt-2">
              By joining, you agree to uphold the MPP Party Constitution and democratic charter.
            </p>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default JoinModal;
