import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export interface TopNavBarProps {}

export const TopNavBar: React.FC<TopNavBarProps> = () => {
  const location = useLocation();
  const { totalWeight } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const navLinks = [
    { label: "STORY", href: "/story", icon: "auto_stories" },
    { label: "CATALOG", href: "/catalog", icon: "menu_book" },
    { label: "CONTACT", href: "/contact", icon: "mail" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5'
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-3 max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className={`text-2xl md:text-3xl font-serif italic transition-colors duration-300 ${
            scrolled ? 'text-stone-900' : 'text-white'
          } group-hover:text-[#8C9567]`}>
            Gracy's
          </span>
        </Link>

        {/* Nav Buttons */}
        <div className="flex items-center gap-1.5 md:gap-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className="group relative"
              >
                <div className={`
                  relative flex items-center gap-1.5 md:gap-2 px-3.5 py-2 md:px-5 md:py-2.5
                  rounded-xl font-serif text-[11px] md:text-[12px] tracking-[0.12em] uppercase font-bold
                  transition-all duration-400 ease-out
                  ${isActive
                    ? 'bg-[#8C9567] text-white shadow-lg shadow-[#8C9567]/30'
                    : scrolled
                      ? 'text-stone-600 hover:text-[#8C9567]'
                      : 'text-white/80 hover:text-white'
                  }
                  ${!isActive && 'hover:bg-white/10 hover:backdrop-blur-sm'}
                `}>
                  <span className={`material-symbols-outlined text-[14px] md:text-[16px] transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-white' : ''
                  }`} style={{ fontVariationSettings: "'wght' 300, 'FILL' 0" }}>
                    {link.icon}
                  </span>
                  <span className="hidden md:inline">{link.label}</span>
                  <span className="md:hidden">{link.label}</span>
                </div>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></span>
                )}

                {/* Hover underline effect for non-active */}
                {!isActive && (
                  <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 w-0 group-hover:w-3/4 ${
                    scrolled ? 'bg-[#8C9567]' : 'bg-white'
                  }`}></span>
                )}
              </Link>
            );
          })}

          {/* Divider */}
          <div className={`w-px h-6 mx-1 transition-colors duration-300 ${scrolled ? 'bg-stone-200' : 'bg-white/20'}`}></div>

          {/* Cart */}
          <Link to="/cart" className="group relative flex items-center gap-1.5 p-2 rounded-xl transition-all duration-300 hover:bg-white/10">
            <span className={`material-symbols-outlined text-[22px] transition-all duration-300 group-hover:scale-110 ${
              scrolled ? 'text-[#8C9567]' : 'text-white'
            }`} style={{ fontVariationSettings: "'wght' 300" }}>
              shopping_bag
            </span>
            {totalWeight > 0 && (
              <span className="absolute -top-0.5 -right-0.5 text-[9px] font-bold bg-[#8C9567] text-white px-1.5 py-0.5 rounded-full min-w-[20px] text-center ring-2 ring-white animate-[fadeInUp_0.3s_ease-out_both]">
                {totalWeight}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
