import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../store/slices/reservationsSlice';
import type { Reservation } from '../types';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Reservations: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkIn: '',
    checkOut: '',
    numberOfGuests: 1,
    cabinId: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const reservation: Reservation = {
      id: crypto.randomUUID(),
      ...formData,
      totalPrice: 0, // Calculate based on cabin price and duration
    };

    try {
      // Send email notification
      await emailjs.send(
        'service_your_service_id',
        'template_your_template_id',
        {
          to_email: 'edonaire.audiovisual@gmail.com',
          guest_name: formData.guestName,
          guest_email: formData.guestEmail,
          guest_phone: formData.guestPhone,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          guests: formData.numberOfGuests,
        },
        'your_public_key'
      );

      dispatch(addReservation(reservation));
      toast.success('¡Reserva realizada con éxito!');
      setFormData({
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        checkIn: '',
        checkOut: '',
        numberOfGuests: 1,
        cabinId: '',
      });
    } catch (error) {
      toast.error('Error al procesar la reserva. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reserva tu Cabaña</h1>
          <p className="text-xl text-gray-600">Completa el formulario para hacer tu reserva</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="guestName"
                value={formData.guestName}
                onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="guestEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="guestEmail"
                value={formData.guestEmail}
                onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="guestPhone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="guestPhone"
                value={formData.guestPhone}
                onChange={(e) => setFormData({ ...formData, guestPhone: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Entrada
                </label>
                <input
                  type="date"
                  id="checkIn"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Salida
                </label>
                <input
                  type="date"
                  id="checkOut"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-2">
                Número de Huéspedes
              </label>
              <input
                type="number"
                id="numberOfGuests"
                min="1"
                max="8"
                value={formData.numberOfGuests}
                onChange={(e) => setFormData({ ...formData, numberOfGuests: parseInt(e.target.value) })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? 'Procesando...' : 'Confirmar Reserva'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;