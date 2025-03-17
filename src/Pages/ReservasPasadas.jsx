import React, { useEffect, useState } from "react";
import { obtenerReservas, eliminarReserva } from "../services/api";
import ReservaList from "../components/ReservaList";

const ReservasPasadas = () => {
  const [reservas, setReservas] = useState([]);
  const [reservasOriginales, setReservasOriginales] = useState([]);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    try {
      const todasLasReservas = await obtenerReservas();
      const ahora = new Date();
      ahora.setSeconds(0, 0);

      const reservasPasadas = todasLasReservas.filter((reserva) => {
        if (!reserva.fecha || !reserva.hora) return false;
        const fechaReserva = new Date(`${reserva.fecha}T${reserva.hora}:00`);
        return fechaReserva < ahora;
      });

      setReservas(reservasPasadas);
      setReservasOriginales(reservasPasadas);
    } catch (error) {
      console.error("❌ Error al obtener reservas:", error);
    }
  };

  const handleEliminarReserva = async (id) => {
    try {
      await eliminarReserva(id);
      console.log("✅ Reserva eliminada correctamente.");
      cargarReservas(); // 🔄 Refresca automáticamente la lista
    } catch (error) {
      console.error("❌ Error al eliminar reserva:", error);
    }
  };

  const filtrarPorRango = () => {
    if (!fechaInicio || !fechaFin) return;
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    const filtradas = reservasOriginales.filter((reserva) => {
      const fechaReserva = new Date(`${reserva.fecha}T${reserva.hora}:00`);
      return fechaReserva >= inicio && fechaReserva <= fin;
    });

    setReservas(filtradas);
  };

  const limpiarFiltro = () => {
    setFechaInicio("");
    setFechaFin("");
    setReservas(reservasOriginales);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">📅 Reservas Pasadas</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          className="border p-2"
        />
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={filtrarPorRango}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          🔍 Filtrar
        </button>
        <button
          onClick={limpiarFiltro}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          🧹 Limpiar Filtro
        </button>
      </div>

      {reservas.length === 0 ? (
        <p className="text-gray-500 text-center py-4 text-lg">🚫 No hay reservas pasadas.</p>
      ) : (
        <ReservaList reservas={reservas} eliminarReserva={handleEliminarReserva} />
      )}
    </div>
  );
};

export default ReservasPasadas;
