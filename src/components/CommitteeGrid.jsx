import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from './common/Card';
import { COMMITTEE_MEMBERS } from '../data/partyData';
import { FaEnvelope, FaShieldAlt } from 'react-icons/fa';

const CommitteeGrid = () => {
  return (
    <section className="py-20 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-mpp-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200">
            Party Organs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
            National Working Committee
          </h2>
          <div className="w-16 h-1 bg-mpp-red mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            Meet the executive officers entrusted by party members to administer our statutory operations, youth programs, and nationwide electoral strategy.
          </p>
        </div>

        {/* 6 Headshot Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMITTEE_MEMBERS.map((member) => (
            <Card
              key={member.id}
              className="flex flex-col h-full hover:border-green-300"
            >
              <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden -mx-6 -mt-6 mb-5 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-mpp-green/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow">
                  {member.badge}
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-xs font-bold text-mpp-green uppercase tracking-wider mb-1">
                <FaShieldAlt className="text-[10px]" />
                <span>{member.role}</span>
              </div>

              <CardHeader className="mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
              </CardHeader>

              <CardBody className="flex-grow">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </CardBody>

              <CardFooter className="pt-4 text-xs">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-gray-500 hover:text-mpp-green transition-colors font-medium space-x-1.5"
                >
                  <FaEnvelope className="text-mpp-green" />
                  <span className="truncate max-w-[200px]">{member.email}</span>
                </a>
                <span className="text-[10px] text-gray-400 font-medium">Verified Officer</span>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-xl mx-auto">
            * All leadership officers are subjected to periodic democratic re-election per Article 12 of the MPP Constitution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitteeGrid;
