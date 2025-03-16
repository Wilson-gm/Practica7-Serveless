const ReservaItem = ({ reserva, eliminarReserva }) => {
    return (
      <tr className="hover:bg-gray-100">
        <td className="border border-gray-300 p-2 text-center">{reserva.id}</td>
        <td className="border border-gray-300 p-2 text-center">{reserva.nombre}</td>
        <td className="border border-gray-300 p-2 text-center">{reserva.correo}</td>
        <td className="border border-gray-300 p-2 text-center">{reserva.laboratorio}</td>
        <td className="border border-gray-300 p-2 text-center">
          {reserva.fecha} {reserva.hora}
        </td>
        <td className="border border-gray-300 p-2 text-center">
          <button
            onClick={() => eliminarReserva(reserva.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
  };
  
  export default ReservaItem;
  