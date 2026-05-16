import React from 'react';
import { footerLinks } from '../data/mockData';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo2.0.png';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 py-10 md:py-16 max-w-[1200px] mx-auto gap-6">
        <div className="flex-shrink-0">
          <img src={logoImg} alt="OG Obsession by Grace" className="h-12 w-auto object-contain" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-serif text-xs tracking-wider uppercase">
          {footerLinks.map((link) => (
            <Link 
              key={link.label}
              to={link.href}
              className="text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-opacity ease-in-out duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-stone-800 dark:text-stone-100 font-serif text-xs tracking-wider uppercase ease-in-out duration-200 text-center md:text-right">
          © 2024 OG — Obsession by Grace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
