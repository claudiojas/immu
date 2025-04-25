
import React from 'react';
import TestimonialCard from '../TestimonialCard';
import { StaticImageData } from 'next/image';

type TestimonialsSectionProps = {
  testimonials: {
    id: number;
    image: string | StaticImageData;
    name: string;
    age: string;
    text: string;
    videoUrl: string;
  }[];
};

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Depoimentos de nossas mulheres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              age={testimonial.age}
              text={testimonial.text}
              videoUrl={testimonial.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
