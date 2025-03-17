import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NuevaReserva from "./Pages/NuevaReserva";
import ReservasActivas from "./Pages/ReservasActivas";
import ReservasPasadas from "./Pages/ReservasPasadas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<NuevaReserva />} />
          <Route path="/nueva-reserva" element={<NuevaReserva />} />
          <Route path="/reservas-activas" element={<ReservasActivas />} />
          <Route path="/reservas-pasadas" element={<ReservasPasadas />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
