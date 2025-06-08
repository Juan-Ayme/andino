'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

const categories = [
  { id: 'textiles', label: 'Textiles' },
  { id: 'ceramica', label: 'Cerámica' },
  { id: 'retablos', label: 'Retablos' },
  { id: 'tallados', label: 'Tallados en Piedra' },
];

const artisans = [
  { id: 'maria-quispe', label: 'María Quispe' },
  { id: 'jose-cardenas', label: 'José Cárdenas' },
  { id: 'manuel-huaman', label: 'Manuel Huamán' },
];

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Categorías</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox id={category.id} />
              <label htmlFor={category.id} className="ml-2 text-sm text-neutral-600">
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Rango de Precio</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={1000}
          step={10}
          className="mt-2"
        />
        <div className="flex justify-between mt-2">
          <span className="text-sm text-neutral-600">S/ {priceRange[0]}</span>
          <span className="text-sm text-neutral-600">S/ {priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Artesanos</h3>
        <div className="space-y-3">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="flex items-center">
              <Checkbox id={artisan.id} />
              <label htmlFor={artisan.id} className="ml-2 text-sm text-neutral-600">
                {artisan.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}