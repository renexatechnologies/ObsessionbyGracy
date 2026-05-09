import React from 'react';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';

export interface BespokeInquiryDesktopProps {}

export const BespokeInquiryDesktop: React.FC<BespokeInquiryDesktopProps> = () => {
  return (
    <div className="bg-[#8C9567] text-[#fff7f9] antialiased min-h-screen flex flex-col pt-24 selection:bg-primary-container selection:text-on-primary">
      <TopNavBar />

      <main className="flex-grow max-w-[1200px] w-full mx-auto px-8 py-stack-lg flex flex-col lg:flex-row gap-gutter mt-8">
        {/* Left Column: Image and Location */}
        <section className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-surface-container-low shadow-lg">
            <img 
              alt="A baker standing next to a massive, beautifully decorated, human-sized artisanal cake in a bright heritage bakery." 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4tjIDBpG6L8q6sqJZYOqKMnwffIycK_7Ex497YNq7c2ZzTYK9tcJ8utzjaTBjQ6X5-wU5Z5WVol6INKP6TdDSolA_ub7VLSYioUrfJ8S1qLvD2lYOrbtqrHpxCAUIwGhK7dAyyH3H8MwKgfUxTlVm6Q8KjzhM-5h5aOZ4YTacq18FNYFGAt4cemnPHEJuLkhyAx7vfDw5HbaJC3p4SNKE1qbDyk-je5uOohX_CvYP9HSK34tJGmH1wmma2_7AgRnTWR0ISjeoNmAi" 
            />
          </div>
          <div className="flex flex-col gap-4 p-6 bg-stone-50/10 rounded-2xl border border-stone-100/20 backdrop-blur-sm">
            <div className="w-full h-32 bg-stone-300 rounded-xl flex items-center justify-center overflow-hidden relative">
              <img 
                alt="Map location" 
                className="w-full h-full object-cover opacity-70 grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClYyJ4TchNLyB8n7zKA3f0m9PKaZsJUmfYkbPmdBajdtTLWIX7zkXbl79Yf0HYbFMl4U8zc1aQWExtIhKyedekmv02tnqmnTxLM0VLj6YXaesnjJA54siuKLcHj_gyD7DKCHfoOdPJPHv_hXSLN_Jk-PeavnAPcIoLxHKZXB2hCyTQp0OuJ9qww9GAr_w7cAKFjV6mQAVur3MsCI5RCLTZlRdqwdevT-Q_FUBvLws3-zYzMSR8JEMt5ZMEO_FGveCkyOfGlvvGOYPi" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-stone-900 drop-shadow-md">location_on</span>
              </div>
            </div>
            <div className="text-stone-50 font-body-md text-body-md">
              <p className="font-bold text-lg mb-1">Gracy's Bakery Flagship</p>
              <p>124 Heritage Lane</p>
              <p>Bakery District, NY 10001</p>
            </div>
          </div>
        </section>

        {/* Right Column: Inquiry Form */}
        <section className="flex flex-col w-full lg:w-1/2">
          <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col gap-6 h-full border border-outline-variant/20 text-on-surface">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Book Your Masterpiece</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Inquire about our custom heritage cakes for your special event.</p>
            </div>

            <form className="flex flex-col gap-5 flex-grow">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="event-date">Event Date</label>
                <input 
                  id="event-date" 
                  type="date" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="flavors">Flavors of Choice</label>
                <select 
                  id="flavors" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                >
                  <option value="">Select a signature flavor...</option>
                  <option value="truffle">Chocolate Truffle Heritage</option>
                  <option value="vanilla">Vanilla Bean Celebration</option>
                  <option value="espresso">Classic Espresso Opera</option>
                  <option value="pistachio">Pistachio Rosewater Sponge</option>
                  <option value="custom">Custom Blend Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="event-type">Event For</label>
                <select 
                  id="event-type" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                >
                  <option value="">Select event type...</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Milestone Birthday</option>
                  <option value="corporate">Corporate Gala</option>
                  <option value="other">Other Celebration</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="quantity">Estimated Servings (Quantity in KG's)</label>
                <input 
                  id="quantity" 
                  type="number" 
                  min="10" 
                  placeholder="e.g. 150" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
                />
              </div>

              <div className="flex flex-col gap-2 flex-grow">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="message">Additional Information</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Tell us about your vision, dietary requirements, or specific requests..." 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none flex-grow transition-shadow"
                ></textarea>
              </div>

              <button className="bg-primary text-on-primary rounded-full px-6 py-4 font-button text-[15px] w-full mt-2 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                SUBMIT INQUIRY <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* The background color of the footer in Bespoke Inquiry is not custom, but standard, let's just use Footer component */}
      <Footer />
    </div>
  );
};
