export interface Cabin {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  images: string[];
  amenities: string[];
}

export interface Reservation {
  id: string;
  cabinId: string;
  checkIn: string;
  checkOut: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  numberOfGuests: number;
  totalPrice: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}