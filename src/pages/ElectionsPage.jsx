import React, { useState } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { PARTY_INFO } from '../data/partyData';
import { FaVoteYea, FaCalendarCheck, FaIdCard, FaMapMarkerAlt, FaCheckCircle, FaUserTie, FaClock } from 'react-icons/fa';

// Candidate dataset with fictional names & generic stock photos
const CANDIDATES = [
  {
    id: 1,
    name: "Senator Amina Bello",
    office: "Gubernatorial Candidate",
    state: "Central State",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    slogan: "Revitalizing Municipal Infrastructure & Public Health",
    keyPolicies: ["Free school meals program", "100MW community solar park", "Civil servant wage enhancement"],
    bio: "Former state budget commissioner and micro-finance advocate with 15 years in public planning.",
  },
  {
    id: 2,
    name: "Engr. Chukwudi Nnamdi",
    office: "National Assembly / Senate",
    state: "Eastern Senatorial District",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    slogan: "Constituency Transparency & Industrial Jobs",
    keyPolicies: ["Direct constituent ward grants", "Technical apprentice academies", "Erosion control projects"],
    bio: "Civil engineering consultant and grassroots sports patron dedicated to regional development.",
  },
  {
    id: 3,
    name: "Barr. Zainab Mohammed",
    office: "House of Representatives",
    state: "Metro Federal Constituency",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    slogan: "Defending Human Rights & Judicial Reform",
    keyPolicies: ["Legal aid clinics for market women", "Tech startup tax shield bill", "Police community oversight"],
    bio: "Human rights attorney and member of the National Constitutional Review taskforce.",
  },
  {
    id: 4,
    name: "David Olatunji",
    office: "State House of Assembly",
    state: "South Constituency I",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    slogan: "Agricultural Modernization & Clean Water",
    keyPolicies: ["Solar borehole network across 18 wards", "Fertilizer subsidy watchdog", "Youth agro-loans"],
    bio: "Agribusiness entrepreneur and community cooperative chairman with deep roots in local farming.",
  },
];

const ElectionsPage = ({ onOpenJoinModal }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voterCardChecked, setVoterCardChecked] = useState(false);
  const [voterNumberInput, setVoterNumberInput] = useState('');
  const [accreditationStatus, setAccreditationStatus] = useState(null);

  const handleVerifyVoter = (e) => {
    e.preventDefault();
    if (!voterNumberInput.trim()) return;
    setAccreditationStatus({
      valid: true,
      unit: "Polling Unit 014 — Community Primary School Hall",
      ward: "Ward 03, Central District",
      status: "Eligible to Vote",
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-mpp-green-dark text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-mpp-green">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-green-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Democratic Franchise
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Elections & Candidate Directory
          </h1>
          <p className="text-sm sm:text-base text-green-100 max-w-2xl mx-auto">
            Review our vetted candidates, check your voter card registration, and prepare for upcoming democratic ballots.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Candidates Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-200">
                Nominees
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                Official MPP Flagbearers
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Every candidate has signed our 10-point Binding Ethics & Public Asset Disclosure Pledge.
              </p>
            </div>
            <span className="text-xs text-gray-400 mt-2 sm:mt-0 font-medium">
              * Fictional placeholder profiles for demo purposes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CANDIDATES.map((cand) => (
              <Card
                key={cand.id}
                image={cand.image}
                imageAlt={cand.name}
                imageBadge={cand.office}
                className="flex flex-col h-full hover:border-green-300"
              >
                <div className="text-xs font-semibold text-mpp-green uppercase tracking-wider mb-1">
                  {cand.state}
                </div>

                <CardHeader className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {cand.name}
                  </h3>
                  <div className="text-xs text-gray-500 italic mt-1 line-clamp-1">
                    "{cand.slogan}"
                  </div>
                </CardHeader>

                <CardBody className="flex-grow">
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {cand.bio}
                  </p>
                </CardBody>

                <CardFooter className="pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs"
                    onClick={() => setSelectedCandidate(cand)}
                  >
                    View Manifesto
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Polling Unit & Voter Accreditation Simulator */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-100/60 px-3 py-1 rounded-full">
                Voter Education Toolkit
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-3">
                Simulated Voter Unit & Status Check
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Confirm your ward registration status and obtain accurate directions to your assigned polling center before election day.
              </p>

              <form onSubmit={handleVerifyVoter} className="mt-5 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Enter Voter Identification Number (VIN)..."
                    value={voterNumberInput}
                    onChange={(e) => setVoterNumberInput(e.target.value)}
                    className="px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm flex-grow focus:ring-2 focus:ring-mpp-green outline-none"
                  />
                  <Button type="submit" variant="primary" size="sm">
                    Verify
                  </Button>
                </div>
                <div className="text-[11px] text-gray-400">
                  Demo tool: Enter any placeholder number (e.g. 90F5B4109) to test.
                </div>
              </form>

              {accreditationStatus && (
                <div className="mt-4 p-4 rounded-xl bg-white border border-green-200 shadow-sm space-y-2 animate-in fade-in">
                  <div className="flex items-center space-x-2 text-xs font-bold text-mpp-green">
                    <FaCheckCircle />
                    <span>VOTER ACCREDITATION RECORD VERIFIED</span>
                  </div>
                  <div className="text-xs text-gray-700">
                    <div><strong>Polling Unit:</strong> {accreditationStatus.unit}</div>
                    <div><strong>Ward / District:</strong> {accreditationStatus.ward}</div>
                    <div><strong>Status:</strong> <span className="text-mpp-green font-semibold">{accreditationStatus.status}</span></div>
                  </div>
                </div>
              )}
            </div>

            {/* Voter Checklist */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4 shadow-sm">
              <h4 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                <FaIdCard className="text-mpp-green" />
                <span>Election Day Voter Readiness Checklist</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                {[
                  "Confirm your physical Voter Identification Card is undamaged",
                  "Locate your designated ward polling station 48 hours prior",
                  "Arrive at polling station by 8:00 AM for biometric accreditation",
                  "Preserve the secrecy of your ballot behind voting booth screens",
                  "Observe vote counting peacefully with accredited civil watchdogs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <FaCheckCircle className="text-mpp-green mt-1 flex-shrink-0 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Manifesto Detail Modal */}
      {selectedCandidate && (
        <Modal
          isOpen={Boolean(selectedCandidate)}
          onClose={() => setSelectedCandidate(null)}
          title={`Candidate Profile: ${selectedCandidate.name}`}
          maxWidth="max-w-xl"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={selectedCandidate.image}
                alt={selectedCandidate.name}
                className="w-20 h-24 object-cover rounded-xl shadow-md flex-shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-mpp-green uppercase tracking-wide">
                  {selectedCandidate.office}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{selectedCandidate.name}</h3>
                <div className="text-xs text-gray-500">{selectedCandidate.state}</div>
                <div className="text-xs italic text-gray-700 mt-1">"{selectedCandidate.slogan}"</div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
                Background
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {selectedCandidate.bio}
              </p>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                Top 3 Legislative Commitments
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {selectedCandidate.keyPolicies.map((pol, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-mpp-green" />
                    <span>{pol}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className="text-[11px] text-gray-400">MPP Vetted Democratic Ticket</span>
              <Button variant="primary" size="sm" onClick={() => setSelectedCandidate(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ElectionsPage;
