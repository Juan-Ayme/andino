import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-neutral-900 mb-6">Nuestra Historia</h1>
            <p className="text-lg text-neutral-600 mb-6">
              ArteAndino.pe nace con la misión de preservar el patrimonio cultural ayacuchano mientras creamos oportunidades económicas sostenibles para nuestros artesanos.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              Combinamos técnicas ancestrales con tecnología moderna para llevar piezas únicas personalizadas a hogares de todo el mundo.
            </p>
            <Button className="flex items-center">
              Conoce a nuestros artesanos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg"
              alt="Artesano trabajando"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}