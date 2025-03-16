import React from "react";

const ReservasActivas = ({ reservas }) => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Reservas Activas</h2>

      {/* ⚠️ Elimina esto si está en tu código */}
      {/* <div className="w-full max-w-lg mb-6">
        <ReservaForm registrarReserva={registrarReserva} />
      </div> */}

      {reservas.length === 0 ? (
        <p className="text-gray-500 text-center">No hay reservas activas.</p>
      ) : (
        <div className="flex justify-center">
          <table className="border-collapse border border-gray-300 bg-white shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">Laboratorio</th>
                <th className="border border-gray-300 p-2">Fecha y Hora</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2 text-center">{reserva.id}</td>
                  <td className="border border-gray-300 p-2 text-center">{reserva.nombre}</td>
                  <td className="border border-gray-300 p-2 text-center">{reserva.laboratorio}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    {reserva.fecha} {reserva.hora}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReservasActivas;
