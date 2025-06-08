import ProductGrid from '@/components/productos/ProductGrid';
import ProductFilters from '@/components/productos/ProductFilters';
import { Button } from '@/components/ui/button';
import { Grid2X2, LayoutList } from 'lucide-react';

export default function ProductosPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Nuestros Productos</h1>
            <p className="mt-2 text-neutral-600">Descubre nuestra colección de artesanías ayacuchanas</p>
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
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}