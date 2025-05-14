import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Trees } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <Trees className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-semibold text-gray-900">La Aldea</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-teal-500 transition">
              Inicio
            </Link>
            <Link to="/cabanas" className="text-gray-700 hover:text-teal-500 transition">
              Cabañas
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-teal-500 transition">
              Nosotros
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-teal-500 transition">
              Contacto
            </Link>
            <Link
              to="/reservas"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
            >
              Reservar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-500"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition"
            >
              Inicio
            </Link>
            <Link
              to="/cabanas"
              className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition"
            >
              Cabañas
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition"
            >
              Nosotros
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition"
            >
              Contacto
            </Link>
            <Link
              to="/reservas"
              className="block px-3 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
            >
              Reservar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;