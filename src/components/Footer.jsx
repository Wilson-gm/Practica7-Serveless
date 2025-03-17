const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-auto shadow-inner w-full fixed bottom-0">
      <p className="text-sm">
        © {new Date().getFullYear()} Universidad PUCMM - Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
