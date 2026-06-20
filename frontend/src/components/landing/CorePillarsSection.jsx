import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Activity, Wind, Heart, Zap, Waves, Dumbbell, Stethoscope, Leaf, Utensils } from 'lucide-react';

export default function CorePillarsSection() {
  const pillars = [
    {
      title: "Pilates & Mat Pilates",
      description: "Core strengthening, posture alignment, flexibility, and controlled movement.",
      icon: <Activity className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Yoga & Aerial Yoga",
      description: "Mindfulness, breathwork, balance, flexibility, and stress relief.",
      icon: <Wind className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Zumba & HIIT Workouts",
      description: "High-energy small-group movement sessions designed for endurance and conditioning.",
      icon: <Heart className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Mobility & Posture",
      description: "Structured routines to improve movement quality and body mechanics.",
      icon: <Zap className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Stretch & Cupping",
      description: "Recovery-focused wellness therapies for relaxation and muscle release.",
      icon: <Waves className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Functional Training",
      description: "Practical strength and body conditioning for everyday performance.",
      icon: <Dumbbell className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Physiotherapy",
      description: "Comprehensive assessment, posture analysis, and personalized rehabilitation.",
      icon: <Stethoscope className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Naturopathy",
      description: "Holistic wellness recommendations and detailed lifestyle assessments.",
      icon: <Leaf className="w-8 h-8 stroke-1 text-primary" />
    },
    {
      title: "Diet Consultation",
      description: "Customized meal planning based on fitness goals and dietary preferences.",
      icon: <Utensils className="w-8 h-8 stroke-1 text-primary" />
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Core Offerings</h2>
          <div className="w-16 h-[1px] bg-primary/20 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group bg-background border-none shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden rounded-3xl">
              <CardContent className="p-8 flex flex-col h-full items-start relative">
                <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-serif text-primary mb-3">{pillar.title}</h3>
                <p className="text-primary/70 font-light leading-relaxed text-sm">
                  {pillar.description}
                </p>
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/30 transition-colors duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
