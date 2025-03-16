import { useEffect, useState } from "react";
import { obtenerReservasActivas } from "../services/api"; // Suponiendo que tu API puede manejar reservas pasadas
import ReservaList from "../components/ReservaList";

const ReservasPasadas = () => {
  const [reservas, setReservas] = useState([]);
  const [reservasFiltradas, setReservasFiltradas] = useState([]); // Estado separado para las filtradas
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    const datos = await obtenerReservasActivas(); // Cambiar por una API que devuelva las reservas pasadas si es necesario
    setReservas(datos);
    setReservasFiltradas(datos); // Inicialmente muestra todas las reservas pasadas
  };

  const filtrarReservas = () => {
    if (!fechaInicio || !fechaFin) return;

    const reservasFiltradas = reservas.filter(reserva => {
      return reserva.fecha >= fechaInicio && reserva.fecha <= fechaFin;
    });

    setReservasFiltradas(reservasFiltradas);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Reservas Pasadas</h2>

      {/* Filtro por rango de fecha */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={filtrarReservas} className="bg-blue-500 text-white p-2 rounded">
          Filtrar
        </button>
      </div>

      {/* Listado de reservas pasadas */}
      <div className="w-full max-w-4xl">
        {reservasFiltradas.length > 0 ? (
          <ReservaList reservas={reservasFiltradas} />
        ) : (
          <p className="text-gray-500 text-center">No hay reservas pasadas.</p>
        )}
      </div>
    </div>
  );
};

export default ReservasPasadas;
