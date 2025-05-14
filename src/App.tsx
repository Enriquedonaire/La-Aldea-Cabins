import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reservations from './pages/Reservations';
import Cabins from './pages/Cabins';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservas" element={<Reservations />} />
            <Route path="/cabanas" element={<Cabins />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;