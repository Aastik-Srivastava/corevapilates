import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export default function MembershipSection() {
  const plans = [
    { name: "Introductory Session", price: "₹400", original: null, valid: "1 Session", popular: false },
    { name: "Single Session", price: "₹549", original: null, valid: "1 Session", popular: false },
    { name: "05 Sessions", price: "₹2,999", original: "₹3,499", valid: "Valid 1 Month", popular: false },
    { name: "11 Sessions", price: "₹6,499", original: "₹7,499", valid: "Valid 45 Days", popular: true },
    { name: "Mat Pilates Package", price: "₹5,499", original: "₹7,000", valid: "12 Days / 1 Month", popular: false },
    { name: "Combo Package", price: "₹9,999", original: "₹10,999", valid: "7 Pilates + 1 Aerial Yoga + 4 HIIT + 4 Zumba", popular: false },
    { name: "42 Sessions", price: "₹19,999", original: "₹21,999", valid: "Valid 3 Months", popular: false },
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-secondary/40 text-primary text-sm font-medium tracking-wide mb-8">
            GRAND OPENING OFFER — Flat 20% OFF on all memberships during the first month
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6">Invest in Your Wellbeing</h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-light">
            Choose a plan that fits your lifestyle. Premium quality, personalized attention, and a serene environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`relative overflow-hidden border-none rounded-3xl transition-transform duration-300 hover:-translate-y-2 flex flex-col ${
                plan.popular ? 'bg-primary text-primary-foreground shadow-2xl scale-105 z-10' : 'bg-white shadow-lg text-primary'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 w-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest text-center py-2">
                  Most Popular
                </div>
              )}
              <CardContent className={`p-8 flex flex-col flex-grow ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-xl font-serif mb-2">{plan.name}</h3>
                <div className="mb-6 flex-grow">
                  <p className={`text-sm font-light ${plan.popular ? 'text-primary-foreground/70' : 'text-primary/60'}`}>
                    {plan.valid}
                  </p>
                </div>
                <div className="mt-auto">
                  {plan.original && (
                    <p className={`text-sm line-through mb-1 opacity-60`}>
                      Regular Price: {plan.original}
                    </p>
                  )}
                  <div className="text-4xl font-light mb-8">
                    {plan.price}
                  </div>
                  <Button 
                    className={`w-full rounded-full py-6 transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-white text-primary hover:bg-white/90' 
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    Select Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-8 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300">
            Book a Trial Session
          </Button>
        </div>
      </div>
    </section>
  );
}
