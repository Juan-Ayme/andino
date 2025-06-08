import ProductDetails from '@/components/productos/ProductDetails';

// Example products data - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: 'Retablo Ayacuchano Tradicional',
    description: 'Hermoso retablo ayacuchano hecho a mano con escenas tradicionales que representan la rica cultura de nuestra región. Cada pieza es única y está elaborada con técnicas ancestrales transmitidas de generación en generación.',
    price: 250,
    rating: 4.8,
    reviews: 124,
    stock: 5,
    artisan: {
      name: 'Manuel Huamán',
      id: 3,
      location: 'San Juan Bautista, Ayacucho',
      rating: 4.9
    },
    images: [
      'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg',
      'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
      'https://images.pexels.com/photos/11055526/pexels-photo-11055526.jpeg'
    ],
    details: [
      'Dimensiones: 40cm x 60cm',
      'Material: Madera de cedro',
      'Pintado a mano',
      'Incluye certificado de autenticidad',
      'Empaque especial para envío seguro'
    ]
  },
  {
    id: 2,
    name: 'Tapiz de Lana Natural',
    description: 'Tapiz tejido a mano con tintes naturales y diseños ancestrales que representan la cosmovisión andina.',
    price: 180,
    rating: 4.7,
    reviews: 98,
    stock: 3,
    artisan: {
      name: 'María Quispe',
      id: 1,
      location: 'Quinua, Ayacucho',
      rating: 4.8
    },
    images: [
      'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
      'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg',
      'https://images.pexels.com/photos/6045788/pexels-photo-6045788.jpeg'
    ],
    details: [
      'Dimensiones: 100cm x 150cm',
      'Material: Lana de oveja',
      'Tintes naturales',
      'Tejido a mano',
      'Diseños tradicionales'
    ]
  },
  {
    id: 'retablos',
    name: 'Colección de Retablos',
    description: 'Explora nuestra colección de retablos ayacuchanos tradicionales.',
    price: 0,
    rating: 0,
    reviews: 0,
    stock: 0,
    artisan: {
      name: 'Varios Artesanos',
      id: 0,
      location: 'Ayacucho',
      rating: 0
    },
    images: [
      'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg'
    ],
    details: []
  }
];

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString()
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return <ProductDetails product={product} />;
}