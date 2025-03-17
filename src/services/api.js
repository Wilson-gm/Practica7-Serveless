import axios from "axios";

const API_URL = "https://gy4mbvgbdk.execute-api.us-east-1.amazonaws.com/"; // 🚨 Verifica la URL

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
    
    console.log("📌 Respuesta completa:", res);

    return res.data;
  } catch (error) {
    console.error("❌ Error en crearReserva:", error);
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
