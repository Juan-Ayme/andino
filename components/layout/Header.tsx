'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, ShoppingCart, Search, User, X, Globe, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navigation = [
  { name: 'Inicio', href: '/' },
  { 
    name: 'Productos', 
    href: '/productos',
    submenu: [
      { name: 'Textiles', href: '/productos/textiles' },
      { name: 'Cerámica', href: '/productos/ceramica' },
      { name: 'Retablos', href: '/productos/retablos' },
      { name: 'Tallados en Piedra', href: '/productos/tallados' },
      { name: 'Todos los Productos', href: '/productos' },
    ] 
  },
  { name: 'Artesanos', href: '/artesanos' },
  { name: 'Personalizar', href: '/personalizar' },
  { name: 'Sobre Nosotros', href: '/nosotros' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-2xl py-2 border-b border-neutral-200" 
          : "bg-white/95 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-10 mr-3">
              <Sparkles className="h-10 w-10 text-primary-600 group-hover:text-primary-500 transition-colors" />
            </div>
            <span className={cn(
              "font-playfair text-xl font-bold transition-colors",
              "text-primary-600 group-hover:text-primary-500"
            )}>
              ArteAndino<span className="text-secondary-500">.pe</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button 
                    className={cn(
                      "flex items-center text-sm font-medium px-1 py-2 transition-all duration-300 hover:text-primary-600",
                      pathname.startsWith(item.href)
                        ? "text-primary-600 font-semibold" 
                        : "text-neutral-700"
                    )}
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link 
                    href={item.href}
                    className={cn(
                      "text-sm font-medium px-1 py-2 transition-all duration-300 hover:text-primary-600 relative",
                      pathname === item.href
                        ? "text-primary-600 font-semibold" 
                        : "text-neutral-700"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full" />
                    )}
                  </Link>
                )}

                {/* Dropdown for desktop */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right border border-neutral-100">
                    <div className="py-2" role="menu" aria-orientation="vertical">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                          role="menuitem"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50 rounded-lg">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/carrito" className="p-2 text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50 rounded-lg relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full">
                0
              </span>
            </Link>
            <Link href="/cuenta" className="p-2 text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50 rounded-lg">
              <User className="h-5 w-5" />
            </Link>
            <button className="p-2 text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50 rounded-lg">
              <Globe className="h-5 w-5" />
            </button>
            <button
              className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-all duration-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform ease-in-out duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <Sparkles className="h-10 w-10 text-primary-600 mr-3" />
            <span className="font-playfair text-xl font-bold text-primary-600">
              ArteAndino<span className="text-secondary-500">.pe</span>
            </span>
          </Link>
          <button
            className="p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-2 text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "h-5 w-5 transition-transform",
                        openSubmenu === item.name ? "transform rotate-180" : ""
                      )} />
                    </button>
                    {openSubmenu === item.name && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              href={subitem.href}
                              className="block py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-neutral-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/cuenta"
                className="flex items-center py-2 text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-5 w-5 mr-2" />
                Mi Cuenta
              </Link>
              <Link
                href="/carrito"
                className="flex items-center py-2 text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Carrito (0)
              </Link>
              <button className="flex items-center py-2 text-base font-medium text-neutral-700 hover:text-primary-600 transition-colors">
                <Globe className="h-5 w-5 mr-2" />
                <span>Español</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}