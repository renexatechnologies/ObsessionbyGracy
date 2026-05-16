import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: 'cake',
    title: 'Custom Celebration Cakes',
    description:
      'From intimate birthday tiers to grand 20 KG wedding masterpieces — every cake is sculpted by hand, flavored from authentic French recipes, and delivered with precision.',
    tags: ['Weddings', 'Birthdays', 'Anniversaries', 'Corporate'],
  },
  {
    icon: 'event',
    title: 'Event & Bulk Orders',
    description:
      'Planning a gala, product launch, or festive gathering? We handle large-scale orders without compromising on craftsmanship. Minimum 5 KG. Delivered fresh.',
    tags: ['Corporate Galas', 'Festivals', 'Receptions', 'Catering'],
  },
  {
    icon: 'storefront',
    title: 'In-Store Bespoke Consultation',
    description:
      'Visit our flagship in Hebbagodi for a one-on-one tasting session. Our pastry chef will guide you through flavor pairings, design aesthetics, and portion planning.',
    tags: ['By Appointment', 'Tasting Session', 'Design Preview'],
  },
  {
    icon: 'local_shipping',
    title: 'Delivery & Pickup',
    description:
      'White-glove delivery available within Bangalore. Orders are packaged in signature OG boxes with thermal inserts to maintain freshness and presentation integrity.',
    tags: ['Bangalore Delivery', 'Store Pickup', 'Safe Packaging'],
  },
  {
    icon: 'school',
    title: 'Artisan Baking Workshops',
    description:
      'Learn the craft behind our creations. Our intimate workshops (max 8 participants) cover French patisserie fundamentals — croissants, choux, and more.',
    tags: ['Weekend Batches', 'Beginner Friendly', 'Certificate'],
  },
  {
    icon: 'favorite',
    title: 'Subscription & Gift Boxes',
    description:
      'Curated monthly pastry boxes featuring seasonal specialties, delivered to your door. Perfect as a corporate gift or personal indulgence.',
    tags: ['Monthly', 'Gift Wrapping', 'Seasonal Flavors'],
  },
];

const process = [
  { step: '01', title: 'Inquire', desc: 'Fill our contact form or WhatsApp us with your event details and requirements.' },
  { step: '02', title: 'Consult', desc: 'We schedule a brief call or in-store session to discuss flavors, design, and timeline.' },
  { step: '03', title: 'Craft', desc: 'Our artisans begin your creation using authentic recipes and premium imported ingredients.' },
  { step: '04', title: 'Deliver', desc: 'Your order is delivered with care — fresh, on time, and exactly as envisioned.' },
];

export const ServicesPage: React.FC = () => {
  const heroReveal = useScrollReveal(0.1);
  const cardsReveal = useScrollReveal(0.1);
  const processReveal = useScrollReveal(0.1);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <TopNavBar />

      {/* Hero */}
      <section className="relative w-full pt-28 pb-20 md:pt-40 md:pb-28 px-5 bg-[#8C9567] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div ref={heroReveal.ref}
          className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/70 uppercase tracking-[0.3em] text-[11px] md:text-[13px] font-label-md mb-4">
            What We Offer
          </p>
          <h1 className="text-white font-headline-xl text-[36px] md:text-[60px] leading-tight mb-5">
            Crafted for Every<br className="hidden md:block" /> Occasion
          </h1>
          <p className="text-white/80 font-body-md text-[15px] md:text-[17px] leading-relaxed max-w-xl mx-auto mb-8">
            From bespoke celebration cakes to artisan workshops — OG Obsession by Grace delivers an uncompromising sensory experience, every time.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#8C9567] rounded-full px-8 py-3.5 font-button text-[13px] md:text-[15px] hover:bg-stone-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-[#FAF7F2] dark:bg-stone-900">
        <div ref={cardsReveal.ref}
          className={`max-w-[1200px] mx-auto transition-all duration-1000 ease-out ${cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#8C9567] uppercase tracking-[0.3em] text-[11px] md:text-[13px] mb-3">Our Specialities</p>
            <h2 className="font-headline-lg text-[28px] md:text-[40px] text-stone-900 dark:text-stone-100">Services We Provide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-stone-800 rounded-2xl p-7 md:p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col gap-4 border border-stone-100 dark:border-stone-700"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#8C9567]/10 flex items-center justify-center group-hover:bg-[#8C9567] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px] text-[#8C9567] group-hover:text-white transition-colors duration-300">{svc.icon}</span>
                </div>
                <h3 className="font-headline-md text-[18px] md:text-[20px] text-stone-900 dark:text-stone-100">{svc.title}</h3>
                <p className="font-body-md text-[14px] text-stone-600 dark:text-stone-400 leading-relaxed flex-grow">{svc.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-[11px] uppercase tracking-wider font-label-md bg-[#8C9567]/10 text-[#8C9567] dark:bg-[#8C9567]/20 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-5 bg-[#8C9567] dark:bg-stone-800">
        <div ref={processReveal.ref}
          className={`max-w-[1200px] mx-auto transition-all duration-1000 ease-out ${processReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-white/60 uppercase tracking-[0.3em] text-[11px] md:text-[13px] mb-3">Simple Process</p>
            <h2 className="font-headline-lg text-[28px] md:text-[40px] text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {process.map((p, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <span className="font-headline-lg text-white text-[22px]">{p.step}</span>
                </div>
                <h3 className="text-white font-headline-md text-[17px]">{p.title}</h3>
                <p className="text-white/70 text-[13px] font-body-md leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-14 md:py-20 px-5 bg-[#FAF7F2] dark:bg-stone-950 text-center">
        <p className="text-[#8C9567] uppercase tracking-[0.3em] text-[11px] md:text-[13px] mb-3">Ready to Begin?</p>
        <h2 className="font-headline-lg text-[26px] md:text-[38px] text-stone-900 dark:text-stone-100 mb-5">
          Let's Create Something Extraordinary
        </h2>
        <p className="text-stone-500 dark:text-stone-400 font-body-md text-[14px] md:text-[16px] max-w-md mx-auto mb-8">
          Reach out via our contact form or WhatsApp. We'd love to hear about your vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="bg-[#8C9567] text-white rounded-full px-8 py-3.5 font-button text-[13px] md:text-[15px] hover:bg-[#7a8358] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            MAKE AN INQUIRY
          </Link>
          <a
            href="https://wa.me/918919181618"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#8C9567] text-[#8C9567] rounded-full px-8 py-3.5 font-button text-[13px] md:text-[15px] hover:bg-[#8C9567] hover:text-white transition-all duration-300"
          >
            WHATSAPP US
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
