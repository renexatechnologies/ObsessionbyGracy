import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { storyData } from '../data/mockData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface OurStoryDesktopProps {}

export const OurStoryDesktop: React.FC<OurStoryDesktopProps> = () => {
  const heritageReveal = useScrollReveal(0.1);
  const methodsReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  return (
    <div className="min-h-screen flex flex-col pt-20 md:pt-24 font-body-md antialiased">
      <TopNavBar />

      {/* Block 1: Heritage — Sage Green Background */}
      <section className="bg-[#8C9567] dark:bg-stone-900">
        <div
          ref={heritageReveal.ref}
          className={`max-w-[1200px] mx-auto px-5 md:px-16 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ease-out ${
            heritageReveal.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <h1 className="font-headline-xl text-[28px] md:text-headline-xl text-white">
              {storyData.heritage.title}
            </h1>
            <p className="font-body-lg text-[14px] md:text-body-lg text-white/90 max-w-lg">
              {storyData.heritage.description}
            </p>
            <div className="pt-4 border-t border-white/30 max-w-sm">
              <p className="font-headline-md text-[18px] md:text-headline-md text-white italic">
                {storyData.heritage.quote}
              </p>
              <p className="font-label-md text-label-md text-white/80 mt-2 uppercase tracking-widest">
                {storyData.heritage.author}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              alt="Gracy's traditional sourdough loaf"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-DEFAULT border border-white/10"
              src={storyData.heritage.image}
            />
          </div>
        </div>
      </section>

      {/* Block 2: Methods — Warm Cream Background */}
      <section className="bg-[#FAF7F2] dark:bg-stone-800">
        <div
          ref={methodsReveal.ref}
          className={`max-w-[1200px] mx-auto px-5 md:px-16 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ease-out ${
            methodsReveal.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div>
            <img
              alt="Premium baking ingredients"
              className="w-full h-[280px] md:h-[500px] object-cover rounded-t-DEFAULT rounded-b-[3rem] md:rounded-b-[4rem] border border-stone-200 dark:border-stone-700"
              src={storyData.methods.image}
            />
          </div>
          <div className="space-y-6 md:space-y-8 pl-0 lg:pl-8">
            <h2 className="font-headline-lg text-[24px] md:text-headline-lg text-[#30111C] dark:text-stone-100">
              {storyData.methods.title}
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="font-body-md text-[14px] md:text-body-md text-stone-600 dark:text-stone-400">
                {storyData.methods.description1}
              </p>
              <p className="font-body-md text-[14px] md:text-body-md text-stone-600 dark:text-stone-400">
                {storyData.methods.description2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Closing CTA — Dark Section */}
      <section className="bg-[#2C2C1E] dark:bg-stone-950">
        <div
          ref={ctaReveal.ref}
          className={`max-w-[800px] mx-auto px-5 md:px-16 py-16 md:py-28 text-center transition-all duration-1000 ease-out ${
            ctaReveal.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="font-label-md text-[11px] md:text-label-md text-[#8C9567] uppercase tracking-[0.25em] md:tracking-[0.3em] mb-3 md:mb-4">The Heritage Collection</p>
          <h2 className="font-headline-xl text-[28px] md:text-[48px] text-white leading-tight mb-5 md:mb-6">
            Ready to taste<br/>a century of craft?
          </h2>
          <p className="font-body-lg text-[14px] md:text-body-lg text-white/60 max-w-md mx-auto mb-8 md:mb-10">
            Explore our curated selection of artisanal baked goods, each one carrying a legacy of flavour and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center gap-2 bg-[#8C9567] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-button text-[13px] md:text-[15px] hover:bg-[#7a8359] transition-all duration-300 shadow-lg"
            >
              VIEW COLLECTION
              <span className="material-symbols-outlined text-[16px] md:text-[18px]">arrow_forward</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-button text-[13px] md:text-[15px] hover:bg-white/10 transition-all duration-300"
            >
              BESPOKE INQUIRY
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
