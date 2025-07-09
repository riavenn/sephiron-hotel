"use client";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="bg-white py-20">

      <div
        ref={ref}
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} px-8 lg:px-16 xl:px-32`}>
        <div className="relative h-[250px] md:h-[450px]">
          <div className="absolute top-0 left-0 w-full md:w-4/5 h-full md:h-4/5 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hotel Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-lg overflow-hidden border-4 border-white shadow-xl hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hotel Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-sm uppercase tracking-wider text-stone-500">The Best Luxury Hotel</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2 mb-4">Discover a Brand Luxurious Hotel</h2>
          <p className="text-stone-600 mb-6 px-4 md:px-0">
            Experience the pinnacle of luxury and comfort. Our hotel offers world-class amenities, exceptional service, and a serene environment, ensuring an unforgettable stay for all our guests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="relative p-4 border rounded-lg group hover:bg-stone-700 transition-all duration-300">
              <h4 className="text-lg font-bold text-gray-800 group-hover:text-white">Luxury Rooms</h4>
              <p className="text-gray-600 mt-1 group-hover:text-gray-200 text-sm">Elegantly designed rooms with breathtaking views.</p>
            </div>
            <div className="relative p-4 border rounded-lg group hover:bg-stone-700 transition-all duration-300">
              <h4 className="text-lg font-bold text-gray-800 group-hover:text-white">Exceptional Service</h4>
              <p className="text-gray-600 mt-1 group-hover:text-gray-200 text-sm">Our dedicated staff is here to cater to your every need.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;