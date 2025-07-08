"use client";
import React, { FC, useState, useEffect } from 'react';
import { Wifi, ConciergeBell, UtensilsCrossed, Bubbles, Dumbbell, Plane } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    icon: <Wifi size={48} />,
    name: 'High-Speed Wi-Fi',
  },
  {
    icon: <ConciergeBell size={48} />,
    name: 'Concierge Service',
  },
  {
    icon: <UtensilsCrossed size={48} />,
    name: 'Room Service',
  },
  {
    icon: <Bubbles size={48} />,
    name: 'Spa & Wellness',
  },
  {
    icon: <Dumbbell size={48} />,
    name: 'Fitness Center',
  },
  {
    icon: <Plane size={48} />,
    name: 'Airport Transfer',
  },
];

const Services: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [iconSize, setIconSize] = useState(48);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 768 ? 36 : 48);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="services"
      className="bg-white py-20">

      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h3 className="text-sm uppercase tracking-wider text-stone-500">Our Services</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2">Explore Our Services</h2>
        <p className="mt-4 text-stone-600 max-w-2xl mx-auto px-4 md:px-0">We are committed to providing our guests with the best experience possible, from luxurious amenities to personalized services.</p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4 md:px-0">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-stone-700 text-white p-4 md:p-6 rounded-lg shadow-md hover:bg-stone-600 transition-colors duration-300 flex flex-col items-center justify-center aspect-square">
              <div className="mx-auto">
                {React.cloneElement(service.icon, { size: iconSize })}
              </div>
              <h3 className="mt-4 text-sm md:text-lg font-semibold text-center">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;