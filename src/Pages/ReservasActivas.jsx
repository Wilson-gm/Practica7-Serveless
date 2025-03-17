import React, { useEffect, useState } from "react";
import { obtenerReservas, eliminarReserva } from "../services/api";
import ReservaList from "../components/ReservaList";

const ReservasActivas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    const todasLasReservas = await obtenerReservas();
    const ahora = new Date();

    const reservasActivas = todasLasReservas.filter(reserva => {
      const fechaReserva = new Date(`${reserva.fecha}T${reserva.hora}:00`);
      return fechaReserva > ahora && (fechaReserva - ahora) > 3600000; // Mayor a una hora
    });
    setReservas(reservasActivas);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Reservas Activas</h2>
      <ReservaList reservas={reservas} eliminarReserva={eliminarReserva} actualizarReservas={cargarReservas} />
    </div>
  );
};

export default ReservasActivas;