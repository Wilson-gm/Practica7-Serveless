import React, { useEffect, useState } from "react";
import { obtenerReservas, eliminarReserva } from "../services/api";
import ReservaList from "../components/ReservaList";

const ReservasActivas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    try {
      const todasLasReservas = await obtenerReservas();
      console.log("📌 Reservas obtenidas de la API:", todasLasReservas);

      const ahora = new Date();
      ahora.setSeconds(0, 0);

      const reservasActivas = todasLasReservas.filter(reserva => {
        if (!reserva.fecha || !reserva.hora) return false;

        const horaFormateada = reserva.hora.padStart(5, "0");
        const fechaReserva = new Date(`${reserva.fecha}T${horaFormateada}:00`);

        return fechaReserva > ahora;
      });

      setReservas(reservasActivas);
    } catch (error) {
      console.error("❌ Error al obtener reservas:", error);
    }
  };

  // Función para eliminar y hacer refresh
  const handleEliminarReserva = async (id) => {
    try {
      await eliminarReserva(id);
      console.log("✅ Reserva eliminada correctamente.");
      window.location.reload(); 
    } catch (error) {
      console.error("❌ Error al eliminar reserva:", error);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">📌 Reservas Activas</h2>
      {reservas.length === 0 ? (
        <p className="text-gray-500 text-center py-4 text-lg">🚫 No hay reservas activas.</p>
      ) : (
        <ReservaList
          reservas={reservas}
          eliminarReserva={handleEliminarReserva}
          actualizarReservas={cargarReservas} 
        />
      )}
    </div>
  );
};

export default ReservasActivas;
