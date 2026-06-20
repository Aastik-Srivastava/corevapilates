import React from 'react';
import { Button } from '../ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function PrivateTrainingSection() {
  const handleBookPrivate = () => {
    const text = encodeURIComponent("Hi! I am interested in booking a Private Training session at COREVA.");
    window.open(`https://wa.me/919129661662?text=${text}`, '_blank');
  };

  return (
    <section className="w-full py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2">
          <h3 className="text-accent tracking-widest uppercase text-sm font-semibold mb-4">Exclusive Experience</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">Private Training</h2>
          <p className="text-primary-foreground/80 font-light text-lg mb-8 leading-relaxed">
            Elevate your practice. Our premium private training is the preferred choice for clients who demand the very best, offering exclusive one-on-one attention for accelerated results.
          </p>
          <Button 
            size="lg" 
            onClick={handleBookPrivate}
            className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Inquire About Private Sessions
          </Button>
        </div>

        <div className="w-full md:w-1/2 bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
          <ul className="space-y-6">
            {[
              "One-on-One Coaching",
              "Personalized Programs",
              "Faster Progress & Recovery",
              "Dedicated Instructor Attention"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span className="text-lg font-light tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
