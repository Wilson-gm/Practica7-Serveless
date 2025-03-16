import { useState } from "react";

const ReservaForm = ({ registrarReserva }) => {
  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    correo: "",
    laboratorio: "",
    fecha: "",
    hora: "",
  });

  const [error, setError] = useState(""); // Estado para manejar errores

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      await registrarReserva(formData);
    } catch (error) {
      setError("⚠️ No se pudo registrar la reserva. Verifica disponibilidad.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md w-full max-w-lg">

      <input type="text" name="matricula" placeholder="Matrícula" required className="border p-2 w-full mb-2" onChange={handleChange} />
      <input type="text" name="nombre" placeholder="Nombre" required className="border p-2 w-full mb-2" onChange={handleChange} />
      <input type="email" name="correo" placeholder="Correo" required className="border p-2 w-full mb-2" onChange={handleChange} />

      {/* 🔹 Lista de laboratorios */}
      <select name="laboratorio" required className="border p-2 w-full mb-2" onChange={handleChange}>
        <option value="">Selecciona un laboratorio</option>
        <option value="Programación">Programación</option>
        <option value="Web Avanzada">Web Avanzada</option>
        <option value="Química">Química</option>
        <option value="Física">Física</option>
        <option value="Sistemas Operativos">Sistemas Operativos</option>
        <option value="Estructura de Datos">Estructura de Datos</option>
      </select>

      <input type="date" name="fecha" required className="border p-2 w-full mb-2" onChange={handleChange} />

      {/* 🔹 Cambiamos input de hora por un select fijo */}
      <select name="hora" required className="border p-2 w-full mb-2" onChange={handleChange}>
        <option value="">Selecciona una hora</option>
        <option value="08:00">08:00 AM</option>
        <option value="09:00">09:00 AM</option>
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        <option value="12:00">12:00 PM</option>
        <option value="13:00">01:00 PM</option>
        <option value="14:00">02:00 PM</option>
        <option value="15:00">03:00 PM</option>
        <option value="16:00">04:00 PM</option>
        <option value="17:00">05:00 PM</option>
        <option value="18:00">06:00 PM</option>
        <option value="19:00">07:00 PM</option>
        <option value="20:00">08:00 PM</option>
        <option value="21:00">09:00 PM</option>
        <option value="22:00">10:00 PM</option>
      </select>

      {/* 🚨 Mostrar errores si hay */}
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}

      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        Reservar
      </button>
    </form>
  );
};

export default ReservaForm;
