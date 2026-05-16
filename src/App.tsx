import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePageDesktop } from './pages/HomePageDesktop';
import { CatalogDesktop } from './pages/CatalogDesktop';
import { OurStoryDesktop } from './pages/OurStoryDesktop';
import { BespokeInquiryDesktop } from './pages/BespokeInquiryDesktop';
import { CartPage } from './pages/CartPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { CartProvider } from './context/CartContext';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePageDesktop />} />
          <Route path="/catalog" element={<CatalogDesktop />} />
          <Route path="/story" element={<OurStoryDesktop />} />
          <Route path="/contact" element={<BespokeInquiryDesktop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

