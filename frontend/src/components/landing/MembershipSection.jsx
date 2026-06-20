import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ChevronDown, Info } from 'lucide-react';

const pricingCategories = [
  {
    category: "Reformer Pilates",
    hasGroupAndPrivate: true,
    plans: [
      { name: "Single Class", groupPrice: "₹599", privatePrice: "₹1,199", valid: "1 day", description: "1 Session" },
      { name: "Starter Pack", groupPrice: "₹3,299", privatePrice: "₹6,999", valid: "30 days", description: "6 Sessions" },
      { name: "Monthly Membership", groupPrice: "₹6,499", privatePrice: "₹12,999", valid: "30 days", description: "12 Sessions", popular: true },
      { name: "Performance Pack", groupPrice: "₹11,999", privatePrice: "₹22,999", valid: "60 days", description: "24 Sessions" },
      { name: "Transformation", groupPrice: "₹18,999", privatePrice: "₹37,999", valid: "90 days", description: "45 Sessions", bestValue: true },
    ]
  },
  {
    category: "Mat Pilates",
    hasGroupAndPrivate: true,
    plans: [
      { name: "Single Class", groupPrice: "₹499", privatePrice: "₹999", valid: "1 day", description: "1 Session" },
      { name: "Starter Pack", groupPrice: "₹3,199", privatePrice: "₹5,999", valid: "30 days", description: "8 Sessions" },
      { name: "Monthly Pack", groupPrice: "₹4,499", privatePrice: "₹8,499", valid: "30 days", description: "12 Sessions", popular: true },
      { name: "Quarterly Pack", groupPrice: "₹11,999", privatePrice: "₹21,999", valid: "90 days", description: "36 Sessions", bestValue: true },
    ]
  },
  {
    category: "Aerial Yoga",
    hasGroupAndPrivate: true,
    plans: [
      { name: "Single Class", groupPrice: "₹799", privatePrice: "₹1,399", valid: "1 day", description: "1 Session" },
      { name: "Explorer Pack", groupPrice: "₹5,199", privatePrice: "₹8,999", valid: "30 days", description: "8 Sessions" },
      { name: "Monthly Pack", groupPrice: "₹6,999", privatePrice: "₹11,999", valid: "30 days", description: "12 Sessions", popular: true },
    ]
  },
  {
    category: "HIIT Training",
    hasGroupAndPrivate: false,
    plans: [
      { name: "1 Session", price: "₹499", valid: "1 day" },
      { name: "8 Sessions", price: "₹2,999", valid: "30 days" },
      { name: "12 Sessions", price: "₹3,999", valid: "30 days" },
      { name: "24 Sessions", price: "₹6,999", valid: "60 days" },
    ]
  },
  {
    category: "Zumba",
    hasGroupAndPrivate: false,
    plans: [
      { name: "1 Session", price: "₹299", valid: "1 day" },
      { name: "8 Sessions", price: "₹1,799", valid: "30 days" },
      { name: "12 Sessions", price: "₹2,499", valid: "30 days" },
      { name: "24 Sessions", price: "₹3,999", valid: "60 days" },
    ]
  },
  {
    category: "Cupping Therapy",
    hasGroupAndPrivate: false,
    description: "Traditional dry cupping · Recovery & relaxation",
    plans: [
      { name: "Per Cup", price: "₹150", valid: "—" },
      { name: "Standard Session", price: "₹1,299", valid: "Per session", description: "Up to 10 cups" },
      { name: "Full Back Therapy", price: "₹1,799", valid: "Per session", description: "Up to 15 cups" },
      { name: "Sports Recovery Pack", price: "₹7,999", valid: "Valid 60 days", description: "5 full back sessions (₹1,599/session)", popular: true },
    ]
  },
  {
    category: "Signature Packages",
    hasGroupAndPrivate: false,
    description: "Curated bundles · Best experience, best value",
    plans: [
      { name: "TRIM & TRIUMPH", price: "₹14,999", valid: "Valid 45 days", description: "Sculpt, sweat and dance — the ultimate body transformation combo\n• 12 Reformer Pilates (group)\n• 8 HIIT Sessions\n• 4 Zumba Sessions", tag: "STUDIO FAVOURITE", popular: true },
      { name: "REFORM & FLOW", price: "₹13,999", valid: "Valid 45 days", description: "Blend Reformer power with Mat grace for total body balance\n• 12 Reformer Pilates (group)\n• 8 Mat Pilates Sessions\n• 4 HIIT Sessions", tag: "NEW" },
      { name: "MOVE & GROOVE", price: "₹9,499", valid: "Valid 45 days", description: "Fun, energetic and effective — for those who hate boring workouts\n• 8 Mat Pilates Sessions\n• 12 Zumba Sessions\n• 4 HIIT Sessions", tag: "BEST FOR BEGINNERS" },
      { name: "RISE & REFORM", price: "₹31,999", valid: "Valid 90 days", description: "Our complete 3-month programme for serious transformation\n• 45 Reformer Pilates (group)\n• 12 HIIT Sessions\n• 8 Mat Pilates Sessions\n• 8 Zumba Sessions", tag: "BEST VALUE", bestValue: true },
    ]
  },
  {
    category: "Physiotherapy",
    hasGroupAndPrivate: false,
    plans: [
      { name: "Assessment & Consultation", price: "Coming Soon", valid: "One-Time", description: "Comprehensive assessment, posture analysis, pain evaluation, and personalized treatment planning." },
      { name: "Treatment Session", price: "Coming Soon", valid: "Per Session", description: "Personalized rehabilitation, recovery, mobility improvement, and pain management sessions." },
    ]
  },
  {
    category: "Naturopathy",
    hasGroupAndPrivate: false,
    plans: [
      { name: "Initial Consultation", price: "Coming Soon", valid: "One-Time", description: "Detailed lifestyle assessment with holistic wellness recommendations." },
      { name: "Follow-Up Consultation", price: "Coming Soon", valid: "One-Time", description: "Progress review and ongoing wellness guidance." },
    ]
  },
  {
    category: "Diet Consultation",
    hasGroupAndPrivate: false,
    plans: [
      { name: "One-Time Consultation", price: "₹999", valid: "One-Time", description: "Nutrition assessment with personalized dietary recommendations." },
      { name: "Personalized Diet Plan", price: "₹1,999", valid: "Custom Plan", description: "Customized meal planning based on fitness goals, lifestyle, and dietary preferences." },
      { name: "Monthly Nutrition Coaching", price: "₹3,999", valid: "Monthly", description: "Diet plan, weekly follow-ups, accountability, and progress tracking." },
    ]
  }
];

