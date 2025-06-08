import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Example categories
const categories = [
  {
    id: 1,
    name: 'Textiles Ayacuchanos',
    description: 'Mantas, tapices y prendas con diseños tradicionales',
    image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 24,
    slug: 'textiles'
  },
  {
    id: 2,
    name: 'Retablos',
    description: 'Cajas escénicas tridimensionales con historias andinas',
    image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 18,
    slug: 'retablos'
  },
  {
    id: 3,
    name: 'Tallados en Piedra',
    description: 'Esculturas en piedra de Huamanga con detalles precisos',
    image: 'https://images.pexels.com/photos/11055526/pexels-photo-11055526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 15,
    slug: 'tallados'
  },
  {
    id: 4,
    name: 'Cerámica',
    description: 'Piezas de cerámica con técnicas ancestrales',
    image: 'https://images.pexels.com/photos/6046220/pexels-photo-6046220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 21,
    slug: 'ceramica'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">Explora por Categorías</h2>
          <p className="mt-2 text-neutral-600">Descubre la riqueza artesanal de Ayacucho</p>
        </div>
        <Link 
          href="/productos" 
          className="hidden md:flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          Ver todas
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/productos/${category.slug}`}
            className="group relative overflow-hidden rounded-lg shadow-sm h-80 transform transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute inset-0">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-sm text-white/80 mb-3">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm">{category.count} productos</span>
                <span className="flex items-center text-sm font-medium group-hover:underline">
                  Explorar
                  <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link 
          href="/productos" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          Ver todas las categorías
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}