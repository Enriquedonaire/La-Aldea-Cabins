import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'service_your_service_id',
        'template_your_template_id',
        {
          to_email: 'edonaire.audiovisual@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'your_public_key'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      toast.success('¡Mensaje enviado con éxito!');
    } catch (error) {
      setStatus('error');
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="pt-16">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200">
                  <Phone className="text-teal-500 w-6 h-6 mr-4" />
                  <span className="text-gray-700">+54 8 7854 45-7387</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200">
                  <Mail className="text-teal-500 w-6 h-6 mr-4" />
                  <span className="text-gray-700">aldeareservas@proton.me</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200">
                  <MapPin className="text-teal-500 w-6 h-6 mr-4" />
                  <span className="text-gray-700">Juan B. Justo 146 - Palermo, Argentina</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              <h3 className="text-xl font-semibold mb-4">Horario de Atención</h3>
              <p className="text-gray-700">
                Lunes a Domingo: 8:00 - 20:00
                <br />
                Consultas de reservas 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;