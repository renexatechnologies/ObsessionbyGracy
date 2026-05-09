import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const { cartItems, clearCart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gstRate = 0.05;
  const gstAmount = subtotal * gstRate;
  const grandTotal = subtotal + gstAmount;

  return (
    <div className="bg-[#8C9567] text-white min-h-screen flex flex-col pt-[88px] font-body-md antialiased">
      <TopNavBar />

      <main className="flex-grow flex flex-col py-stack-lg max-w-[800px] mx-auto px-6 w-full">
        <section className="mb-12 text-center">
          <h1 className="font-headline-xl text-headline-xl text-white mb-2">Your Shopping Cart</h1>
          <p className="font-body-lg text-white/80">Confirm your heritage selections before finalizing your order.</p>
        </section>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-50">shopping_basket</span>
            <p className="text-xl font-headline-md italic mb-8 text-white/70">Your basket is currently empty.</p>
            <Link to="/catalog" className="bg-white text-[#8C9567] px-8 py-3 rounded-full font-button text-[15px] font-bold hover:bg-white/90 transition-colors shadow-lg">
              GO TO CATALOG
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {/* Cart Items List */}
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm shadow-md">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-white/20">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col min-w-0">
                    <h3 className="font-headline-md text-lg md:text-xl text-white truncate">{item.title}</h3>
                    <p className="text-sm text-white/70 font-label-md mt-0.5">{item.priceString}/KG</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined text-[16px]">remove</span>
                      </button>
                      <span className="font-button text-[15px] text-white min-w-[40px] text-center">{item.quantity} KG</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <p className="text-lg md:text-xl font-bold text-white">£ {(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-[12px] text-white/50 hover:text-red-300 transition-colors font-label-md uppercase tracking-wider"
                    >
                      <span className="material-symbols-outlined text-[14px]">delete</span>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm p-8 shadow-xl">
              <h2 className="font-headline-md text-2xl mb-6 pb-4 border-b border-white/10">Order Summary</h2>
              <div className="flex flex-col gap-4 text-lg">
                <div className="flex justify-between items-center opacity-80">
                  <span>Subtotal</span>
                  <span>£ {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center opacity-80">
                  <span>GST (5%)</span>
                  <span>£ {gstAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center text-3xl font-bold pt-4 mt-2 border-t border-white/20">
                  <span>Grand Total</span>
                  <span>£ {grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button 
                  onClick={clearCart}
                  className="flex-grow border border-white/30 text-white px-6 py-4 rounded-full font-button text-[15px] hover:bg-white/10 transition-colors"
                >
                  CLEAR CART
                </button>
                <button className="flex-grow bg-white text-[#8C9567] px-8 py-4 rounded-full font-button text-[15px] font-bold hover:bg-white/90 transition-colors shadow-lg">
                  CHECKOUT NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
