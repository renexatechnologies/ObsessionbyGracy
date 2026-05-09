import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { valueProps, signatureProduct } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface HomePageDesktopProps {}

const googleReviews = [
  { name: "Amelia Thornton", text: "The flavour of their chocolate truffle cake is absolutely divine. We ordered a 3-tier for our wedding and the team handled every detail perfectly — delivered on time, beautifully presented." },
  { name: "Rajesh Kapoor", text: "Ordered a massive 15 KG celebration cake for a corporate gala. Gracy's handled the logistics flawlessly. The taste was incredible — every guest asked where it was from. Highly recommend!" },
  { name: "Sophie Laurent", text: "Their pistachio rosewater sponge is the best I've ever tasted, anywhere. The texture is like a cloud. For my daughter's birthday they made a stunning 4-tier cake. Professional and delicious." },
  { name: "Marcus Webb", text: "We've used Gracy's for three large events now. They consistently deliver massive cakes that taste as good as they look. Their espresso opera cake at our 200-person gala was a showstopper." },
  { name: "Priya Nair", text: "Exceptional quality. The sourdough bread is addictive and their custom wedding cake was a masterpiece — over 20 KG and not a single flaw. The team was calm and professional throughout." },
  { name: "James O'Brien", text: "Hands down the best bakery for large-scale orders. Our anniversary cake was enormous and looked like a work of art. The vanilla bean flavour was subtle, rich, and unforgettable." },
];

export const HomePageDesktop: React.FC<HomePageDesktopProps> = () => {
  const valuePropsReveal = useScrollReveal(0.1);
  const featuredReveal = useScrollReveal(0.15);

  return (
    <div className="text-on-background min-h-screen flex flex-col bg-[#8C9567] dark:bg-stone-950">
      <TopNavBar />

      {/* Hero Section — full-bleed with image */}
      <section className="relative w-full h-[100vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            alt="Artisanal bread and pastries in warm bakery lighting"
            className="w-full h-full object-cover"
            src="/hero_bakery.png"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-5 md:px-6 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_both]">
          <p className="font-label-md text-label-md text-white/70 uppercase tracking-[0.25em] md:tracking-[0.3em] mb-3 md:mb-4 text-[11px] md:text-[14px]">
            Est. 1924 — Heritage Bakery
          </p>
          <h1 className="font-headline-xl text-[32px] md:text-[64px] leading-[1.1] md:leading-[1.05] text-white mb-5 md:mb-6 drop-shadow-lg">
            Welcome to <br className="hidden md:block"/>Gracy's Kitchen
          </h1>
          <p className="font-body-lg text-[14px] md:text-body-lg max-w-xl mx-auto mb-8 md:mb-10 text-white/85 leading-relaxed">
            A heritage luxury bakery blending traditional craftsmanship with a high-end editorial aesthetic. Discover artisanal creations born from a century of passion.
          </p>
          <Link
            to="/catalog"
            className="inline-block bg-white text-[#30111C] rounded-full px-8 md:px-10 py-3.5 md:py-4 font-button text-[13px] md:text-[15px] hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            EXPLORE COLLECTION
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <span className="material-symbols-outlined text-white/50 text-2xl md:text-3xl">expand_more</span>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="pt-16 md:pt-28 pb-8 md:pb-14 px-5 md:px-gutter bg-[#8C9567] dark:bg-stone-900">
        <div
          ref={valuePropsReveal.ref}
          className={`max-w-container-max mx-auto transition-all duration-1000 ease-out ${
            valuePropsReveal.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-center font-label-md text-label-md text-white/70 uppercase tracking-[0.25em] mb-3 text-[11px] md:text-[14px]">Why Gracy's</p>
          <h2 className="text-center font-headline-md text-[20px] md:text-headline-md text-white mb-10 md:mb-16">Crafted with Purpose</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-[#FAF7F2] dark:bg-stone-800 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 md:mb-4 ring-2 ring-[#8C9567]/20 group-hover:ring-[#8C9567]/40 transition-all duration-500">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="font-label-md text-[11px] md:text-label-md text-[#3a3a2e] dark:text-stone-200 leading-snug">{prop.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Marquee */}
      <section className="bg-[#8C9567] dark:bg-stone-900 py-6 md:py-8 overflow-hidden border-y border-white/10">
        <div className="flex animate-[marquee_35s_linear_infinite] w-max gap-4 md:gap-6">
          {[...googleReviews, ...googleReviews].map((review, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 md:p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold font-headline-md text-[14px] md:text-[16px]">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white font-label-md text-[12px] md:text-[13px] font-bold">{review.name}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1,2,3,4].map(s => <span key={s} className="text-amber-400 text-[12px] md:text-[14px]">★</span>)}
                    <span className="text-amber-400 text-[12px] md:text-[14px]">★</span>
                    <span className="text-white/50 text-[10px] md:text-[11px] ml-1.5">4.5</span>
                  </div>
                </div>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 ml-auto opacity-70" />
              </div>
              <p className="text-white/85 text-[12px] md:text-[13px] leading-relaxed font-body-md">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="pt-8 md:pt-14 pb-16 md:pb-28 px-5 md:px-gutter bg-[#8C9567] dark:bg-stone-900">
        <div
          ref={featuredReveal.ref}
          className={`max-w-container-max mx-auto transition-all duration-1000 ease-out ${
            featuredReveal.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            <div className="md:col-span-7 h-64 md:h-[500px] relative">
              <img
                alt="Artisanal Bread"
                className="absolute inset-0 w-full h-full object-cover"
                src={signatureProduct.image}
              />
            </div>
            <div className="md:col-span-5 bg-[#FAF7F2] dark:bg-stone-800 p-6 md:p-12 flex flex-col justify-center">
              <span className="bg-[#8C9567] text-white font-label-md text-[11px] px-4 py-1.5 rounded-full w-max mb-4 md:mb-6 uppercase tracking-widest">
                Signature
              </span>
              <h2 className="font-headline-lg text-[24px] md:text-headline-lg text-[#30111C] dark:text-stone-100 mb-3 md:mb-4">
                {signatureProduct.title}
              </h2>
              <p className="font-body-md text-[14px] md:text-body-md text-stone-600 dark:text-stone-400 mb-6 md:mb-8 leading-relaxed">
                {signatureProduct.description}
              </p>
              <Link
                to="/story"
                className="font-button text-[13px] md:text-[14px] text-[#8C9567] border-2 border-[#8C9567] rounded-full px-6 md:px-8 py-3 w-max hover:bg-[#8C9567] hover:text-white transition-all duration-300"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
