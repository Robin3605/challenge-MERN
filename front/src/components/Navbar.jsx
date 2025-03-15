import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <Link to="/" className="text-orange-600 px-5">Artículos</Link>
      <Link to="/upload" className="text-white mr-4">Subida</Link>
      <Link to="/create-user" className="text-white mr-4">Crear Usuario</Link>
      <Link to="/create-product" className="text-white mr-4">Crear Producto</Link>
    </nav>
  );
};

export default Navbar;