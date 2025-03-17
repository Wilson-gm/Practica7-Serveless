import React from "react";
import ReservaItem from "./ReservaItem";

const ReservaList = ({ reservas, eliminarReserva, actualizarReservas }) => {
  return (
    <div className="overflow-x-auto w-full max-w-4xl mx-auto mt-6">
      {reservas.length === 0 ? (
        <p className="text-gray-500 text-center py-4 text-lg">🚫 No hay reservas disponibles.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white text-lg">
            <tr>
              <th className="border border-gray-300 p-3">ID</th>
              <th className="border border-gray-300 p-3">Nombre</th>
              <th className="border border-gray-300 p-3">Correo</th>
              <th className="border border-gray-300 p-3">Laboratorio</th>
              <th className="border border-gray-300 p-3">Fecha y Hora</th>
              <th className="border border-gray-300 p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <ReservaItem
                key={reserva.id}
                reserva={reserva}
                eliminarReserva={eliminarReserva}
                actualizarReservas={actualizarReservas}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservaList;
