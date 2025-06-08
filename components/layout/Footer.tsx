import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 w-10 mr-3">
                <Sparkles className="h-10 w-10 text-primary-400 group-hover:text-primary-300 transition-colors" />
              </div>
              <span className="font-playfair text-xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors">
                ArteAndino<span className="text-secondary-400">.pe</span>
              </span>
            </Link>
            <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
              Conectando artesanos ayacuchanos con el mundo, preservando el patrimonio cultural andino a través del arte y la innovación.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-neutral-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-neutral-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-neutral-800">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/artesanos" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Artesanos
                </Link>
              </li>
              <li>
                <Link href="/personalizar" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Personalizar
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Categorías</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/productos/textiles" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Textiles Ayacuchanos
                </Link>
              </li>
              <li>
                <Link href="/productos/ceramica" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Cerámica
                </Link>
              </li>
              <li>
                <Link href="/productos/retablos" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Retablos
                </Link>
              </li>
              <li>
                <Link href="/productos/tallados" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Tallados en Piedra
                </Link>
              </li>
              <li>
                <Link href="/productos/innovacion" className="text-neutral-300 hover:text-primary-400 transition-colors text-sm block py-1">
                  Artesanía Innovadora
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  Av. Independencia 123, Ayacucho, Perú
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">+51 966 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">info@arteandino.pe</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-3">Horarios de Atención</h4>
              <p className="text-neutral-400 text-xs">
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} ArteAndino.pe. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/terminos" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/cookies" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}