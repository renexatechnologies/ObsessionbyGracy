import React from 'react';
import { footerLinks } from '../data/mockData';
import { Link } from 'react-router-dom';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 mt-20 max-w-[1200px] mx-auto">
        <div className="text-xl font-serif tracking-tighter text-stone-900 dark:text-stone-100 ease-in-out duration-200 mb-6 md:mb-0">
          Gracy's
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-serif text-xs tracking-wider uppercase mb-6 md:mb-0">
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
          © 2024 Gracy's Bakery. Editorial Heritage Collection.
        </div>
      </div>
    </footer>
  );
};
