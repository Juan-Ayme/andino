'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, Share2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    reviews: number;
    stock: number;
    artisan: {
      name: string;
      id: number;
      location: string;
      rating: number;
    };
    images: string[];
    details: string[];
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.min(product.stock, value)));
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "relative aspect-square rounded-lg overflow-hidden",
                    selectedImage === index && "ring-2 ring-primary-500"
                  )}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
            
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-neutral-200"
                    )}
                  />
                ))}
                <span className="ml-2 text-sm text-neutral-600">
                  ({product.reviews} reseñas)
                </span>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  isLiked ? "text-red-500" : "text-neutral-400 hover:text-red-500"
                )}
              >
                <Heart className={cn("h-6 w-6", isLiked && "fill-current")} />
              </button>
              <button className="p-2 rounded-full text-neutral-400 hover:text-primary-500 transition-colors">
                <Share2 className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-neutral-900">
                S/ {product.price.toFixed(2)}
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Stock disponible: {product.stock} unidades
              </p>
            </div>

            <div className="mt-6">
              <p className="text-neutral-600">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Detalles del Producto</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
              <div className="flex items-center">
                <div>
                  <h3 className="font-medium text-neutral-900">Artesano</h3>
                  <Link 
                    href={`/artesanos/${product.artisan.id}`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {product.artisan.name}
                  </Link>
                  <p className="text-sm text-neutral-500">{product.artisan.location}</p>
                </div>
                <div className="ml-auto flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{product.artisan.rating}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="text-neutral-700">Cantidad:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                  min="1"
                  max={product.stock}
                  className="w-20 px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="flex space-x-4">
                <Button className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Añadir al Carrito
                </Button>
                <Button variant="outline" className="flex-1">
                  Personalizar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}