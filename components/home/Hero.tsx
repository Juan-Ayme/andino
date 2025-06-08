'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

// Slider images
const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/12456281/pexels-photo-12456281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Artesanía Peruana Auténtica',
    subtitle: 'Conectando tradición con el mundo moderno',
    cta: 'Explorar Colección'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/11710100/pexels-photo-11710100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Descubre el Arte de Ayacucho',
    subtitle: 'Cada pieza cuenta una historia ancestral',
    cta: 'Conocer Artesanos'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6045788/pexels-photo-6045788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Personaliza tu Artesanía',
    subtitle: 'Creaciones únicas hechas especialmente para ti',
    cta: 'Personalizar Ahora'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              currentSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-15">
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="h-8 w-8 text-primary-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Star className="h-6 w-6 text-secondary-400 opacity-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
          <Star className="h-4 w-4 text-accent-400 opacity-50" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={cn(
                "transition-all duration-1000 transform",
                currentSlide === index 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8 absolute"
              )}
            >
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight neon-text">
                  {slide.title}
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-neutral-200 max-w-2xl">
                  {slide.subtitle}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/productos"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl shadow-lg btn-primary group"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/artesanos"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl glass text-white hover:bg-white/20 transition-all duration-300"
                  >
                    Conocer Artesanos
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 rounded-full transition-all duration-300",
              currentSlide === index 
                ? "w-12 bg-primary-400 animate-glow" 
                : "w-3 bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}