import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <nav className="navbar main-nav bg-primary">
            <Link to="/" className="nav-logo-text">
                <h4>Github API</h4>
            </Link>
        </nav>
    );
}

export default NavBar;