import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Artesanía Auténtica',
    description: 'Cada pieza certificada y elaborada por artesanos ayacuchanos siguiendo técnicas tradicionales.'
  },
  {
    id: 2,
    title: 'Personalización Única',
    description: 'Diseña tu propia pieza artesanal adaptada a tus gustos y necesidades específicas.'
  },
  {
    id: 3,
    title: 'Impacto Social Directo',
    description: 'Tu compra genera ingresos directos para las familias artesanas y sus comunidades.'
  },
  {
    id: 4,
    title: 'Preservación Cultural',
    description: 'Ayudas a mantener vivas tradiciones ancestrales y técnicas en riesgo de desaparecer.'
  }
];

export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Artesano trabajando en taller tradicional"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <p className="text-sm text-neutral-700 italic">
              "Cada pieza que creamos lleva consigo nuestra historia, tradición y el alma de nuestras comunidades."
            </p>
            <div className="mt-2 flex items-center">
              <div className="h-8 w-8 rounded-full overflow-hidden relative mr-2">
                <Image
                  src="https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Artesano"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-medium">José Cárdenas, Maestro Artesano</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Conectando Tradición con Innovación</h2>
          <p className="text-neutral-700 mb-6">
            ArteAndino.pe nace con la misión de preservar el patrimonio cultural ayacuchano mientras creamos oportunidades económicas sostenibles para nuestros artesanos. 
            Combinamos técnicas ancestrales con tecnología moderna para llevar piezas únicas personalizadas a hogares de todo el mundo.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary-600 mt-0.5 mr-2 shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Link 
            href="/nosotros" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            Conoce más sobre nuestra historia
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}