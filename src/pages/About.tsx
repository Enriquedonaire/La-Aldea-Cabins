import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre La Aldea</h1>
          <p className="text-xl text-gray-600">Descubre nuestra historia y compromiso con la naturaleza</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              La Aldea nació de un sueño de crear un espacio donde las personas pudieran
              reconectarse con la naturaleza sin renunciar al confort. Desde 2015,
              hemos estado ofreciendo experiencias únicas en nuestras cabañas,
              combinando la belleza natural con comodidades modernas.
            </p>
            <p className="text-gray-600">
              Ubicados en un entorno privilegiado, nuestras cabañas han sido
              diseñadas para integrarse perfectamente con el paisaje, minimizando
              nuestro impacto ambiental mientras maximizamos la experiencia de
              nuestros huéspedes.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80"
              alt="Cabaña en el bosque"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-3">Misión</h3>
            <p className="text-gray-600">
              Proporcionar experiencias únicas de alojamiento que conecten a
              nuestros huéspedes con la naturaleza, mientras mantenemos los más
              altos estándares de confort y servicio.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-3">Visión</h3>
            <p className="text-gray-600">
              Ser reconocidos como el destino líder en turismo sostenible,
              ofreciendo experiencias memorables en armonía con el entorno natural.
            </p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-3">Valores</h3>
            <p className="text-gray-600">
              Sostenibilidad, excelencia en el servicio, respeto por la naturaleza
              y compromiso con la comunidad local.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;