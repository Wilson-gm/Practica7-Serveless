import React, { useState } from "react";
import { crearReserva, obtenerReservas } from "../services/api";

const NuevaReserva = ({ actualizarReservas }) => {
  const [formData, setFormData] = useState({
    matricula: "",
    nombre: "",
    correo: "",
    laboratorio: "",
    fecha: "",
    hora: "",
  });

  const [mensaje, setMensaje] = useState({ texto: "", tipo: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    if (!formData.matricula || !formData.nombre || !formData.correo || !formData.laboratorio || !formData.fecha || !formData.hora) {
      setMensaje({ texto: "⚠️ Todos los campos son obligatorios.", tipo: "error" });
      return false;
    }

    if (!/^\d+$/.test(formData.matricula)) {
      setMensaje({ texto: "⚠️ La matrícula debe contener solo números.", tipo: "error" });
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      setMensaje({ texto: "⚠️ Ingresa un correo válido.", tipo: "error" });
      return false;
    }

    const fechaReserva = new Date(formData.fecha);
    if (fechaReserva < new Date()) {
      setMensaje({ texto: "⚠️ No puedes seleccionar una fecha pasada.", tipo: "error" });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje({ texto: "", tipo: "" });

    if (!validarFormulario()) return;

    const todasLasReservas = await obtenerReservas();
    const reservasMismoLab = todasLasReservas.filter(
      (r) => r.laboratorio === formData.laboratorio && r.hora === formData.hora
    );

    if (reservasMismoLab.length >= 7) {
      setMensaje({ texto: "⚠️ No hay disponibilidad en este horario.", tipo: "error" });
      return;
    }

    try {
      await crearReserva(formData);
      actualizarReservas();
      setMensaje({ texto: "✅ Reserva creada con éxito.", tipo: "exito" });
      setFormData({ matricula: "", nombre: "", correo: "", laboratorio: "", fecha: "", hora: "" });
    } catch (error) {
      setMensaje({ texto: "⚠️ No se pudo registrar la reserva. Inténtalo de nuevo.", tipo: "error" });
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">📅 Nueva Reserva</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md w-full max-w-lg">
        <input type="text" name="matricula" placeholder="Matrícula" value={formData.matricula} required className="border p-2 w-full mb-2" onChange={handleChange} />
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} required className="border p-2 w-full mb-2" onChange={handleChange} />
        <input type="email" name="correo" placeholder="Correo" value={formData.correo} required className="border p-2 w-full mb-2" onChange={handleChange} />

        <select name="laboratorio" value={formData.laboratorio} required className="border p-2 w-full mb-2" onChange={handleChange}>
          <option value="">Selecciona un laboratorio</option>
          <option value="Programación">Programación</option>
          <option value="Web Avanzada">Web Avanzada</option>
          <option value="Química">Química</option>
          <option value="Física">Física</option>
          <option value="Sistemas Operativos">Sistemas Operativos</option>
          <option value="Estructura de Datos">Estructura de Datos</option>
        </select>

        <input type="date" name="fecha" value={formData.fecha} required className="border p-2 w-full mb-2" onChange={handleChange} />

        {/* Selector de Hora (de 08:00 AM a 10:00 PM en múltiplos de hora) */}
        <select name="hora" value={formData.hora} required className="border p-2 w-full mb-2" onChange={handleChange}>
          <option value="">Selecciona una hora</option>
          {[...Array(15)].map((_, i) => {
            const hora = i + 8;
            return (
              <option key={hora} value={`${hora}:00`}>
                {hora < 12 ? `${hora}:00 AM` : hora === 12 ? "12:00 PM" : `${hora - 12}:00 PM`}
              </option>
            );
          })}
        </select>

        {/* Mensajes de error o éxito */}
        {mensaje.texto && (
          <p className={`text-center mb-2 ${mensaje.tipo === "error" ? "text-red-500" : "text-green-500"}`}>
            {mensaje.texto}
          </p>
        )}

        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-700 transition">
          ✅ Reservar
        </button>
      </form>
    </div>
  );
};

export default NuevaReserva;
