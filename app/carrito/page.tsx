'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, CreditCard, Truck, Shield, ArrowRight, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  artisan: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Retablo Ayacuchano Tradicional',
      price: 250,
      quantity: 1,
      image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg',
      artisan: 'Manuel Huamán'
    },
    {
      id: 2,
      name: 'Tapiz de Lana Natural',
      price: 180,
      quantity: 2,
      image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
      artisan: 'María Quispe'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'artesano10') {
      setDiscount(0.1);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-100 neon-text mb-4">Carrito de Compras</h1>
          <p className="text-neutral-400">Revisa tus productos antes de proceder al pago</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="card-dark">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-neutral-800' : ''}`}>
                    <div className="flex items-center">
                      <div className="relative h-24 w-24 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-lg font-medium text-neutral-100">{item.name}</h3>
                        <p className="mt-1 text-sm text-neutral-400">Por: {item.artisan}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-neutral-100 font-medium px-4 py-2 bg-neutral-800 rounded-lg">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-xl font-bold text-primary-400">
                              S/ {(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-neutral-400 hover:text-red-400 transition-colors p-2 hover:bg-red-500/10 rounded-lg"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="card-dark mt-6 p-6">
                <h3 className="text-lg font-medium text-neutral-100 mb-4 flex items-center gap-2">
                  <Gift className="h-5 w-5 text-secondary-400" />
                  Código Promocional
                </h3>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Ingresa tu código"
                    className="form-input flex-1"
                  />
                  <Button onClick={applyPromoCode} className="btn-secondary">
                    Aplicar
                  </Button>
                </div>
                {discount > 0 && (
                  <p className="text-green-400 text-sm mt-2">
                    ¡Código aplicado! Descuento del {(discount * 100)}%
                  </p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="card-dark p-6 sticky top-24">
                <h2 className="text-xl font-bold text-neutral-100 mb-6 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary-400" />
                  Resumen de la Orden
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-neutral-300">
                    <span>Subtotal</span>
                    <span>S/ {subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Descuento ({(discount * 100)}%)</span>
                      <span>-S/ {discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-neutral-300">
                    <span className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Envío
                    </span>
                    <span>{shipping === 0 ? 'Gratis' : `S/ ${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  {shipping === 0 && (
                    <p className="text-green-400 text-sm">
                      ¡Envío gratis por compras mayores a S/ 200!
                    </p>
                  )}
                  
                  <div className="border-t border-neutral-700 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-neutral-100">Total</span>
                      <span className="text-primary-400 neon-text">S/ {total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full btn-primary text-lg py-4 mt-6">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceder al Pago
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 text-neutral-400 text-sm mt-4">
                    <Shield className="h-4 w-4" />
                    <span>Pago 100% seguro y protegido</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t border-neutral-700">
                  <h3 className="text-sm font-medium text-neutral-300 mb-3">Métodos de pago aceptados</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-neutral-800 p-2 rounded text-center text-xs text-neutral-400">VISA</div>
                    <div className="bg-neutral-800 p-2 rounded text-center text-xs text-neutral-400">MC</div>
                    <div className="bg-neutral-800 p-2 rounded text-center text-xs text-neutral-400">AMEX</div>
                    <div className="bg-neutral-800 p-2 rounded text-center text-xs text-neutral-400">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="card-dark p-12 max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                <CreditCard className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-100 mb-4">Tu carrito está vacío</h2>
              <p className="text-neutral-400 mb-8">¿Por qué no exploras nuestra colección de artesanías únicas?</p>
              <Button asChild className="btn-primary">
                <Link href="/productos">
                  Explorar Productos
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}