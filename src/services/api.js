import axios from "axios";

const API_URL = "https://g41qgto6o9.execute-api.us-east-1.amazonaws.com/"; // Reemplazar con la URL correcta

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const obtenerReservasActivas = async () => {
  const res = await axiosInstance.get(`/reservas`);
  return res.data;
};

export const crearReserva = async (reserva) => {
  const res = await axiosInstance.post(`/reservas`, reserva);
  return res.data;
};

export const eliminarReserva = async (id) => {
  const res = await axiosInstance.delete(`/reservas`, { data: { id } });
  return res.data;
};