'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Example featured products data
const featuredProducts = [
  {
    id: 1,
    name: 'Retablo Ayacuchano Tradicional',
    description: 'Retablo hecho a mano con escenas tradicionales ayacuchanas',
    price: 250,
    image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Retablos',
    artisan: 'Manuel Huamán'
  },
  {
    id: 2,
    name: 'Tapiz de Lana Natural',
    description: 'Tapiz tejido a mano con tintes naturales y diseños ancestrales',
    price: 180,
    image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Textiles',
    artisan: 'María Quispe'
  },
  {
    id: 3,
    name: 'Escultura en Piedra de Huamanga',
    description: 'Delicada escultura tallada en piedra de Huamanga con motivos andinos',
    price: 320,
    image: 'https://images.pexels.com/photos/11055526/pexels-photo-11055526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Tallados',
    artisan: 'José Cárdenas'
  },
  {
    id: 4,
    name: 'Cerámica Decorativa Tradicional',
    description: 'Pieza de cerámica decorativa con diseños precolombinos',
    price: 150,
    image: 'https://images.pexels.com/photos/6046220/pexels-photo-6046220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cerámica',
    artisan: 'Luisa Mendoza'
  }
];

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedProducts(prev => 
      prev.includes(id) ? prev.filter(prodId => prodId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">Productos Destacados</h2>
          <p className="mt-2 text-neutral-600">Descubre nuestra selección de artesanías excepcionales</p>
        </div>
        <Link 
          href="/productos" 
          className="hidden md:flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          Ver todos
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div 
            key={product.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 product-card"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={cn(
                  "object-cover transition-transform duration-500",
                  hoveredProduct === product.id ? "scale-110" : "scale-100"
                )}
              />
              <div 
                className={cn(
                  "absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300",
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                )}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleLike(product.id);
                }}
                className={cn(
                  "absolute top-3 right-3 p-2 rounded-full transition-all",
                  likedProducts.includes(product.id) 
                    ? "bg-white text-secondary-500" 
                    : "bg-white/80 text-neutral-500 hover:bg-white hover:text-secondary-500"
                )}
              >
                <Heart className={cn(
                  "h-5 w-5",
                  likedProducts.includes(product.id) ? "fill-secondary-500" : ""
                )} />
              </button>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded">
                  {product.category}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <Link href={`/productos/item/${product.id}`}>
                <h3 className="text-lg font-medium text-neutral-900 mb-1 hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-neutral-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-medium text-neutral-900">
                  S/ {product.price.toFixed(2)}
                </span>
                <span className="text-xs text-neutral-500">
                  Por: {product.artisan}
                </span>
              </div>
            </div>
            
            <div 
              className={cn(
                "absolute inset-x-0 bottom-0 p-4 bg-white transform transition-transform duration-300 flex justify-between space-x-2",
                hoveredProduct === product.id ? "translate-y-0" : "translate-y-full"
              )}
            >
              <Link 
                href={`/productos/item/${product.id}`}
                className="flex-1 px-3 py-2 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-center"
              >
                Ver Detalles
              </Link>
              <button className="flex-1 px-3 py-2 text-sm border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors">
                Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link 
          href="/productos" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          Ver todos los productos
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}