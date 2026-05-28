import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-secondary/30 rounded-3xl -z-10 transform -rotate-2" />
          <img 
            src="https://images.unsplash.com/photo-1717500252297-b09508db7ceb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxwaWxhdGVzJTIwc3R1ZGlvfGVufDB8fHx8MTc3OTk5MjA0MXww&ixlib=rb-4.1.0&q=85" 
            alt="Mindful movement at Coreva" 
            className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg"
          />
        </div>
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight">
            A Refined <br/> Approach to Movement
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-primary/80 font-light leading-relaxed">
            <p>
              COREVA is a modern movement and wellness studio based in Lucknow, built around the idea that fitness should feel intentional, sustainable, and deeply personal.
            </p>
            <p>
              Unlike overcrowded traditional gyms focused only on intensity, COREVA emphasizes balance, consistency, posture, mobility, and long-term wellbeing. Every session is designed to help individuals move better, feel stronger, and build confidence in both body and mind.
            </p>
            <p>
              Our approach combines Pilates, yoga, mobility training, recovery, and mindful movement in a calm, premium environment that supports sustainable wellness instead of extreme fitness culture.
            </p>
            <p className="font-medium text-primary text-xl font-serif italic mt-8">
              At COREVA, fitness is not punishment — it is an uplifting lifestyle experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
