'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  artisan: string;
}

interface ProductGridProps {
  products?: Product[];
}

// Default products if none provided
const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Retablo Ayacuchano Tradicional',
    price: 250,
    image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg',
    category: 'Retablos',
    artisan: 'Manuel Huamán'
  },
  {
    id: 2,
    name: 'Tapiz de Lana Natural',
    price: 180,
    image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
    category: 'Textiles',
    artisan: 'María Quispe'
  },
  {
    id: 3,
    name: 'Cerámica Decorativa',
    price: 150,
    image: 'https://images.pexels.com/photos/6046220/pexels-photo-6046220.jpeg',
    category: 'Cerámica',
    artisan: 'Ana López'
  },
  {
    id: 4,
    name: 'Escultura en Piedra de Huamanga',
    price: 320,
    image: 'https://images.pexels.com/photos/11055526/pexels-photo-11055526.jpeg',
    category: 'Tallados',
    artisan: 'José Cárdenas'
  },
  {
    id: 5,
    name: 'Manta Tradicional Ayacuchana',
    price: 220,
    image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg',
    category: 'Textiles',
    artisan: 'María Quispe'
  },
  {
    id: 6,
    name: 'Chal de Alpaca',
    price: 150,
    image: 'https://images.pexels.com/photos/6045788/pexels-photo-6045788.jpeg',
    category: 'Textiles',
    artisan: 'Rosa Mendoza'
  }
];

export default function ProductGrid({ products = defaultProducts }: ProductGridProps) {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const toggleLike = (id: number) => {
    setLikedProducts(prev => 
      prev.includes(id) ? prev.filter(prodId => prodId !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group product-card rounded-xl overflow-hidden transition-all duration-500"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={cn(
                "object-cover transition-transform duration-700",
                hoveredProduct === product.id ? "scale-110" : "scale-100"
              )}
            />
            
            {/* Overlay */}
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300",
                hoveredProduct === product.id ? "opacity-100" : "opacity-0"
              )}
            />
            
            {/* Action buttons */}
            <div className={cn(
              "absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300",
              hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            )}>
              <button
                onClick={() => toggleLike(product.id)}
                className={cn(
                  "p-2 rounded-full glass transition-all duration-300",
                  likedProducts.includes(product.id) 
                    ? "text-red-400 bg-red-500/20" 
                    : "text-white hover:text-red-400 hover:bg-red-500/20"
                )}
              >
                <Heart className={cn(
                  "h-5 w-5",
                  likedProducts.includes(product.id) ? "fill-red-400" : ""
                )} />
              </button>
              
              <Link
                href={`/productos/item/${product.id}`}
                className="p-2 rounded-full glass text-white hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300"
              >
                <Eye className="h-5 w-5" />
              </Link>
            </div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full">
                {product.category}
              </span>
            </div>
            
            {/* Quick actions */}
            <div className={cn(
              "absolute bottom-4 left-4 right-4 transition-all duration-300",
              hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <Button className="w-full glass text-white border-white/20 hover:bg-white/20">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Añadir al Carrito
              </Button>
            </div>
          </div>
          
          <div className="p-6">
            <Link href={`/productos/item/${product.id}`}>
              <h3 className="text-lg font-medium text-neutral-100 hover:text-primary-400 transition-colors group-hover:text-primary-400">
                {product.name}
              </h3>
            </Link>
            
            <p className="text-sm text-neutral-400 mt-1 flex items-center gap-1">
              <Star className="h-3 w-3 text-secondary-400" />
              Por: {product.artisan}
            </p>
            
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-primary-400 neon-text">
                S/ {product.price.toFixed(2)}
              </span>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-secondary-400 fill-secondary-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}