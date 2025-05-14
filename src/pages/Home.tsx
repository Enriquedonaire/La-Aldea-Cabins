import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const cabinImages = [
  'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1920&q=80'
];

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section with Carousel */}
      <section className="relative h-[80vh]">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {cabinImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Bienvenidos a La Aldea</h1>
                    <p className="text-xl mb-8">Tu escape perfecto en medio de la naturaleza</p>
                    <Link
                      to="/reservas"
                      className="bg-teal-500 text-white px-8 py-3 rounded-md hover:bg-teal-600 transition"
                    >
                      Reserva Ahora
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir La Aldea?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ubicación Privilegiada</h3>
              <p className="text-gray-600">Rodeado de naturaleza y tranquilidad</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cabañas Equipadas</h3>
              <p className="text-gray-600">Todo lo necesario para tu comodidad</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atención 24/7</h3>
              <p className="text-gray-600">Siempre disponibles para ayudarte</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;