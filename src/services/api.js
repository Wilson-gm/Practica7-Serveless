import axios from "axios";

const API_URL = "https://g41qgto6o9.execute-api.us-east-1.amazonaws.com"; // 🚨 Verifica la URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Obtener todas las reservas
export const obtenerReservas = async () => {
  try {
    const res = await axiosInstance.get("/reservas");
    return res.data || [];
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    return [];
  }
};

// Crear una nueva reserva
export const crearReserva = async (reserva) => {
  try {
    const res = await axiosInstance.post("/reservas", reserva);
    return res.data;
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    throw error;
  }
};

// Eliminar una reserva
export const eliminarReserva = async (id) => {
  try {
    const res = await axiosInstance.delete("/reservas", { data: { id } });
    return res.data;
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
};
