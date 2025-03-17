import React, { useEffect, useState } from "react";
import { obtenerReservas } from "../services/api";
import ReservaList from "../components/ReservaList";

const ReservasPasadas = () => {
  const [reservas, setReservas] = useState([]);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    const todasLasReservas = await obtenerReservas();
    const ahora = new Date();

    const reservasPasadas = todasLasReservas.filter((reserva) => {
      const fechaReserva = new Date(`${reserva.fecha}T${reserva.hora}:00`);
      return fechaReserva < ahora;
    });

    setReservas(reservasPasadas);
  };

  const filtrarPorRango = () => {
    if (!fechaInicio || !fechaFin) return;

    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    const filtradas = reservas.filter((reserva) => {
      const fechaReserva = new Date(`${reserva.fecha}T${reserva.hora}:00`);
      return fechaReserva >= inicio && fechaReserva <= fin;
    });

    setReservas(filtradas);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">📅 Reservas Pasadas</h2>

      <div className="flex gap-4 mb-4">
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} className="border p-2" />
        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} className="border p-2" />
        <button onClick={filtrarPorRango} className="bg-blue-500 text-white px-4 py-2 rounded">🔍 Filtrar</button>
      </div>

      <ReservaList reservas={reservas} />
    </div>
  );
};

export default ReservasPasadas;
