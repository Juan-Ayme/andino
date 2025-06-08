'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This would normally come from an API
const artisan = {
  id: 1,
  name: 'María Quispe',
  specialty: 'Textiles',
  location: 'Quinua, Ayacucho',
  rating: 4.8,
  reviews: 124,
  image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg',
  coverImage: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
  bio: 'Especialista en textiles tradicionales ayacuchanos con más de 25 años de experiencia. Aprendí este arte de mi abuela y he dedicado mi vida a preservar y evolucionar estas técnicas ancestrales.',
  story: 'Mi historia con los textiles comenzó cuando era niña, observando a mi abuela tejer en su antiguo telar. Cada pieza que creo lleva consigo no solo los patrones tradicionales de nuestra región, sino también las historias y el significado cultural que han pasado de generación en generación.',
  products: [
    {
      id: 1,
      name: 'Tapiz de Lana Natural',
      price: 180,
      image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg'
    },
    {
      id: 2,
      name: 'Manta Tradicional',
      price: 250,
      image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg'
    }
  ],
  awards: [
    'Premio Nacional de Artesanía 2020',
    'Reconocimiento a la Excelencia Artesanal UNESCO 2019',
    'Medalla de Oro en Feria Artesanal de Ayacucho 2018'
  ],
  techniques: [
    'Tejido a telar de cintura',
    'Tintes naturales tradicionales',
    'Iconografía tradicional ayacuchana',
    'Técnicas de tejido fino'
  ]
};

export default function ArtisanProfilePage() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen pt-16">
      {/* Cover Image */}
      <div className="relative h-64 lg:h-96">
        <Image
          src={artisan.coverImage}
          alt={`${artisan.name} workspace`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-32 pb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="relative h-32 w-32 rounded-full overflow-hidden ring-4 ring-white">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 sm:mt-0 text-center sm:text-left">
                  <h1 className="text-3xl font-bold text-neutral-900">{artisan.name}</h1>
                  <p className="text-lg text-neutral-600">{artisan.specialty}</p>
                  <div className="mt-2 flex items-center justify-center sm:justify-start">
                    <MapPin className="h-5 w-5 text-neutral-400" />
                    <span className="ml-2 text-neutral-600">{artisan.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contactar
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar
                </Button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t pt-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-2 font-medium">{artisan.rating}</span>
                <span className="ml-1 text-neutral-500">({artisan.reviews} reseñas)</span>
              </div>
              <div className="flex space-x-2">
                {artisan.techniques.map((technique, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700"
                  >
                    {technique}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="about">Sobre el Artesano</TabsTrigger>
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="awards">Reconocimientos</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Historia</h2>
              <p className="text-neutral-600 mb-6">{artisan.story}</p>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Técnicas</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {artisan.techniques.map((technique, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-primary-500 mr-2" />
                    <span>{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisan.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/productos/item/${product.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-neutral-900">{product.name}</h3>
                    <p className="mt-1 text-neutral-600">S/ {product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="awards" className="mt-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Reconocimientos y Premios</h2>
              <div className="space-y-6">
                {artisan.awards.map((award, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-neutral-900">{award}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}