import { notFound } from 'next/navigation';
import ProductGrid from '@/components/productos/ProductGrid';
import ProductFilters from '@/components/productos/ProductFilters';
import { Button } from '@/components/ui/button';
import { Grid2X2, LayoutList } from 'lucide-react';

// Valid categories
const validCategories = ['textiles', 'ceramica', 'retablos', 'tallados'];

// Products data by category
const productsByCategory = {
  textiles: [
    {
      id: 1,
      name: 'Tapiz de Lana Natural',
      price: 180,
      image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
      category: 'Textiles',
      artisan: 'María Quispe'
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
  ],
  ceramica: [
    {
      id: 3,
      name: 'Cerámica Decorativa',
      price: 150,
      image: 'https://images.pexels.com/photos/6046220/pexels-photo-6046220.jpeg',
      category: 'Cerámica',
      artisan: 'Ana López'
    },
    {
      id: 7,
      name: 'Vasija Ceremonial',
      price: 280,
      image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
      category: 'Cerámica',
      artisan: 'Pedro Sánchez'
    },
    {
      id: 8,
      name: 'Plato Decorativo',
      price: 120,
      image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg',
      category: 'Cerámica',
      artisan: 'Ana López'
    }
  ],
  retablos: [
    {
      id: 2,
      name: 'Retablo Ayacuchano Tradicional',
      price: 250,
      image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg',
      category: 'Retablos',
      artisan: 'Manuel Huamán'
    },
    {
      id: 9,
      name: 'Retablo Navideño',
      price: 320,
      image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
      category: 'Retablos',
      artisan: 'Manuel Huamán'
    },
    {
      id: 10,
      name: 'Retablo Costumbrista',
      price: 280,
      image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg',
      category: 'Retablos',
      artisan: 'Carlos Flores'
    }
  ],
  tallados: [
    {
      id: 4,
      name: 'Escultura en Piedra de Huamanga',
      price: 320,
      image: 'https://images.pexels.com/photos/11055526/pexels-photo-11055526.jpeg',
      category: 'Tallados',
      artisan: 'José Cárdenas'
    },
    {
      id: 11,
      name: 'Figura Decorativa',
      price: 180,
      image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
      category: 'Tallados',
      artisan: 'José Cárdenas'
    },
    {
      id: 12,
      name: 'Medallón Tallado',
      price: 150,
      image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg',
      category: 'Tallados',
      artisan: 'Miguel Torres'
    }
  ]
};

export function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }));
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Check if category is valid
  if (!validCategories.includes(params.category)) {
    notFound();
  }

  const categoryTitles = {
    textiles: 'Textiles Ayacuchanos',
    ceramica: 'Cerámica Tradicional',
    retablos: 'Retablos Artesanales',
    tallados: 'Tallados en Piedra'
  };

  const categoryDescriptions = {
    textiles: 'Descubre nuestra colección de textiles tradicionales ayacuchanos, tejidos a mano con técnicas ancestrales y tintes naturales.',
    ceramica: 'Explora nuestras piezas de cerámica hechas a mano, cada una con diseños únicos que reflejan la rica tradición alfarera de Ayacucho.',
    retablos: 'Conoce nuestros retablos elaborados por maestros artesanos, verdaderas obras de arte que narran historias de la cultura andina.',
    tallados: 'Admira nuestras esculturas talladas en piedra de Huamanga, piezas únicas que combinan tradición y maestría artesanal.'
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">
              {categoryTitles[params.category as keyof typeof categoryTitles]}
            </h1>
            <p className="mt-2 text-neutral-600 max-w-3xl">
              {categoryDescriptions[params.category as keyof typeof categoryDescriptions]}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-neutral-100 rounded-lg p-1">
              <Button variant="ghost" size="sm" className="px-3">
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="px-3">
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ProductFilters />
          <div className="lg:col-span-3">
            <ProductGrid products={productsByCategory[params.category as keyof typeof productsByCategory]} />
          </div>
        </div>
      </div>
    </div>
  );
}