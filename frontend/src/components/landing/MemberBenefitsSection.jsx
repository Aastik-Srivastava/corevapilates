import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Users, UserPlus, Clock, Target, Star, ShieldCheck } from 'lucide-react';

export default function MemberBenefitsSection() {
  const benefits = [
    { title: "Small Batch Classes", desc: "Intimate group settings ensuring you never get lost in the crowd.", icon: <Users className="w-6 h-6 text-primary" /> },
    { title: "Expert-Led Sessions", desc: "Highly trained, certified instructors guiding every movement.", icon: <Star className="w-6 h-6 text-primary" /> },
    { title: "Personalized Attention", desc: "Modifications and adjustments tailored to your body's needs.", icon: <UserPlus className="w-6 h-6 text-primary" /> },
    { title: "Premium Environment", desc: "A serene, clean, and luxurious space designed for focus.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
    { title: "Flexible Timings", desc: "Morning and evening batches to fit your busy lifestyle.", icon: <Clock className="w-6 h-6 text-primary" /> },
    { title: "Posture & Mobility", desc: "A core focus on correcting alignment and functional movement.", icon: <Target className="w-6 h-6 text-primary" /> },
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Why Choose Coreva</h2>
          <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="border-none shadow-sm bg-white hover:shadow-md transition-all rounded-3xl overflow-hidden">
              <CardContent className="p-8 flex items-start gap-5">
                <div className="p-4 bg-secondary/20 rounded-2xl shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary mb-2">{benefit.title}</h4>
                  <p className="text-sm font-light text-primary/70 leading-relaxed">{benefit.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
