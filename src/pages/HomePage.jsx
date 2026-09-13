import React from 'react';
import Hero from '../components/Hero';
import RoadmapBanner from '../components/RoadmapBanner';
import ChairmanDeskSection from '../components/ChairmanDeskSection';
import GetInvolved from '../components/GetInvolved';
import ServicesSection from '../components/ServicesSection';
import EventsSection from '../components/EventsSection';
import MediaPodcastSection from '../components/MediaPodcastSection';
import NewsUpdatesSection from '../components/NewsUpdatesSection';
import FAQ from '../components/FAQ';

/**
 * HomePage - Restructured to follow the NITDA (nitda.gov.ng) UI Architecture
 * Featuring authentic Nigerian campaign stock imagery and GetInvolved action cards
 */
const HomePage = ({ onOpenJoinModal }) => {
  return (
    <main>
      {/* 1. Hero banner with Nigerian campaign crowd & rally imagery + 2027 election countdown */}
      <Hero onOpenJoinModal={onOpenJoinModal} />

      {/* 2. Strategic Democratic Roadmap & Action Plan (SDRAP 2024–2027) 8 Pillars */}
      <RoadmapBanner />

      {/* 3. "From The National Chairman's Desk" on authoritative black background */}
      <ChairmanDeskSection />

      {/* 4. Core Programmes & Intervention Blocks */}
      <ServicesSection />

      {/* 5. "Contribute To Your Great Party" - 3 solid colored cards (Red, Green, Cyan) */}
      <GetInvolved onOpenJoinModal={onOpenJoinModal} />

      {/* 6. Upcoming Activities & Events with calendar date badges */}
      <EventsSection />

      {/* 7. Party Organs & "The Civic Voice" Broadcast / Podcast */}
      <MediaPodcastSection onOpenJoinModal={onOpenJoinModal} />

      {/* 8. News & Updates: Featured lead story + 3 recent press releases */}
      <NewsUpdatesSection />

      {/* 9. FAQ Accordion */}
      <FAQ onOpenJoinModal={onOpenJoinModal} />
    </main>
  );
};

export default HomePage;
