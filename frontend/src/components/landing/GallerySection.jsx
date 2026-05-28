import React from 'react';

export default function GallerySection() {
  const images = [
    "https://images.pexels.com/photos/36833354/pexels-photo-36833354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/37573625/pexels-photo-37573625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.unsplash.com/photo-1747238415033-b74eec07eb59?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxyZWZvcm1lciUyMHBpbGF0ZXN8ZW58MHx8fHwxNzc5OTkyMDc3fDA&ixlib=rb-4.1.0&q=85",
    "https://images.pexels.com/photos/36833355/pexels-photo-36833355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">The Space</h2>
          <p className="text-primary/60 font-light">A sanctuary designed for your mind and body.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden rounded-2xl group relative shadow-md hover:shadow-xl transition-all duration-500 ${
                idx === 0 || idx === 3 ? 'md:col-span-1 aspect-square lg:aspect-[3/4]' : 'md:col-span-1 aspect-[4/3] lg:aspect-[3/4]'
              }`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt="Studio space" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
