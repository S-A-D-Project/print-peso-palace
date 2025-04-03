
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Event Planner",
    company: "Santos Events",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "The quality of the event flyers exceeded my expectations. The colors were vibrant and the paper quality was excellent. PrintPeso delivered two days before the promised date which helped us tremendously!",
    rating: 5
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    role: "Marketing Manager",
    company: "TechHub Philippines",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "We've been using PrintPeso for all our marketing materials for over a year now. Their business cards, brochures, and banners are consistently top-notch. The online ordering system is straightforward and the customer service is responsive.",
    rating: 5
  },
  {
    id: 3,
    name: "Patricia Reyes",
    role: "Small Business Owner",
    company: "Reyes Bakery",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "As a small business owner, I appreciate the affordable pricing without compromising quality. The food-grade stickers for our product packaging look professional and have helped boost our brand image. Highly recommend!",
    rating: 4
  },
  {
    id: 4,
    name: "Carlos Mendoza",
    role: "Photographer",
    company: "CM Studios",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    quote: "The photo prints are amazing - accurate colors and excellent paper quality. I've tried many printing services before, but PrintPeso delivers the most consistent results for my portfolio and client deliverables.",
    rating: 5
  },
  {
    id: 5,
    name: "Sofia Garcia",
    role: "Office Administrator",
    company: "Garcia Legal Firm",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    quote: "We order all our office stationery from PrintPeso - letterheads, envelopes, folders, and more. The quality is consistent, delivery is prompt, and their customer service team is always helpful when we need special customizations.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-12 bg-gradient-to-br from-shop-light to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our printing services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1">
              <div className="bg-shop-light rounded-full p-2">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>
            
            <div className="pt-10 text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="mb-6">
                <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </p>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full border-shop-primary text-shop-primary hover:bg-shop-light"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full border-shop-primary text-shop-primary hover:bg-shop-light"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentTestimonial ? 'bg-shop-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
