import React from 'react';
import { Star, Heart, Users, Wifi, Coffee, Tv, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';

const cabins = [
  {
    id: '1',
    name: 'Cabaña del Lago',
    description: 'Hermosa cabaña con vista directa al lago, perfecta para parejas que buscan una escapada romántica.',
    price: 15000,
    capacity: 2,
    rating: 4.8,
    reviews: 124,
    likes: 356,
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['WiFi', 'Cocina', 'TV', 'Baño privado']
  },
  {
    id: '2',
    name: 'Cabaña Familiar',
    description: 'Espaciosa cabaña de dos plantas ideal para familias, con área de juegos y terraza panorámica.',
    price: 25000,
    capacity: 6,
    rating: 4.9,
    reviews: 89,
    likes: 245,
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['WiFi', 'Cocina completa', 'TV Smart', 'Baños privados']
  },
  {
    id: '3',
    name: 'Cabaña del Bosque',
    description: 'Íntima cabaña rodeada de pinos, perfecta para los amantes de la naturaleza y la tranquilidad.',
    price: 18000,
    capacity: 4,
    rating: 4.7,
    reviews: 156,
    likes: 412,
    images: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['WiFi', 'Cocina', 'TV', 'Baño privado']
  }
];

const CabinCard: React.FC<{ cabin: typeof cabins[0] }> = ({ cabin }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img 
          src={cabin.images[0]} 
          alt={cabin.name}
          className="w-full h-64 object-cover"
        />
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md transition-transform hover:scale-110"
        >
          <Heart 
            className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{cabin.name}</h3>
          <p className="text-2xl font-bold text-teal-600">
            ${cabin.price.toLocaleString()}
            <span className="text-sm text-gray-500">/noche</span>
          </p>
        </div>

        <p className="text-gray-600 mb-4">{cabin.description}</p>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-semibold">{cabin.rating}</span>
            <span className="text-gray-500 ml-1">({cabin.reviews} reseñas)</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 text-gray-500" />
            <span className="ml-1">Hasta {cabin.capacity} personas</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex space-x-4">
            {cabin.amenities.includes('WiFi') && (
              <Wifi className="w-5 h-5 text-gray-500" title="WiFi" />
            )}
            {cabin.amenities.includes('Cocina') && (
              <Coffee className="w-5 h-5 text-gray-500" title="Cocina" />
            )}
            {cabin.amenities.includes('TV') && (
              <Tv className="w-5 h-5 text-gray-500" title="TV" />
            )}
            {cabin.amenities.includes('Baño privado') && (
              <Bath className="w-5 h-5 text-gray-500" title="Baño privado" />
            )}
          </div>
        </div>

        <Link 
          to={`/reservas?cabin=${cabin.id}`}
          className="block w-full bg-teal-500 text-white text-center py-3 rounded-lg font-semibold transition-colors hover:bg-teal-600"
        >
          Reservar Ahora
        </Link>
      </div>
    </div>
  );
};

const Cabins: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Cabañas</h1>
          <p className="text-xl text-gray-600">
            Descubre el perfecto refugio para tu próxima escapada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabins.map((cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cabins;