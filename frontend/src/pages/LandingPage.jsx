import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import CorePillarsSection from '../components/landing/CorePillarsSection';
import MembershipSection from '../components/landing/MembershipSection';
import TrainerSection from '../components/landing/TrainerSection';
import FounderSection from '../components/landing/FounderSection';
import TestimonialSection from '../components/landing/TestimonialSection';
import GallerySection from '../components/landing/GallerySection';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CorePillarsSection />
      <MembershipSection />
      <TrainerSection />
      <FounderSection />
      <TestimonialSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
