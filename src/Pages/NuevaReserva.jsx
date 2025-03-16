import ReservaForm from "../components/ReservaForm";

const NuevaReserva = ({ registrarReserva }) => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Nueva Reserva</h2>
      <div className="w-full max-w-lg">
        <ReservaForm registrarReserva={registrarReserva} />
      </div>
    </div>
  );
};

export default NuevaReserva;
