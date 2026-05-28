import React from 'react';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1747239685045-fcbcf98985db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxyZWZvcm1lciUyMHBpbGF0ZXN8ZW58MHx8fHwxNzc5OTkyMDc3fDA&ixlib=rb-4.1.0&q=85")'
        }}
      />
      {/* Elegant Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-20">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-6 py-2 border border-white/20">
          <span className="text-white text-sm font-medium tracking-wide">Grand Opening Offer — Flat 20% OFF on Memberships</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif tracking-tight leading-tight mb-6 drop-shadow-lg">
          COREVA
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-light tracking-widest uppercase text-white/90 font-sans">
            Premium Pilates & Wellness Studio
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light mb-12 drop-shadow">
          Strengthen your body. Elevate your life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-sm md:text-base px-10 py-6 rounded-full transition-transform hover:scale-105 duration-300">
            Book Your Trial Session
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white text-sm md:text-base px-10 py-6 rounded-full transition-transform hover:scale-105 duration-300 backdrop-blur-sm">
            Explore Classes
          </Button>
        </div>
      </div>
    </section>
  );
}
