import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="panel-bg">
        <h1 className="navbrand">Biblioteca Comunitaria "La Ceiba"</h1>
        <ul>
            <li>
                <Link to="/" className="BOOKS">Inicio</Link>
            </li>
            <li>
                <Link to="/catalogo" className="BOOKS">Libros</Link>
            </li>
            <li>
                <Link to="/ayuda" className="CATEGORIES">Ayuda</Link>
            </li>
        </ul>
    </nav>

);

export default Navbar;