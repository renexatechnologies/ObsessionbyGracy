import React, { useState } from 'react';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { catalogProducts } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface CatalogDesktopProps {}

export const CatalogDesktop: React.FC<CatalogDesktopProps> = () => {
  const [buyingProductTitle, setBuyingProductTitle] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All Items");
  const [selectedQuantity, setSelectedQuantity] = useState<string>("1");
  const { addToCart } = useCart();

  const parsePrice = (priceStr: string) => {
    return parseFloat(priceStr.replace(/[^\d.]/g, ''));
  };

  const filteredProducts = activeCategory === "All Items" 
    ? catalogProducts 
    : catalogProducts.filter(p => p.category === activeCategory);

  const headerReveal = useScrollReveal(0.1);
  const gridReveal = useScrollReveal(0.05);

  return (
    <div className="bg-[#8C9567] dark:bg-stone-950 text-white min-h-screen flex flex-col pt-[72px] md:pt-[88px]">
      <TopNavBar />

      <main className="flex-grow flex flex-col py-8 md:py-stack-lg max-w-container-max mx-auto px-4 md:px-gutter w-full">
        {/* Header Section */}
        <section
          ref={headerReveal.ref}
          className={`mb-8 md:mb-stack-lg text-center transition-all duration-1000 ease-out ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="font-headline-xl text-[28px] md:text-headline-xl text-white mb-2">
            The Signature Collection
          </h1>
          <p className="font-body-lg text-[14px] md:text-body-lg text-white/80 max-w-2xl mx-auto">
            Explore our curated selection of heritage baked goods, crafted with century-old techniques and the finest seasonal ingredients.
          </p>
        </section>

        {/* Filters/Categories */}
        <section className="flex gap-2 md:gap-3 justify-center mb-6 md:mb-stack-md flex-wrap px-2">
          {["All Items", "Cakes", "Birthday Cakes", "Wedding Cakes", "Party Cakes", "Pastries", "Breads"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-6 py-2 rounded-full border transition-colors font-label-md text-[11px] md:text-label-md ${
                activeCategory === cat 
                  ? "bg-white text-[#8C9567] border-white" 
                  : "border-white/60 text-white hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Product Grid */}
        <section
          ref={gridReveal.ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-gutter auto-rows-fr"
        >
          {filteredProducts.map((product, index) => (
            <article
              key={product.title}
              className={`flex flex-col group cursor-pointer h-full transition-all duration-700 ease-out ${
                gridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: gridReveal.isVisible ? `${index * 80}ms` : '0ms' }}
            >
              <div className="w-full aspect-[4/5] overflow-hidden rounded-t-lg bg-stone-100">
                <img 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  src={product.image} 
                />
              </div>
              <div className={`flex flex-col p-3 md:p-6 ${product.bgColor} dark:bg-stone-800 rounded-b-lg flex-grow border-x border-b border-stone-200/40 dark:border-stone-700`}>
                <div className="flex-grow flex flex-col gap-1 md:gap-2">
                  <span className="inline-block w-max px-2 md:px-3 py-0.5 md:py-1 bg-background dark:bg-stone-700 text-primary dark:text-stone-200 font-label-md text-[9px] md:text-label-md rounded-full uppercase tracking-wider mb-1 md:mb-2">
                    {product.tag}
                  </span>
                  <h3 className="font-headline-md text-[16px] md:text-[24px] text-primary dark:text-stone-100 leading-tight">
                    {product.title}
                  </h3>
                  <p className="font-body-md text-[13px] md:text-body-md mt-1 text-black dark:text-white font-bold">
                    {product.price}/KG
                  </p>
                </div>
                
                {buyingProductTitle === product.title ? (
                  <div className="flex w-full mt-3 md:mt-stack-sm h-[40px] md:h-[48px] rounded-full overflow-hidden border border-primary dark:border-[#8C9567]">
                    <div className="relative w-1/2">
                      <select 
                        value={selectedQuantity}
                        onChange={(e) => setSelectedQuantity(e.target.value)}
                        className="bg-white dark:bg-stone-700 text-primary dark:text-stone-200 px-2 md:px-4 pr-6 md:pr-7 font-button text-[12px] md:text-[14px] w-full h-full outline-none cursor-pointer appearance-none text-center"
                      >
                        <option value="" disabled>KG's</option>
                        <option value="1">1 KG</option>
                        <option value="2">2 KG</option>
                        <option value="4">4 KG</option>
                        <option value="5">5 KG</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-1 md:right-1.5 top-1/2 -translate-y-1/2 text-[14px] md:text-[16px] text-primary/60 dark:text-stone-400 pointer-events-none">expand_more</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: product.title,
                          title: product.title,
                          price: parsePrice(product.price),
                          priceString: product.price,
                          image: product.image,
                          quantity: parseInt(selectedQuantity)
                        });
                        setBuyingProductTitle(null);
                        setSelectedQuantity("1");
                      }}
                      className="bg-primary text-on-primary font-button text-[12px] md:text-[14px] w-1/2 hover:opacity-90 transition-opacity flex items-center justify-center border-l border-primary"
                    >
                      CONFIRM
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setBuyingProductTitle(product.title);
                    }}
                    className="bg-primary text-on-primary rounded-full px-4 md:px-6 py-3 md:py-4 font-button text-[12px] md:text-[15px] w-full mt-3 md:mt-stack-sm hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                  >
                    BUY NOW 
                    <span className="material-symbols-outlined text-[16px] md:text-[18px]">arrow_forward</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};
