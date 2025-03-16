import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import NuevaReserva from "./Pages/NuevaReserva"; // ✅ Cambió de "Home" a "NuevaReserva"
import ReservasActivas from "./Pages/ReservasActivas";
import ReservasPasadas from "./Pages/ReservasPasadas";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [reservas, setReservas] = useState([]);

  const registrarReserva = (nuevaReserva) => {
    setReservas([...reservas, nuevaReserva]); // Simulación (reemplázalo con API)
    console.log("Reserva registrada:", nuevaReserva);
  };

  return (
    <BrowserRouter>
      <Header />
      <main className="p-4 min-h-screen">
        <Routes>
          {/* ✅ Ahora la app inicia en Reservas Activas */}
          <Route path="/" element={<Navigate to="/reservas-activas" replace />} />
          <Route path="/reservas-activas" element={<ReservasActivas reservas={reservas} />} />
          <Route path="/reservas-pasadas" element={<ReservasPasadas />} />
          <Route path="/nueva-reserva" element={<NuevaReserva registrarReserva={registrarReserva} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
