'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const artisans = [
  {
    id: 1,
    name: 'María Quispe',
    specialty: 'Textiles',
    location: 'Quinua, Ayacucho',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg',
    bio: 'Especialista en textiles tradicionales ayacuchanos con más de 25 años de experiencia.'
  },
  {
    id: 2,
    name: 'José Cárdenas',
    specialty: 'Tallados en Piedra',
    location: 'Huamanga, Ayacucho',
    rating: 4.9,
    reviews: 98,
    image: 'https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg',
    bio: 'Maestro tallador de piedra de Huamanga, preservando técnicas ancestrales.'
  },
  // Add more artisans...
];

export default function ArtisanGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artisans.map((artisan) => (
        <div key={artisan.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-64">
            <Image
              src={artisan.image}
              alt={artisan.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">{artisan.name}</h3>
                <p className="text-neutral-600">{artisan.specialty}</p>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm font-medium">{artisan.rating}</span>
                <span className="ml-1 text-sm text-neutral-500">({artisan.reviews})</span>
              </div>
            </div>
            
            <div className="flex items-center text-neutral-600 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{artisan.location}</span>
            </div>
            
            <p className="text-neutral-700 mb-6">{artisan.bio}</p>
            
            <div className="flex gap-4">
              <Button asChild className="flex-1">
                <Link href={`/artesanos/${artisan.id}`}>Ver Perfil</Link>
              </Button>
              <Button variant="outline" className="flex-1">
                <Link href={`/productos?artisan=${artisan.id}`}>Ver Productos</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}