const CategoryAccordion = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectPlan = (plan, type = "") => {
    let priceText = plan.price;
    if (section.hasGroupAndPrivate) {
      priceText = type === "Private" ? plan.privatePrice : plan.groupPrice;
    }
    const planName = type ? `${plan.name} (${type})` : plan.name;
    const text = encodeURIComponent(`Hi! I am interested in the ${planName} from ${section.category} at COREVA for ${priceText}. Could you share more details?`);
    window.open(`https://wa.me/919129661662?text=${text}`, '_blank');
  };

  return (
    <div className="mb-6 border border-primary/10 rounded-3xl shadow-sm bg-white overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-6 bg-white hover:bg-secondary/10 transition-colors"
      >
        <div className="text-left">
          <h3 className="text-2xl font-serif text-primary">{section.category}</h3>
          {section.description && (
            <p className="text-sm font-light text-primary/60 mt-1">{section.description}</p>
          )}
        </div>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-secondary/30' : 'bg-transparent'}`}>
          <ChevronDown className={`w-6 h-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-primary/5">
            {section.plans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative overflow-hidden border-none rounded-2xl flex flex-col ${
                  plan.popular || plan.bestValue ? 'bg-primary text-primary-foreground shadow-xl scale-[1.02] z-10' : 'bg-background shadow-md text-primary'
                }`}
              >
                {(plan.popular || plan.bestValue || plan.tag) && (
                  <div className={`absolute top-0 left-0 w-full text-xs font-semibold uppercase tracking-widest text-center py-1.5 ${
                    plan.bestValue ? 'bg-[#cba876] text-black' : 'bg-accent text-accent-foreground'
                  }`}>
                    {plan.tag || (plan.bestValue ? 'Best Value' : 'Most Popular')}
                  </div>
                )}
                <CardContent className={`p-6 flex flex-col flex-grow ${(plan.popular || plan.bestValue || plan.tag) ? 'pt-10' : ''}`}>
                  <h4 className="text-lg font-serif mb-1">{plan.name}</h4>
                  <div className="mb-4">
                    <p className={`text-sm font-medium ${plan.popular || plan.bestValue ? 'text-primary-foreground/90' : 'text-primary/80'}`}>
                      {plan.valid}
                    </p>
                  </div>
                  
                  {plan.description && (
                    <p className={`text-sm font-light mb-6 flex-grow whitespace-pre-wrap ${plan.popular || plan.bestValue ? 'text-primary-foreground/70' : 'text-primary/60'}`}>
                      {plan.description}
                    </p>
                  )}

                  <div className="mt-auto pt-4">
                    {section.hasGroupAndPrivate ? (
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center bg-black/5 rounded-xl p-3">
                          <div className="text-center w-1/2 border-r border-current/10">
                            <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Group</p>
                            <div className="text-xl font-medium">{plan.groupPrice}</div>
                          </div>
                          <div className="text-center w-1/2">
                            <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Private</p>
                            <div className="text-xl font-medium">{plan.privatePrice}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => handleSelectPlan(plan, 'Group')}
                            className={`w-1/2 text-xs rounded-full py-5 ${
                              plan.popular || plan.bestValue 
                                ? 'bg-white text-primary hover:bg-white/90' 
                                : 'bg-primary text-primary-foreground hover:bg-primary/90'
                            }`}
                          >
                            Group
                          </Button>
                          <Button 
                            onClick={() => handleSelectPlan(plan, 'Private')}
                            variant={plan.popular || plan.bestValue ? 'outline' : 'default'}
                            className={`w-1/2 text-xs rounded-full py-5 ${
                              plan.popular || plan.bestValue 
                                ? 'border-white/50 text-white hover:bg-white/10 hover:text-white' 
                                : 'bg-white text-primary border border-primary/20 hover:bg-black/5'
                            }`}
                          >
                            Private
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-3xl font-light mb-6">
                          {plan.price}
                        </div>
                        <Button 
                          onClick={() => handleSelectPlan(plan)}
                          disabled={plan.price === "Coming Soon"}
                          className={`w-full rounded-full py-6 transition-all duration-300 ${
                            plan.price === "Coming Soon" 
                              ? 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-600'
                              : (plan.popular || plan.bestValue 
                                ? 'bg-white text-primary hover:bg-white/90' 
                                : 'bg-primary text-primary-foreground hover:bg-primary/90')
                          }`}
                        >
                          {plan.price === "Coming Soon" ? 'Coming Soon' : 'Select Plan'}
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MembershipSection() {
  const handleBookTrial = () => {
    const text = encodeURIComponent("Hi! I would like to book a trial session at COREVA.");
    window.open(`https://wa.me/919129661662?text=${text}`, '_blank');
  };

  return (
    <section id="memberships" className="w-full py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-secondary/40 text-primary text-sm font-medium tracking-wide mb-6">
            COREVA PILATES STUDIO — PRICE LIST
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Invest in Your Wellbeing</h2>
          <p className="text-primary/70 max-w-2xl mx-auto font-light">
            Explore our group and private sessions. Click on a category to view detailed pricing.
          </p>
        </div>

        {/* Dynamic Accordion Rendering */}
        <div className="mb-20">
          {pricingCategories.map((section, idx) => (
            <CategoryAccordion key={idx} section={section} />
          ))}
        </div>
        
        {/* Policies Section */}
        <div className="bg-white/60 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-serif text-primary mb-8 flex items-center gap-3">
            <Info className="w-6 h-6 text-accent" />
            Studio Policies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background p-4 rounded-2xl">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Validity Extension</p>
              <p className="font-medium text-primary">₹999 / Extra Month</p>
            </div>
            <div className="bg-background p-4 rounded-2xl">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Unused Sessions</p>
              <p className="font-medium text-primary">Carry Forward on Renewal</p>
            </div>
            <div className="bg-background p-4 rounded-2xl">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Rescheduling</p>
              <p className="font-medium text-primary">12-Hour Notice Required</p>
            </div>
            <div className="bg-background p-4 rounded-2xl">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-1">No Show</p>
              <p className="font-medium text-primary">Session Deducted</p>
            </div>
            <div className="bg-background p-4 rounded-2xl">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Membership</p>
              <p className="font-medium text-primary">Non-Refundable & Non-Transferable</p>
            </div>
            <div className="bg-background p-4 rounded-2xl">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Advance Booking</p>
              <p className="font-medium text-primary">Required</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
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
