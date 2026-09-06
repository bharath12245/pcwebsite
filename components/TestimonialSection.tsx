import React from 'react';
import Image from 'next/image';
import testimonials from '@/content/testimonials.json';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  // Split testimonials into two groups for two alternating direction rows
  const midPoint = Math.ceil(testimonials.length / 2);
  const topRowLine = testimonials.slice(0, midPoint);
  const bottomRowLine = testimonials.slice(midPoint);

  return (
    <section id="testimonials" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-magenta/5 rounded-full blur-3xl rounded-tl-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-72 h-72 bg-magenta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-borderColor text-xs font-bold uppercase tracking-[0.2em] text-magenta shadow-sm mb-4">
          <Quote className="w-4 h-4" />
          <span>Wall of Love</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
          Real Journeys, Real Smiles
        </h2>
        <p className="text-copy-muted max-w-2xl mx-auto text-base sm:text-lg">
          Join thousands of happy travellers who explored India with us. Here's a glimpse into the joyful memories we've helped create.
        </p>
      </div>

      <div className="relative z-10 space-y-6 lg:space-y-8 flex flex-col items-center">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            display: flex;
            width: max-content;
            animation: scroll-left 50s linear infinite;
          }
          .animate-scroll-right {
            display: flex;
            width: max-content;
            animation: scroll-right 45s linear infinite;
          }
          .marquee-container:hover .animate-scroll-left,
          .marquee-container:hover .animate-scroll-right {
            animation-play-state: paused;
          }
        `}</style>
        
        {/* Top Row Marquee */}
        <div className="w-full overflow-hidden marquee-container">
          <div className="animate-scroll-left gap-4 lg:gap-6 px-4">
            {[...topRowLine, ...topRowLine].map((item, idx) => (
              <MediaCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Row Marquee */}
        <div className="w-full overflow-hidden marquee-container">
          <div className="animate-scroll-right gap-4 lg:gap-6 px-4">
            {[...bottomRowLine, ...bottomRowLine].map((item, idx) => (
              <MediaCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaCard({ item }: { item: any }) {
  return (
    <div className="relative shrink-0 w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] rounded-[24px] overflow-hidden shadow-card border-4 border-white group">
      {item.type === 'video' ? (
        <video
          src={item.url}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          src={item.url}
          alt={`Testimonial ${item.id}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 260px, 300px"
        />
      )}
      
      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
