import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoriesSection from '@/components/home/CategoriesSection';
import ArtisanStories from '@/components/home/ArtisanStories';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <AboutSection />
        <FeaturedProducts />
        <CategoriesSection />
        <ArtisanStories />
        <TestimonialsSection />
        <Newsletter />
      </div>
    </div>
  );
}