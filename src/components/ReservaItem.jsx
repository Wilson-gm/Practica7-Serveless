import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReservaItem = ({ reserva, eliminarReserva }) => {
  const handleEliminar = async () => {
    if (!window.confirm(`¿Eliminar la reserva de ${reserva.nombre}?`)) return;

    try {
      await eliminarReserva(reserva.id);
    } catch (error) {
      alert("⚠️ No se pudo eliminar la reserva. Inténtalo de nuevo.");
    }
  };

  return (
    <tr className="hover:bg-gray-100 transition duration-300">
      <td className="border p-3 text-center font-semibold">{reserva.nombre}</td>
      <td className="border p-3 text-center">{reserva.correo}</td>
      <td className="border p-3 text-center">{reserva.laboratorio}</td>
      <td className="border p-3 text-center">
        📅 {reserva.fecha} 🕒 {reserva.hora}
      </td>
      <td className="border p-3 text-center">
        <button
          onClick={handleEliminar}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

export default ReservaItem;
