import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground pt-24 pb-12 px-6 lg:px-12 rounded-t-[3rem] relative mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1 - Visit Us */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <MapPin className="w-5 h-5 opacity-70" /> Visit Us
            </h3>
            <div className="space-y-4 font-light text-primary-foreground/80 leading-relaxed">
              <p>
                Its Easy Tower,<br/>
                Vardhan Khand,<br/>
                Gomti Nagar Extension,<br/>
                Lucknow
              </p>
              <div className="pt-4 border-t border-primary-foreground/10">
                <p className="text-sm opacity-80 uppercase tracking-wider mb-2">Landmarks:</p>
                <p>Near CMS School,<br/>DPS School, and Saryu Apartment</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Studio Timings */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <Clock className="w-5 h-5 opacity-70" /> Studio Timings
            </h3>
            <div className="space-y-8 font-light text-primary-foreground/80">
              <div>
                <p className="text-sm opacity-80 uppercase tracking-wider mb-2">Morning Batches:</p>
                <p className="text-lg">7:00 AM – 1:00 PM</p>
              </div>
              <div>
                <p className="text-sm opacity-80 uppercase tracking-wider mb-2">Evening Batches:</p>
                <p className="text-lg">4:00 PM – 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">
              <Phone className="w-5 h-5 opacity-70" /> Contact
            </h3>
            <div className="space-y-6 font-light text-primary-foreground/80">
              <a href="tel:+919129661662" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-lg">+91 9129661662</span>
              </a>
              <a href="mailto:corevapilatestudio@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-lg break-all">corevapilatestudio@gmail.com</span>
              </a>
              
              <div className="pt-8 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Line */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/10 gap-6">
          <p className="font-serif text-xl md:text-2xl italic tracking-wide">Move Better. Feel Better. Live Better.</p>
          <p className="text-sm font-light opacity-50">&copy; {new Date().getFullYear()} COREVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
