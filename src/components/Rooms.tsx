"use client";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const roomsData = [
  {
    name: 'Deluxe Room',
    description: 'A spacious room with a beautiful city view.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 250,
    features: ['King Size Bed', 'Free Wi-Fi', '42-inch TV', 'Mini Bar'],
  },
  {
    name: 'Suite',
    description: 'An elegant suite with a separate living area.',
    image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 450,
    features: ['Separate Living Room', 'Jacuzzi', 'Ocean View'],
  },
  {
    name: 'Family Room',
    description: 'A large room perfect for families, with multiple beds.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 350,
    features: ['2 Queen Beds', 'Kids Play Area', 'Kitchenette'],
  },
];

const Rooms = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="rooms"
      className="bg-gray-100 py-20">

      <div
        ref={ref}
        className={`container mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} px-4 lg:px-8 xl:px-16`}>
        <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
          <h3 className="text-sm uppercase tracking-wider text-stone-500">Our Rooms</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2">Explore Our Accommodations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
          {roomsData.map((room, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3] md:aspect-[4/5]">
              <Image
                src={room.image}
                alt={room.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-stone-800/80 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full">
                ${room.price}/night
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white flex flex-col justify-end h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{room.name}</h3>
                  <div className="mt-2">
                    <p className="text-xs md:text-sm text-gray-300 truncate">
                      {room.features.join(' / ')}
                    </p>
                  </div>
                </div>
                <div className="pt-3 md:pt-4">
                  <button className="w-full px-4 md:px-6 py-2 md:py-3 bg-stone-700 text-white text-sm md:text-base font-semibold rounded-full hover:bg-stone-400 transition-colors duration-300">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;