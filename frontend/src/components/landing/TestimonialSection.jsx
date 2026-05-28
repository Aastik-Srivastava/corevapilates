import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Aanya S.",
      text: "The premium environment and supportive trainers at COREVA completely changed my perspective on fitness. I feel stronger, calmer, and more aligned. It’s exactly the sanctuary I needed.",
      role: "Member since 2023"
    },
    {
      name: "Karan M.",
      text: "Coming from a generic gym, the difference here is profound. The posture improvement and personalized attention in the small batches are unparalleled. Very beginner-friendly atmosphere.",
      role: "Member since 2024"
    },
    {
      name: "Priya R.",
      text: "COREVA isn't just a studio; it's a lifestyle experience. The serene lighting, neutral tones, and expert instructors make every session something I deeply look forward to.",
      role: "Member since 2023"
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Stories of Transformation</h2>
          <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-white/50 backdrop-blur-xl border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <CardContent className="p-10 relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-secondary/40 -z-10" />
                <p className="text-primary/80 font-light leading-relaxed mb-8 italic text-lg z-10 relative">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-serif text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-primary/50 tracking-wide uppercase mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
