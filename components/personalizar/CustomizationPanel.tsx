'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Shapes, 
  Image as ImageIcon, 
  Share2,
  ShoppingCart 
} from 'lucide-react';

export default function CustomizationPanel() {
  const [color, setColor] = useState('#8B4513');
  const [size, setSize] = useState([1]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Tabs defaultValue="color">
        <TabsList className="grid grid-cols-3 gap-4 mb-6">
          <TabsTrigger value="color" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Color
          </TabsTrigger>
          <TabsTrigger value="size" className="flex items-center gap-2">
            <Shapes className="h-4 w-4" />
            Tamaño
          </TabsTrigger>
          <TabsTrigger value="texture" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Textura
          </TabsTrigger>
        </TabsList>

        <TabsContent value="color" className="space-y-4">
          <div className="grid grid-cols-6 gap-2">
            {['#8B4513', '#A0522D', '#6B4423', '#8B7355', '#CD853F', '#DEB887'].map((c) => (
              <button
                key={c}
                className="w-8 h-8 rounded-full border-2 transition-all"
                style={{ 
                  backgroundColor: c,
                  borderColor: color === c ? '#000' : 'transparent'
                }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="size" className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Altura</label>
            <Slider
              value={size}
              onValueChange={setSize}
              min={0.5}
              max={2}
              step={0.1}
            />
          </div>
        </TabsContent>

        <TabsContent value="texture" className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {['Madera', 'Piedra', 'Metal'].map((texture) => (
              <button
                key={texture}
                className="p-4 border rounded-lg hover:bg-neutral-50 transition-colors"
              >
                {texture}
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 space-y-4">
        <div className="flex gap-4">
          <Button className="flex-1" variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </Button>
          <Button className="flex-1">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Añadir al Carrito
          </Button>
        </div>

        <p className="text-sm text-neutral-500 text-center">
          * El precio final puede variar según las personalizaciones
        </p>
      </div>
    </div>
  );
}