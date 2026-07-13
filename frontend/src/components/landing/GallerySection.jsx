import React from 'react';

export default function GallerySection() {
  // Using high-quality stock images as aesthetic placeholders until the actual studio is photographed
  const placeholderImages = [
      "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg"
  ];

  return (
    <section id="gallery" className="w-full py-24 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">The Space</h2>
          <p className="text-primary/60 font-light max-w-xl mx-auto">
            A sanctuary designed for your mind and body. <br className="hidden sm:block"/>
            <span className="text-xs uppercase tracking-widest opacity-60 mt-2 block">(Studio Gallery Placeholders)</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {placeholderImages.map((src, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden rounded-2xl group relative shadow-md hover:shadow-xl transition-all duration-500 ${
                idx === 0 || idx === 3 ? 'md:col-span-1 aspect-square lg:aspect-[3/4]' : 'md:col-span-1 aspect-[4/3] lg:aspect-[3/4]'
              }`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
              </div>
              <img 
                src={src} 
                alt="Studio space placeholder" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
