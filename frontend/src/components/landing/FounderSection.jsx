import React from 'react';

export default function FounderSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -left-20 top-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Placeholder Image Container */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-accent/20 rounded-3xl -z-10 transform rotate-2 transition-transform group-hover:rotate-3 duration-500" />
          <div className="aspect-[3/4] max-h-[600px] w-full relative rounded-3xl overflow-hidden shadow-2xl bg-muted flex items-center justify-center">
            {/* 
              This is a stock image acting as a high-quality placeholder.
              Can easily be swapped out with actual founder's image. 
            */}
            <img 
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Astitava Srivastava - Founder Placeholder" 
              className="w-full h-full object-cover opacity-90"
            />
            
            <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center p-6 text-center">
              <span className="bg-white/80 backdrop-blur-md text-primary px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold">
                Founder Image Placeholder
              </span>
            </div>
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
