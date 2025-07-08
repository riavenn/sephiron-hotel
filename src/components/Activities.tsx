"use client";
import { FC } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const activitiesData = [
  {
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    superTitle: 'The Best Luxury Hotel',
    title: 'Wellness & Spa',
    description: 'Indulge in a world of tranquility and rejuvenation at our luxurious spa. Our expert therapists offer a wide range of treatments designed to relax your body and mind.',
    services: ['Massage Therapy', 'Facial Treatments', 'Aromatherapy', 'Sauna & Steam Room'],
  },
  {
    image: 'https://images.unsplash.com/photo-1624036096842-6e4eadb5a792?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    superTitle: 'The Best Luxury Hotel',
    title: 'Gourmet Dining',
    description: 'Experience an unforgettable culinary journey at our award-winning restaurant. Our chefs use the freshest local ingredients to create exquisite dishes.',
    services: ['Fine Dining Restaurant', 'Private Dining', 'Wine Tasting', 'Cooking Classes'],
  },
  {
    image: 'https://images.unsplash.com/photo-1625456824868-761b70b97adf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    superTitle: 'The Best Luxury Hotel',
    title: 'Outdoor Adventures',
    description: 'Explore the natural beauty surrounding our hotel with a variety of outdoor activities. Perfect for adventure seekers and nature lovers.',
    services: ['Guided Hiking Tours', 'Mountain Biking', 'Kayaking & Canoeing', 'Picnic Baskets'],
  },
];

const Activities: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="activities"
      className="bg-gray-50 py-20">

        <div
          ref={ref}
          className={`container mx-auto px-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-left md:text-center mb-12">
          <h3 className="text-sm uppercase tracking-wider text-stone-500">Experiences</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-2">Unforgettable Activities</h2>
          <p className="mt-4 text-stone-600 max-w-2xl md:mx-auto">From relaxing spa days to adventurous outings, we offer a diverse range of activities to enrich your stay and make it truly special.</p>
        </div>
        <div className="space-y-12">
          {activitiesData.map((activity, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="w-full h-64 md:h-auto md:w-1/2 relative">
                <Image src={activity.image} alt={activity.title} layout="fill" className="object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-wider">{activity.superTitle}</p>
                  <h3 className="text-3xl font-bold text-stone-800 mt-2">{activity.title}</h3>
                  <p className="text-stone-600 mt-4">{activity.description}</p>
                  <div className="mt-6">
                    <h4 className="font-semibold text-stone-700">Included Services:</h4>
                    <ul className="mt-2 space-y-1 text-stone-500">
                      {activity.services.map((service, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full bg-stone-700 text-white py-3 px-6 rounded-md hover:bg-stone-800 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;