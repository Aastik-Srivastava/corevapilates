import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export default function MembershipSection() {
  /*
   * DATA TEMPLATE FOR PRICING PLANS
   * You can easily add or edit plans by modifying this array.
   * The generateWhatsAppLink function below will automatically pick up the new plan names and prices.
   */
  const pricingCategories = [
    {
      category: "Pilates",
      plans: [
        { name: "Single Session", price: "₹799", original: null, valid: "1 Session", description: "Perfect for occasional training or trying out a Pilates session.", popular: false },
        { name: "Monthly Membership", price: "₹7,499", original: "₹10,788", valid: "12 Sessions • Valid 30 Days", description: "3 sessions per week. Ideal for consistent progress and fitness improvement.", popular: true },
        { name: "Performance Membership", price: "₹13,999", original: "₹21,576", valid: "24 Sessions • Valid 60 Days", description: "Designed for accelerated strength, mobility, endurance, and body transformation.", popular: false },
        { name: "Transformation Membership", price: "₹19,999", original: "₹37,758", valid: "42 Sessions • Valid 90 Days", description: "Our best-value package for long-term fitness, posture correction, and transformation results.", popular: false },
      ]
    },
    {
      category: "Mat Pilates",
      plans: [
        { name: "Monthly Package", price: "₹5,499", original: "₹7,000", valid: "12 Sessions • Valid 30 Days", description: "A budget-friendly option for improving strength, flexibility, posture, and core stability.", popular: false },
      ]
    },
    {
      category: "Aerial Yoga",
      plans: [
        { name: "Single Session", price: "₹899", original: null, valid: "1 Session", description: "Experience the freedom and balance of Aerial Yoga.", popular: false },
        { name: "Monthly Package", price: "₹6,999", original: "₹9,999", valid: "8 Sessions • Valid 30 Days", description: "Build flexibility, confidence, balance, and core strength through aerial practice.", popular: false },
      ]
    },
    {
      category: "HIIT Training",
      plans: [
        { name: "Monthly Package", price: "₹4,499", original: "₹5,999", valid: "12 Sessions • Valid 30 Days", description: "High-intensity training focused on fat loss, conditioning, and cardiovascular fitness.", popular: false },
      ]
    },
    {
      category: "Zumba",
      plans: [
        { name: "Monthly Package", price: "₹2,999", original: "₹4,499", valid: "12 Sessions • Valid 30 Days", description: "Fun, energetic dance workouts suitable for all fitness levels.", popular: false },
      ]
    },
    {
      category: "Wellness Combo",
      plans: [
        { name: "Complete Wellness Package", price: "₹9,999", original: "₹11,999", valid: "7 Pilates + 1 Aerial Yoga + 4 HIIT + 4 Zumba", description: "Experience multiple training styles in one package for a complete wellness journey.", popular: false },
      ]
    },
    {
      category: "Physiotherapy",
      plans: [
        { name: "Assessment & Consultation", price: "₹499", original: null, valid: "One-Time", description: "Comprehensive assessment, posture analysis, pain evaluation, and personalized treatment planning.", popular: false },
        { name: "Treatment Session", price: "₹1,499", original: null, valid: "Per Session", description: "Personalized rehabilitation, recovery, mobility improvement, and pain management sessions.", popular: false },
      ]
    },
    {
      category: "Naturopathy",
      plans: [
        { name: "Initial Consultation", price: "₹999", original: null, valid: "One-Time", description: "Detailed lifestyle assessment with holistic wellness recommendations.", popular: false },
        { name: "Follow-Up Consultation", price: "₹699", original: null, valid: "One-Time", description: "Progress review and ongoing wellness guidance.", popular: false },
      ]
    },
    {
      category: "Diet Consultation",
      plans: [
        { name: "One-Time Consultation", price: "₹999", original: null, valid: "One-Time", description: "Nutrition assessment with personalized dietary recommendations.", popular: false },
        { name: "Personalized Diet Plan", price: "₹1,999", original: null, valid: "Custom Plan", description: "Customized meal planning based on fitness goals, lifestyle, and dietary preferences.", popular: false },
        { name: "Monthly Nutrition Coaching", price: "₹3,999", original: null, valid: "Monthly", description: "Diet plan, weekly follow-ups, accountability, and progress tracking.", popular: false },
      ]
    },
    {
      category: "Personalized Wellness Training",
      plans: [
        { name: "Initial Assessment", price: "₹999", original: null, valid: "One-Time", description: "Comprehensive fitness, mobility, posture, and lifestyle evaluation.", popular: false },
        { name: "Personal Wellness Session", price: "₹1,999", original: null, valid: "Per Session", description: "One-on-one guided session combining movement, mobility, corrective exercise, and wellness coaching.", popular: false },
        { name: "Monthly Wellness Program", price: "₹7,999", original: null, valid: "Monthly", description: "Personalized training, wellness guidance, goal tracking, and regular progress reviews.", popular: false },
      ]
    },
    {
      category: "Cupping Therapy",
      plans: [
        { name: "Dry Cupping Therapy", price: "₹120", original: null, valid: "Per Cup", description: "Traditional dry cupping therapy for muscle recovery, pain relief, improved circulation, and relaxation. Example: 10 Cups – ₹1,200 | 15 Cups – ₹1,800 | 20 Cups – ₹2,400", popular: false },
      ]
    }
  ];

  /*
   * WHATSAPP TEMPLATE GENERATOR
   * This handles the dynamic creation of the message based on the plan selected.
   */
  const handleSelectPlan = (plan, categoryName) => {
    const text = encodeURIComponent(`Hi! I am interested in the ${plan.name} (${categoryName}) at COREVA for ${plan.price}. Could you share more details?`);
    window.open(`https://wa.me/919129661662?text=${text}`, '_blank');
  };

  const handleBookTrial = () => {
    const text = encodeURIComponent("Hi! I would like to book a trial session at COREVA.");
    window.open(`https://wa.me/919129661662?text=${text}`, '_blank');
  };

  return (
    <section id="memberships" className="w-full py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-secondary/40 text-primary text-sm font-medium tracking-wide mb-8">
            GRAND OPENING OFFER — Flat 20% OFF on Memberships
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6">Invest in Your Wellbeing</h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-light">
            Choose a plan that fits your lifestyle. Premium quality, personalized attention, and a serene environment.
          </p>
        </div>

        {/* Dynamic Categories Rendering */}
        <div className="space-y-24">
          {pricingCategories.map((categorySection, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-3xl font-serif text-primary mb-8 border-b border-primary/10 pb-4 inline-block">
                {categorySection.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {categorySection.plans.map((plan, idx) => (
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
                      <h4 className="text-xl font-serif mb-2">{plan.name}</h4>
                      <div className="mb-4">
                        <p className={`text-sm font-medium ${plan.popular ? 'text-primary-foreground/90' : 'text-primary/80'}`}>
                          {plan.valid}
                        </p>
                      </div>
                      
                      <p className={`text-sm font-light mb-6 flex-grow ${plan.popular ? 'text-primary-foreground/70' : 'text-primary/60'}`}>
                        {plan.description}
                      </p>

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
                          onClick={() => handleSelectPlan(plan, categorySection.category)}
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
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button 
            size="lg" 
            onClick={handleBookTrial}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-8 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Book a Trial Session
          </Button>
        </div>
      </div>
    </section>
  );
}
