'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Example testimonials
const testimonials = [
  {
    id: 1,
    content: "Los textiles que compré son absolutamente hermosos y de una calidad excepcional. El proceso de personalización fue simple y el resultado superó mis expectativas. Además, me encantó poder conocer la historia de María, la artesana que elaboró mi manta.",
    author: "Carolina Martínez",
    location: "Lima, Perú",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "Compré un retablo personalizado como regalo de aniversario y fue todo un éxito. El nivel de detalle es impresionante y el hecho de que pudiera incluir elementos significativos para nosotros lo hizo aún más especial. Definitivamente volveré a comprar.",
    author: "Miguel Sánchez",
    location: "Madrid, España",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "La experiencia de compra fue fluida y la atención al cliente excepcional. Me mantuvieron informado durante todo el proceso de elaboración de mi pieza y el envío fue más rápido de lo esperado. La calidad del tallado en piedra de Huamanga es extraordinaria.",
    author: "Ana Gómez",
    location: "Bogotá, Colombia",
    rating: 4,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900">Lo Que Dicen Nuestros Clientes</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">
          Descubre las experiencias de quienes ya disfrutan de nuestras artesanías
        </p>
      </div>
      
      <div className="relative">
        {/* Testimonial slider */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    {/* Image - hidden on mobile */}
                    <div className="hidden md:block md:w-1/3 relative">
                      <div className="absolute inset-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:w-2/3">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={cn(
                              "h-5 w-5", 
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-300"
                            )}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-neutral-700 mb-6 italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        {/* Mobile image */}
                        <div className="md:hidden relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div>
                          <div className="font-medium text-neutral-900">{testimonial.author}</div>
                          <div className="text-sm text-neutral-500">{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-neutral-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-neutral-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all focus:outline-none",
                currentIndex === index ? "w-8 bg-primary-500" : "w-2 bg-neutral-300 hover:bg-neutral-400"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}