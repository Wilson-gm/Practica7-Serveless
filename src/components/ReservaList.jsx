import React from "react";
import ReservaItem from "./ReservaItem";

const ReservaList = ({ reservas, eliminarReserva }) => {
  return (
    <div className="overflow-x-auto w-full max-w-6xl mx-auto mt-6">
      {reservas.length === 0 ? (
        <p className="text-gray-500 text-center py-4 text-lg">
          🚫 No hay reservas disponibles.
        </p>
      ) : (
        <div className="shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border border-gray-300 bg-white">
            {/* CABECERA */}
            <thead className="bg-blue-600 text-white text-lg">
              <tr>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">Correo</th>
                <th className="p-3 text-left">Laboratorio</th>
                <th className="p-3 text-left">Fecha y Hora</th>
                <th className="p-3 text-center">Acciones</th>
              </tr>
            </thead>

            {/* CUERPO */}
            <tbody>
              {reservas.map((reserva) => (
                <ReservaItem
                  key={reserva.id}
                  reserva={reserva}
                  eliminarReserva={eliminarReserva}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReservaList;
