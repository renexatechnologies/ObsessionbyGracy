import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    category: 'Ordering',
    items: [
      { q: 'How do I place an order?', a: 'You can place an order via our Contact page, WhatsApp us at +91 89191 81618, or visit our store at Hebbagodi. We recommend reaching out at least 5–7 days in advance for custom cakes.' },
      { q: 'What is the minimum order size?', a: 'For custom celebration cakes, the minimum order is 2 KG. For bulk / event orders, the minimum is 5 KG. Pastry and bread items can be ordered à la carte in-store.' },
      { q: 'Can I visit the store to order in person?', a: 'Absolutely! We are open from 10:00 AM onwards at No 182, 3rd Floor, Shree Ramnath Damodar, Hebbagodi. For bespoke consultations, we recommend booking an appointment first.' },
      { q: 'How far in advance should I order?', a: 'For standard cakes, 3–5 days notice is ideal. For large events (10+ KG) or intricate custom designs, we recommend 7–14 days advance notice to ensure everything is perfect.' },
    ],
  },
  {
    category: 'Flavors & Ingredients',
    items: [
      { q: 'What flavors do you offer?', a: 'Our signature range includes Chocolate Truffle Heritage, Vanilla Bean, Classic Espresso Opera, and Pistachio Rosewater Sponge. We also do bespoke custom flavor blends — just ask during your consultation.' },
      { q: 'Are your ingredients organic?', a: 'Yes. We source 100% organic, locally farmed ingredients wherever possible. Our dairy, eggs, and grains are chosen with uncompromising standards. We use no artificial preservatives.' },
      { q: 'Do you accommodate dietary restrictions?', a: 'We can accommodate certain dietary requirements including eggless options and nut-free preparations. Please inform us at the time of ordering. We currently do not offer gluten-free products.' },
      { q: 'Are your recipes authentic French recipes?', a: 'Yes — all our patisserie creations are rooted in classical French baking tradition. Our head baker trained in French artisanal techniques, and we use authentic methods including slow fermentation and European butter.' },
    ],
  },
  {
    category: 'Delivery & Pickup',
    items: [
      { q: 'Do you deliver?', a: 'Yes, we offer white-glove delivery within Bangalore. Delivery charges apply based on distance. All orders are packed in signature OG boxes with thermal inserts to maintain freshness and presentation.' },
      { q: 'What areas do you deliver to?', a: 'We currently deliver across Bangalore — including Hebbagodi, Koramangala, HSR Layout, Indiranagar, Whitefield, Electronic City, and surrounding areas. Contact us to confirm your pin code.' },
      { q: 'Can I pick up from the store?', a: 'Yes! Store pickup is available from 10:00 AM at our Hebbagodi location. We will notify you when your order is ready for collection.' },
      { q: 'What packaging do you use?', a: 'All products are packaged in our signature OG branded boxes. Large cakes are transported in dedicated cake transport boxes with non-slip inserts and temperature management. We take presentation very seriously.' },
    ],
  },
  {
    category: 'Pricing & Payment',
    items: [
      { q: 'How is pricing determined for custom cakes?', a: 'Pricing is based on weight (KG), flavor complexity, design intricacy, and delivery requirements. We provide a full quote after your initial consultation. There are no hidden charges.' },
      { q: 'Do you require a deposit?', a: 'Yes, we require a 50% advance deposit to confirm your order. The remaining balance is due upon delivery or pickup. This ensures we can source your premium ingredients in advance.' },
      { q: 'What payment methods do you accept?', a: 'We accept UPI (GPay, PhonePe, Paytm), bank transfer (NEFT/IMPS), and cash payments at the store. Card payments are also available in-store.' },
      { q: 'Do you offer discounts for bulk or repeat orders?', a: 'Yes! We offer preferential pricing for corporate accounts, repeat clients, and bulk event orders. Please reach out to discuss a tailored package for your needs.' },
    ],
  },
];

export const FAQPage: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const heroReveal = useScrollReveal(0.1);
  const contentReveal = useScrollReveal(0.1);

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-stone-950">
      <TopNavBar />

      {/* Hero */}
      <section className="relative w-full pt-28 pb-20 md:pt-40 md:pb-28 px-5 bg-[#8C9567] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div ref={heroReveal.ref}
          className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-1000 ease-out ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/70 uppercase tracking-[0.3em] text-[11px] md:text-[13px] font-label-md mb-4">Got Questions?</p>
          <h1 className="text-white font-headline-xl text-[36px] md:text-[58px] leading-tight mb-5">
            Frequently Asked<br className="hidden md:block" /> Questions
          </h1>
          <p className="text-white/80 font-body-md text-[14px] md:text-[16px] leading-relaxed max-w-lg mx-auto">
            Everything you need to know about ordering, ingredients, delivery, and the craft behind every creation.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div ref={contentReveal.ref}
          className={`max-w-[860px] mx-auto transition-all duration-1000 ease-out ${contentReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {faqs.map((section) => (
            <div key={section.category} className="mb-12 md:mb-16">
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700" />
                <span className="text-[#8C9567] uppercase tracking-[0.25em] text-[11px] md:text-[12px] font-label-md font-bold whitespace-nowrap">{section.category}</span>
                <div className="h-px flex-1 bg-stone-200 dark:bg-stone-700" />
              </div>

              <div className="flex flex-col gap-3">
                {section.items.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  const isOpen = openItem === key;
                  return (
                    <div
                      key={key}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? 'border-[#8C9567] bg-white dark:bg-stone-800 shadow-lg'
                          : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50 hover:border-[#8C9567]/40'
                      }`}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                      >
                        <span className={`font-label-md text-[14px] md:text-[15px] font-semibold transition-colors ${isOpen ? 'text-[#8C9567]' : 'text-stone-900 dark:text-stone-100'}`}>
                          {item.q}
                        </span>
                        <span className={`material-symbols-outlined text-[20px] flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#8C9567]' : 'text-stone-400'}`}>
                          expand_more
                        </span>
                      </button>
                      <div className={`transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px bg-stone-100 dark:bg-stone-700 mb-4" />
                          <p className="text-stone-600 dark:text-stone-400 font-body-md text-[14px] leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="mt-10 rounded-2xl bg-[#8C9567] p-8 md:p-10 text-center">
            <span className="material-symbols-outlined text-white/60 text-[36px] mb-4 block">chat</span>
            <h3 className="text-white font-headline-md text-[22px] md:text-[26px] mb-3">Still have questions?</h3>
            <p className="text-white/75 font-body-md text-[14px] mb-6">
              Our team is happy to help. Reach out via WhatsApp for the fastest response.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/918919181618"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#8C9567] rounded-full px-7 py-3 font-button text-[13px] hover:bg-stone-100 transition-all duration-300 shadow-lg"
              >
                WHATSAPP US
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white rounded-full px-7 py-3 font-button text-[13px] hover:bg-white hover:text-[#8C9567] transition-all duration-300"
              >
                CONTACT FORM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
