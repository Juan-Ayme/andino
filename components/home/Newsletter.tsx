'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Por favor ingresa tu correo electrónico.');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setError('');
      setEmail('');
    }, 500);
  };

  return (
    <section className="py-12">
      <div className="bg-primary-50 rounded-xl overflow-hidden pattern-bg">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Suscríbete a Nuestra Newsletter
          </h2>
          <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
            Recibe novedades sobre nuevas colecciones, historias de nuestros artesanos y ofertas exclusivas directamente en tu correo.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 text-green-800 px-4 py-3 rounded-md inline-flex items-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>¡Gracias por suscribirte! Pronto recibirás nuestras novedades.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-l-md border-y border-l border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tu correo electrónico"
                  aria-label="Dirección de correo electrónico"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-3 rounded-r-md hover:bg-primary-700 transition-colors flex items-center"
                >
                  <span className="mr-2 hidden sm:inline">Suscribirme</span>
                  <Send className="h-5 w-5" />
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
              <p className="mt-3 text-xs text-neutral-500">
                Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}