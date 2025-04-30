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
    <section className="py-16 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Depoimentos de nossas mulheres
        </h2>
        <div className="grid gap-8 justify-center items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {testimonials.map((testimonial) => (
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
