'use client';

import React, { useRef, useEffect } from 'react';
import { Star, Phone, Mail, CalendarDays } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Set language to English for date inputs
    if (checkinRef.current) {
      checkinRef.current.lang = 'en';
    }
    if (checkoutRef.current) {
      checkoutRef.current.lang = 'en';
    }
  }, []);

  const handleIconClick = (ref: React.RefObject<HTMLInputElement | null>) => {
    if (ref.current) {
      ref.current.showPicker();
    }
  };



  return (
    <section
      id="contact"
      className="relative bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center py-24 px-4" style={{ backfaceVisibility: 'hidden' }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        ref={ref}
        className={`container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} px-8 lg:px-16 xl:px-32`}>

        {/* Left Column */}
        <div className="text-white">
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <h3 className="text-sm uppercase tracking-wider text-stone-300">Get in Touch</h3>
          <h2 className="text-4xl font-bold mb-4 mt-2">Contact Us 24/7</h2>
          <p className="mb-8 max-w-md">
            If you have any questions or special requests regarding our hotel, please do not hesitate to contact us. Our professional team will be happy to assist you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4" />
              <span>contact@hotelparadise.com</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-sm uppercase tracking-widest text-stone-500">Reservation</h3>
            <h2 className="text-3xl font-bold text-stone-800 mt-2">Book Your Room</h2>
          </div>
          <form className="space-y-3">
            <div>
              <label htmlFor="checkin" className="block text-xs font-medium text-stone-700">Check-in Date</label>
              <div className="relative mt-1">
                <input type="date" id="checkin" name="checkin" ref={checkinRef} lang="en" className="block w-full p-2 border border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 text-stone-900 text-sm" />
                <div onClick={() => handleIconClick(checkinRef)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                  <CalendarDays className="w-4 h-4 text-stone-400 hover:text-stone-600 transition-colors duration-200" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="checkout" className="block text-xs font-medium text-stone-700">Check-out Date</label>
              <div className="relative mt-1">
                <input type="date" id="checkout" name="checkout" ref={checkoutRef} lang="en" className="block w-full p-2 border border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 text-stone-900 text-sm" />
                <div onClick={() => handleIconClick(checkoutRef)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                  <CalendarDays className="w-4 h-4 text-stone-400 hover:text-stone-600 transition-colors duration-200" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="adults" className="block text-xs font-medium text-stone-700">Adults</label>
                <input type="number" id="adults" name="adults" min="1" defaultValue="2" className="mt-1 block w-full p-2 border border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 text-stone-900 text-sm" />
              </div>
              <div>
                <label htmlFor="children" className="block text-xs font-medium text-stone-700">Children</label>
                <input type="number" id="children" name="children" min="0" defaultValue="0" className="mt-1 block w-full p-2 border border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 text-stone-900 text-sm" />
              </div>
            </div>
            <button type="submit" className="w-full bg-stone-700 text-white py-2 px-4 rounded-lg hover:bg-stone-800 transition duration-300 mt-3 cursor-pointer text-sm">
              Check Availability
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;