import axios from "axios";

const API_URL = "https://tu-api.com"; // Reemplazar con URL real

export const obtenerReservasActivas = async () => {
  const res = await axios.get(`${API_URL}/reservas`);
  return res.data;
};

export const crearReserva = async (reserva) => {
  const res = await axios.post(`${API_URL}/reservas`, reserva);
  return res.data;
};

export const eliminarReserva = async (id) => {
  const res = await axios.delete(`${API_URL}/reservas`, { data: { id } });
  return res.data;
};
