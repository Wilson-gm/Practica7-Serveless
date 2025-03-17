import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NuevaReserva from "./Pages/NuevaReserva";
import ReservasActivas from "./Pages/ReservasActivas";
import ReservasPasadas from "./Pages/ReservasPasadas";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6 bg-gray-100">
          <div className="w-full max-w-4xl">
            <Routes>
              <Route path="/" element={<Navigate to="/reservas-activas" replace />} />
              <Route path="/reservas-activas" element={<ReservasActivas />} />
              <Route path="/reservas-pasadas" element={<ReservasPasadas />} />
              <Route path="/nueva-reserva" element={<NuevaReserva />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
