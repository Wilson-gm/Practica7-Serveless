import { Link } from "react-router-dom";
import logo from "../assets/logo-pucmm.png";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex items-center justify-between shadow-md">
      <img src={logo} alt="PUCMM Logo" className="h-10 w-auto" />

      <h1 className="text-xl font-bold flex-grow text-center">Reservas de Laboratorio EICC</h1>

      <nav className="flex gap-4">
        <Link to="/nueva-reserva" className="hover:underline">Nueva Reserva</Link>
        <Link to="/reservas-activas" className="hover:underline">Reservas Activas</Link>
        <Link to="/reservas-pasadas" className="hover:underline">Reservas Pasadas</Link>
      </nav>
    </header>
  );
};

export default Header;
