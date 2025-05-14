import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">La Aldea</h3>
            <p className="text-gray-300">
              Tu escape perfecto en medio de la naturaleza. Descubre nuestras cabañas
              y vive una experiencia única.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+54 8 7854 45-7387</span>
              </p>
              <p className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>aldeareservas@proton.me</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-500 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-500 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-teal-500 transition">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} La Aldea. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;