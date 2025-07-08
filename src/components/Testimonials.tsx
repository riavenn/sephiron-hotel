'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useInView } from 'react-intersection-observer';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    image: '/testimonials/1.jpg',
    comment: 'An amazing hotel! The quality of service and staff attention was excellent. I will definitely come again.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: '/testimonials/2.jpg',
    comment: 'The location is great, the rooms were clean and comfortable. The view was fascinating. I recommend it to everyone.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Peter Jones',
    image: '/testimonials/3.jpg',
    comment: 'The food was great, especially the breakfast was very rich. We were also very pleased with the spa services.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Mary Williams',
    image: '/testimonials/4.jpg',
    comment: 'We had a wonderful holiday with my family. The activities for children were very entertaining.',
    rating: 5,
  },
  {
    id: 5,
    name: 'David Brown',
    image: '/testimonials/5.jpg',
    comment: 'The staff was very helpful and friendly. They helped us with everything. Thanks!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Susan Davis',
    image: '/testimonials/6.jpg',
    comment: 'The hotel has a very modern and stylish design. I loved the decoration of the rooms. See you again.',
    rating: 4,
  },
];

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="container mx-auto py-16 px-4">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} />
      <div className="text-center mb-12">
        <h3 className="text-sm uppercase tracking-widest text-stone-500">Guest Reviews</h3>
        <h2 className="text-4xl font-bold text-stone-300 mt-2">What Our Guests Say About Us</h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4">
              <div className="bg-stone-200 p-8 rounded-lg shadow-lg text-center h-full flex flex-col">
                <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <p className="text-stone-600 italic mb-4">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-stone-300 fill-current" />
                  ))}
                </div>
                <div className="mt-auto">
                  <h4 className="text-lg font-semibold text-stone-800">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;