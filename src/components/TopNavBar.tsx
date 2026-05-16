import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/Logo2.0.png';

export interface TopNavBarProps {}

export const TopNavBar: React.FC<TopNavBarProps> = () => {
  const location = useLocation();
  const { totalWeight } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

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
    { label: "SERVICES", href: "/services", icon: "room_service" },
    { label: "ORDER", href: "/catalog", icon: "shopping_bag" },
    { label: "REVIEWS", href: "/testimonials", icon: "reviews" },
    { label: "FAQ", href: "/faq", icon: "help" },
    { label: "CONTACT", href: "/contact", icon: "mail" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl shadow-lg shadow-black/5'
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center w-full px-3 md:px-8 py-3 max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2 flex-shrink-0">
          <img
            src={logoImg}
            alt="OG Obsession by Grace"
            className={`h-10 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              scrolled ? '' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
            }`}
          />
        </Link>

        {/* Nav Buttons */}
        <div className="flex items-center gap-1 md:gap-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className="group relative"
              >
                <div className={`
                  relative flex items-center gap-1 md:gap-2 px-2.5 py-2 md:px-5 md:py-2.5
                  rounded-xl font-serif text-[11px] md:text-[12px] tracking-[0.12em] uppercase font-bold
                  transition-all duration-400 ease-out
                  ${isActive
                    ? 'bg-[#8C9567] text-white shadow-lg shadow-[#8C9567]/30'
                    : scrolled
                      ? 'text-stone-600 dark:text-stone-300 hover:text-[#8C9567]'
                      : 'text-white/80 hover:text-white'
                  }
                  ${!isActive && 'hover:bg-white/10 hover:backdrop-blur-sm'}
                `}>
                  <span className={`material-symbols-outlined text-[16px] md:text-[18px] transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-white' : ''
                  }`}>
                    {link.icon}
                  </span>
                  <span className="hidden md:inline">{link.label}</span>
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
          <div className={`w-px h-6 mx-0.5 md:mx-1 transition-colors duration-300 ${scrolled ? 'bg-stone-200 dark:bg-stone-700' : 'bg-white/20'}`}></div>

          {/* Light/Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`group relative flex items-center p-2 rounded-xl transition-all duration-300 hover:bg-white/10 ${
              scrolled ? 'text-stone-600 dark:text-stone-300' : 'text-white'
            }`}
            aria-label="Toggle light/dark mode"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Cart */}
          <Link to="/cart" className="group relative flex items-center gap-1.5 p-2 rounded-xl transition-all duration-300 hover:bg-white/10">
            <span className={`material-symbols-outlined text-[22px] transition-all duration-300 group-hover:scale-110 ${
              scrolled ? 'text-[#8C9567]' : 'text-white'
            }`}>
              shopping_bag
            </span>
            {totalWeight > 0 && (
              <span className="absolute -top-0.5 -right-0.5 text-[9px] font-bold bg-[#8C9567] text-white px-1.5 py-0.5 rounded-full min-w-[20px] text-center ring-2 ring-white dark:ring-stone-900 animate-[fadeInUp_0.3s_ease-out_both]">
                {totalWeight}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
