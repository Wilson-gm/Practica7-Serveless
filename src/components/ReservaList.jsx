import ReservaItem from "./ReservaItem";

const ReservaList = ({ reservas, eliminarReserva }) => {
  return (
    <div className="overflow-x-auto">
      {reservas.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No hay reservas activas.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Nombre</th>
              <th className="border border-gray-300 p-2">Correo</th>
              <th className="border border-gray-300 p-2">Laboratorio</th>
              <th className="border border-gray-300 p-2">Fecha y Hora</th>
              <th className="border border-gray-300 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <ReservaItem key={reserva.id} reserva={reserva} eliminarReserva={eliminarReserva} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservaList;
