import { Link } from "react-router-dom";
import logo from "../assets/logo-pucmm.png";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md">
      <img src={logo} alt="PUCMM Logo" className="h-12 w-auto" />
      <h1 className="text-xl font-bold flex-grow text-center">
        🏫 Reservas de Laboratorio EICC
      </h1>
      <nav className="flex gap-6">
        <Link to="/nueva-reserva" className="hover:underline text-lg">📅 Nueva Reserva</Link>
        <Link to="/reservas-activas" className="hover:underline text-lg">📂 Activas</Link>
        <Link to="/reservas-pasadas" className="hover:underline text-lg">📜 Pasadas</Link>
      </nav>
    </header>
  );
};

export default Header;
