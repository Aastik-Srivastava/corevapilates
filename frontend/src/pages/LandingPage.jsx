import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import CorePillarsSection from '../components/landing/CorePillarsSection';
import MemberBenefitsSection from '../components/landing/MemberBenefitsSection';
import MembershipSection from '../components/landing/MembershipSection';
import PrivateTrainingSection from '../components/landing/PrivateTrainingSection';
import TrainerSection from '../components/landing/TrainerSection';
import FounderSection from '../components/landing/FounderSection';
// import TestimonialSection from '../components/landing/TestimonialSection'; // Commented out to serve as a placeholder for later
import GallerySection from '../components/landing/GallerySection';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CorePillarsSection />
      <MemberBenefitsSection />
      <MembershipSection />
      <PrivateTrainingSection />
      <TrainerSection />
      <FounderSection />
      {/* 
        <TestimonialSection /> 
        Keep this commented out as a placeholder until actual customer stories are available 
      */}
      <GallerySection />
      <Footer />
    </main>
  );
}
