import React from 'react';

export default function FounderSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -left-20 top-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Founder Image */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-accent/20 rounded-3xl -z-10 transform rotate-2 transition-transform group-hover:rotate-3 duration-500" />
          <div className="aspect-[3/4] max-h-[600px] w-full relative rounded-3xl overflow-hidden shadow-2xl bg-muted">
            <img 
              src="/images/founder.png" 
              alt="Astitava Srivastava - Founder of COREVA" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-accent tracking-widest uppercase text-sm font-semibold mb-3">Meet the Founder</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
            Astitava Srivastava
          </h2>
          
          <div className="space-y-6 text-primary/80 font-light text-base md:text-lg leading-relaxed">
            <p>
              A native of Lucknow, Astitava's journey is rooted in a profound passion for authentic, sustainable wellness. Recognizing a gap in traditional fitness culture, he sought to create a space that prioritizes mindful movement over extreme intensity.
            </p>
            <p>
              With over 3 years of extensive experience in the gym and fitness industry, and as a certified Pilates instructor, Astitava brings a refined, holistic perspective to body conditioning. He has successfully guided countless individuals toward becoming healthier, stronger, and more aligned with their bodies.
            </p>
            <p>
              His vision for COREVA is to foster a sanctuary where strength meets mindfulness—a place where fitness is not a punishment, but a celebration of what your body can achieve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
