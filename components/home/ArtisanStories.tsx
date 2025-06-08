'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

// Example artisan stories
const artisans = [
  {
    id: 1,
    name: 'María Quispe',
    specialty: 'Textiles',
    image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    story: 'María aprendió a tejer a los 7 años con su abuela. Sus diseños combinan símbolos ancestrales con interpretaciones contemporáneas. Cada uno de sus textiles cuenta una historia única de la cosmovisión andina.',
    location: 'Quinua, Ayacucho',
    yearsOfExperience: 25
  },
  {
    id: 2,
    name: 'José Cárdenas',
    specialty: 'Tallados en Piedra',
    image: 'https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    story: 'José es un maestro en el tallado de piedra de Huamanga, una tradición familiar que se remonta a cinco generaciones. Su precisión y creatividad han llevado sus obras a exhibiciones internacionales.',
    location: 'Huamanga, Ayacucho',
    yearsOfExperience: 32
  },
  {
    id: 3,
    name: 'Manuel Huamán',
    specialty: 'Retablos',
    image: 'https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    story: 'Manuel es reconocido por sus detallados retablos que plasman escenas cotidianas y festividades andinas. Su técnica única combina materiales tradicionales con innovaciones propias.',
    location: 'San Juan Bautista, Ayacucho',
    yearsOfExperience: 28
  }
];

export default function ArtisanStories() {
  const [activeArtisan, setActiveArtisan] = useState(0);

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">Conoce a Nuestros Artesanos</h2>
          <p className="mt-2 text-neutral-600">Las manos talentosas detrás de cada pieza</p>
        </div>
        <Link 
          href="/artesanos" 
          className="hidden md:flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          Conocer a todos
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Artisan image */}
        <div className="relative h-96 lg:h-full rounded-lg overflow-hidden">
          {artisans.map((artisan, index) => (
            <div 
              key={artisan.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                activeArtisan === index ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={artisan.image}
                alt={artisan.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{artisan.name}</h3>
                <p className="text-white/80">{artisan.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Artisan stories */}
        <div className="flex flex-col space-y-6">
          {artisans.map((artisan, index) => (
            <div 
              key={artisan.id}
              className={cn(
                "bg-white p-6 rounded-lg border transition-all cursor-pointer",
                activeArtisan === index 
                  ? "border-primary-500 shadow-md" 
                  : "border-neutral-200 hover:border-primary-300"
              )}
              onClick={() => setActiveArtisan(index)}
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">{artisan.name}</h4>
                  <p className="text-sm text-neutral-600">{artisan.specialty} • {artisan.location}</p>
                </div>
              </div>
              
              <p className="text-neutral-700 mb-4">
                {artisan.story}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-500">{artisan.yearsOfExperience} años de experiencia</span>
                <Link 
                  href={`/artesanos/${artisan.id}`}
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center"
                >
                  Ver perfil
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
          
          <div className="text-center lg:hidden mt-4">
            <Link 
              href="/artesanos" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              Conocer a todos los artesanos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}