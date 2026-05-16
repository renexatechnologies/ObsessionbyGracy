import React, { useState } from 'react';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';

export interface BespokeInquiryDesktopProps {}

export const BespokeInquiryDesktop: React.FC<BespokeInquiryDesktopProps> = () => {
  const WHATSAPP_NUMBER = '918919181618'; // +91 89191 81618

  const [eventDate, setEventDate] = useState('');
  const [flavor, setFlavor] = useState('');
  const [eventType, setEventType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello OG — Obsession by Grace! I'd like to place a bespoke inquiry:`,
      eventDate   ? `📅 Event Date: ${eventDate}` : '',
      flavor      ? `🎂 Flavor: ${flavor}` : '',
      eventType   ? `🎉 Event Type: ${eventType}` : '',
      quantity    ? `⚖️ Quantity (KG): ${quantity}` : '',
      message     ? `📝 Additional Info: ${message}` : '',
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#8C9567] dark:bg-stone-950 text-[#fff7f9] antialiased min-h-screen flex flex-col pt-20 md:pt-24 selection:bg-primary-container selection:text-on-primary">
      <TopNavBar />

      <main className="flex-grow max-w-[1200px] w-full mx-auto px-4 md:px-8 py-8 md:py-stack-lg flex flex-col lg:flex-row gap-6 md:gap-gutter mt-4 md:mt-8">
        {/* Left Column: Image and Location */}
        <section className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/2">
          <div className="w-full aspect-[3/4] max-h-[400px] md:max-h-none overflow-hidden rounded-2xl bg-surface-container-low shadow-lg">
            <img 
              alt="A baker standing next to a massive, beautifully decorated, human-sized artisanal cake in a bright heritage bakery." 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4tjIDBpG6L8q6sqJZYOqKMnwffIycK_7Ex497YNq7c2ZzTYK9tcJ8utzjaTBjQ6X5-wU5Z5WVol6INKP6TdDSolA_ub7VLSYioUrfJ8S1qLvD2lYOrbtqrHpxCAUIwGhK7dAyyH3H8MwKgfUxTlVm6Q8KjzhM-5h5aOZ4YTacq18FNYFGAt4cemnPHEJuLkhyAx7vfDw5HbaJC3p4SNKE1qbDyk-je5uOohX_CvYP9HSK34tJGmH1wmma2_7AgRnTWR0ISjeoNmAi" 
            />
          </div>
            <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 bg-stone-50/10 rounded-2xl border border-stone-100/20 backdrop-blur-sm">
              <div className="w-full h-24 md:h-32 bg-stone-300 rounded-xl flex items-center justify-center overflow-hidden relative">
                <iframe
                  title="OG Obsession by Grace Location"
                  className="w-full h-full"
                  style={{ border: 0, filter: 'grayscale(60%)' }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=No+182,+3rd+floor,+Shree+Ramnath+Damodar,+13th+cross,+4th+main+road,+Shree+Ananth+Nagar+layout,+Phase+1,+Kammasandra,+Hebbagodi,+Karnataka+560100&output=embed"
                />
              </div>
              <div className="text-stone-50 font-body-md text-[14px] md:text-body-md">
                <p className="font-bold text-base md:text-lg mb-1">OG — Obsession by Grace</p>
                <p>No 182, 3rd Floor, Shree Ramnath Damodar,</p>
                <p>13th Cross, 4th Main Road,</p>
                <p>Shree Ananth Nagar Layout, Phase 1,</p>
                <p>Kammasandra, Hebbagodi,</p>
                <p>Karnataka — 560100</p>
                <p className="mt-2">🕙 Opens at 10:00 AM</p>
                <a
                  href="tel:+918919181618"
                  className="mt-1 flex items-center gap-1 text-stone-100 hover:text-white underline underline-offset-2"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  +91 89191 81618
                </a>
              </div>
            </div>
        </section>

        {/* Right Column: Inquiry Form */}
        <section className="flex flex-col w-full lg:w-1/2">
          <div className="bg-surface-container-lowest dark:bg-stone-800 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl flex flex-col gap-5 md:gap-6 h-full border border-outline-variant/20 dark:border-stone-700 text-on-surface dark:text-stone-200">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-[24px] md:text-headline-lg text-on-surface dark:text-stone-100">Book Your Masterpiece</h2>
              <p className="font-body-md text-[14px] md:text-body-md text-on-surface-variant dark:text-stone-400">Inquire about our custom heritage cakes for your special event.</p>
            </div>

            <form className="flex flex-col gap-4 md:gap-5 flex-grow" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="font-label-md text-label-md text-on-surface dark:text-stone-300" htmlFor="event-date">Event Date</label>
                <input 
                  id="event-date" 
                  type="date" 
                  value={eventDate}
                  onChange={e => setEventDate(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-stone-700 border border-outline-variant dark:border-stone-600 rounded-xl px-4 py-3 font-body-md text-on-surface dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
                />
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="font-label-md text-label-md text-on-surface dark:text-stone-300" htmlFor="flavors">Flavors of Choice</label>
                <select 
                  id="flavors" 
                  value={flavor}
                  onChange={e => setFlavor(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-stone-700 border border-outline-variant dark:border-stone-600 rounded-xl px-4 py-3 font-body-md text-on-surface dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                >
                  <option value="">Select a signature flavor...</option>
                  <option value="truffle">Chocolate Truffle Heritage</option>
                  <option value="vanilla">Vanilla Bean Celebration</option>
                  <option value="espresso">Classic Espresso Opera</option>
                  <option value="pistachio">Pistachio Rosewater Sponge</option>
                  <option value="custom">Custom Blend Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="font-label-md text-label-md text-on-surface dark:text-stone-300" htmlFor="event-type">Event For</label>
                <select 
                  id="event-type" 
                  value={eventType}
                  onChange={e => setEventType(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-stone-700 border border-outline-variant dark:border-stone-600 rounded-xl px-4 py-3 font-body-md text-on-surface dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                >
                  <option value="">Select event type...</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Milestone Birthday</option>
                  <option value="corporate">Corporate Gala</option>
                  <option value="other">Other Celebration</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2">
                <label className="font-label-md text-label-md text-on-surface dark:text-stone-300" htmlFor="quantity">Estimated Servings (Quantity in KG's)</label>
                <input 
                  id="quantity" 
                  type="number" 
                  min="10" 
                  placeholder="e.g. 150" 
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-stone-700 border border-outline-variant dark:border-stone-600 rounded-xl px-4 py-3 font-body-md text-on-surface dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" 
                />
              </div>

              <div className="flex flex-col gap-1.5 md:gap-2 flex-grow">
                <label className="font-label-md text-label-md text-on-surface dark:text-stone-300" htmlFor="message">Additional Information</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Tell us about your vision, dietary requirements, or specific requests..." 
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-surface-container-low dark:bg-stone-700 border border-outline-variant dark:border-stone-600 rounded-xl px-4 py-3 font-body-md text-on-surface dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none flex-grow transition-shadow"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-primary text-on-primary rounded-full px-6 py-3.5 md:py-4 font-button text-[13px] md:text-[15px] w-full mt-2 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                SEND VIA WHATSAPP <span className="material-symbols-outlined text-[16px] md:text-[18px]">send</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
