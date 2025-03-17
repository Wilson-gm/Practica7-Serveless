import React from "react";

const ReservaItem = ({ reserva, eliminarReserva, actualizarReservas }) => {
  const handleEliminar = async () => {
    const confirmar = window.confirm(`¿Estás seguro de que quieres eliminar la reserva de ${reserva.nombre}?`);
    if (!confirmar) return;

    try {
      await eliminarReserva(reserva.id);
      actualizarReservas();
    } catch (error) {
      alert("⚠️ No se pudo eliminar la reserva. Inténtalo de nuevo.");
    }
  };

  return (
    <tr className="hover:bg-gray-100 transition duration-300">
      <td className="border border-gray-300 p-3 text-center font-semibold">{reserva.id}</td>
      <td className="border border-gray-300 p-3 text-center">{reserva.nombre}</td>
      <td className="border border-gray-300 p-3 text-center">{reserva.correo}</td>
      <td className="border border-gray-300 p-3 text-center">{reserva.laboratorio}</td>
      <td className="border border-gray-300 p-3 text-center">
        📅 {new Date(reserva.fecha).toLocaleDateString()} 🕒 {reserva.hora}
      </td>
      <td className="border border-gray-300 p-3 text-center">
        <button
          onClick={handleEliminar}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
        >
          🗑️ Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ReservaItem;
