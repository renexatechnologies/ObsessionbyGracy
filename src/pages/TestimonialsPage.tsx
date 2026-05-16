import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  { name: 'Amelia Thornton', location: 'Bangalore', occasion: 'Wedding Cake', rating: 5, text: 'The flavour of their chocolate truffle cake is absolutely divine. We ordered a 3-tier for our wedding and the team handled every detail perfectly — delivered on time, beautifully presented. Guests are still talking about it months later.', highlight: 'Best wedding cake in Bangalore' },
  { name: 'Rajesh Kapoor', location: 'Whitefield', occasion: 'Corporate Gala', rating: 5, text: 'Ordered a massive 15 KG celebration cake for a corporate gala. OG handled the logistics flawlessly. The taste was incredible — every guest asked where it was from. We will absolutely be returning for our next event.', highlight: '15 KG — perfectly delivered' },
  { name: 'Sophie Laurent', location: 'Indiranagar', occasion: "Daughter's Birthday", rating: 5, text: 'Their pistachio rosewater sponge is the best I have ever tasted, anywhere in the world. The texture is like a cloud. For my daughter\'s birthday they created a stunning 4-tier cake. Professional, creative, and genuinely delicious.', highlight: 'World-class pistachio rosewater' },
  { name: 'Marcus Webb', location: 'Koramangala', occasion: 'Annual Company Gala', rating: 5, text: 'We have used OG for three large events now. They consistently deliver massive cakes that taste as good as they look. Their espresso opera cake at our 200-person gala was a showstopper. Reliable, premium, and truly artisanal.', highlight: '3 events — consistent excellence' },
  { name: 'Priya Nair', location: 'HSR Layout', occasion: 'Wedding', rating: 5, text: 'Exceptional quality. The sourdough bread is addictive and their custom wedding cake was a masterpiece — over 20 KG and not a single flaw. The team was calm, professional, and communicated at every step.', highlight: '20 KG wedding masterpiece' },
  { name: "James O'Brien", location: 'Electronic City', occasion: 'Anniversary', rating: 5, text: 'Hands down the best artisanal bakery for large-scale orders. Our anniversary cake was enormous and looked like a work of art. The vanilla bean flavour was subtle, rich, and utterly unforgettable.', highlight: 'Unforgettable vanilla bean' },
  { name: 'Divya Suresh', location: 'Jayanagar', occasion: 'Baby Shower', rating: 5, text: 'I was so nervous ordering from a new bakery for such a special event, but OG completely exceeded every expectation. The cake was not just beautiful — it tasted like a dream. Thank you for making our day so perfect.', highlight: 'Exceeded every expectation' },
  { name: 'Arjun Mehta', location: 'MG Road', occasion: 'Product Launch', rating: 5, text: 'For our luxury brand launch event, we needed something that matched the aesthetic. OG delivered on all fronts — presentation, taste, and service. Our guests were genuinely impressed. Luxury all the way.', highlight: 'Perfect for luxury events' },
  { name: 'Fatima Al-Hassan', location: 'Sarjapur Road', occasion: 'Eid Celebration', rating: 5, text: 'The rosewater and pistachio combination was so authentic and beautifully balanced. It reminded me of the finest patisseries in Paris. OG truly understands how to honour international flavour profiles with precision.', highlight: 'Authentic international flavors' },
];

const quickQuotes = [
  '"Every bite tells a story."',
  '"The most beautiful cake at our wedding."',
  '"Authentic French craftsmanship in Bangalore."',
  '"They made our event unforgettable."',
  '"Worth every rupee — truly luxury."',
  '"Our go-to for every special occasion."',
];

