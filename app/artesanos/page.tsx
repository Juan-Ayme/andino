import ArtisanGrid from '@/components/artesanos/ArtisanGrid';

export default function ArtesanosPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Nuestros Artesanos</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Conoce a los maestros artesanos que mantienen viva la tradición ayacuchana
          </p>
        </div>
        
        <ArtisanGrid />
      </div>
    </div>
  );
}