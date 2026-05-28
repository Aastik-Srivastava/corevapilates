import React from 'react';

export default function TrainerSection() {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
            Movement Guided <br/> With Intention
          </h2>
          <div className="space-y-6 text-primary/80 font-light text-lg">
            <p>
              Our expert-led sessions are designed to provide personalized attention in a small batch setting, ensuring that every movement is performed safely and effectively.
            </p>
            <p>
              Experience a calm, supportive environment where our dedicated trainers focus on your individual journey—helping you build strength, improve mobility, and find balance.
            </p>
            <ul className="space-y-4 mt-8">
              {['Expert-led sessions', 'Personalized attention', 'Small batch training', 'Calm and supportive environment'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1747240549807-fc3962949818?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHxyZWZvcm1lciUyMHBpbGF0ZXN8ZW58MHx8fHwxNzc5OTkyMDc3fDA&ixlib=rb-4.1.0&q=85" 
                alt="Trainer assisting client" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-10 -left-10 bg-background p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-border/50">
              <p className="font-serif text-xl text-primary mb-2">Dedicated Coaching</p>
              <p className="font-light text-sm text-primary/70">
                We believe in form, function, and intentional guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