export const TestimonialsPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const heroReveal = useScrollReveal(0.1);
  const gridReveal = useScrollReveal(0.1);
  const [statsValues, setStatsValues] = useState<[number, number, number]>([250, 2.45, 500]);

  useEffect(() => {
    const target = [500, 4.9, 1000];
    const startTime = Date.now();
    const duration = 2000;
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newVals = target.map((t, i) => 0.5 * t + (t * 0.5) * progress);
      setStatsValues([newVals[0], newVals[1], newVals[2]] as [number, number, number]);
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-stone-950">
      <TopNavBar />

      {/* Hero */}
      <section className="relative w-full pt-28 pb-20 md:pt-40 md:pb-28 px-5 bg-[#0c0a09] overflow-hidden">
        <span className="absolute top-16 left-6 text-[120px] md:text-[200px] font-serif text-white/5 leading-none select-none">"</span>
        <span className="absolute bottom-4 right-6 text-[120px] md:text-[200px] font-serif text-white/5 leading-none select-none">"</span>
        <div ref={heroReveal.ref}
          className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-1000 ease-out ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="bg-[#0c0a09] text-[#8C9567] uppercase tracking-[0.3em] text-[11px] md:text-[13px] font-label-md mb-4">Client Stories</p>
          <h1 className="text-white font-headline-xl text-[36px] md:text-[58px] leading-tight mb-5">
            Words from Our<br className="hidden md:block" /> Gourmands
          </h1>
          <p className="text-white/70 font-body-md text-[14px] md:text-[16px] leading-relaxed max-w-lg mx-auto">
            Every review is a story of a moment made more memorable — a wedding, a gala, a milestone.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#8C9567] py-4 overflow-hidden border-y border-white/10">
        <div className="flex animate-[marquee_30s_linear_infinite] w-max gap-10">
          {[...quickQuotes, ...quickQuotes].map((q, i) => (
            <span key={i} className="font-serif italic text-white/90 text-[14px] whitespace-nowrap px-4">{q}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="bg-white dark:bg-stone-900 py-10 px-5 border-b border-stone-100 dark:border-stone-800">
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: `${Math.round(statsValues[0])}+`, label: 'Happy Clients' },
            { value: `${statsValues[1].toFixed(1)}★`, label: 'Average Rating' },
            { value: `${Math.round(statsValues[2])}+`, label: 'Events Catered' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-headline-lg text-[28px] md:text-[40px] text-[#8C9567]">{s.value}</span>
              <span className="text-stone-500 dark:text-stone-400 font-label-md text-[11px] md:text-[13px] uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-[#FAF7F2] dark:bg-stone-950">
        <div ref={gridReveal.ref}
          className={`max-w-[1200px] mx-auto transition-all duration-1000 ease-out ${gridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="bg-white dark:bg-stone-800 rounded-2xl p-6 md:p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-pointer border border-stone-100 dark:border-stone-700 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8C9567] flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0">{t.name[0]}</div>
                    <div>
                      <p className="font-label-md text-[13px] font-bold text-stone-900 dark:text-stone-100">{t.name}</p>
                      <p className="text-[11px] text-stone-400 dark:text-stone-500">{t.location}</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider bg-[#8C9567]/10 text-[#8C9567] px-2.5 py-1 rounded-full whitespace-nowrap">{t.occasion}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => <span key={s} className="text-amber-400 text-[16px]">★</span>)}
                </div>
                <p className="font-serif italic text-[#8C9567] text-[13px] border-l-2 border-[#8C9567] pl-3">"{t.highlight}"</p>
                <p className={`text-stone-600 dark:text-stone-400 text-[13px] md:text-[14px] leading-relaxed ${activeIndex === i ? '' : 'line-clamp-3'}`}>{t.text}</p>
                <button className="text-[#8C9567] text-[11px] uppercase tracking-wider self-start hover:underline">
                  {activeIndex === i ? 'Show less ↑' : 'Read more ↓'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-5 bg-[#8C9567] text-center">
        <p className="text-white/70 uppercase tracking-[0.3em] text-[11px] md:text-[13px] mb-3">Join Our Story</p>
        <h2 className="font-headline-lg text-[26px] md:text-[40px] text-white mb-5">Ready to Be Our Next Happy Customer?</h2>
        <Link to="/contact" className="inline-block bg-white text-[#8C9567] rounded-full px-8 py-3.5 font-button text-[13px] md:text-[15px] hover:bg-stone-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5">
          START YOUR INQUIRY
        </Link>
      </section>

      <Footer />
    </div>
  );
};
