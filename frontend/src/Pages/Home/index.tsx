import { Link } from 'react-router-dom';
import NavBar from '../../Components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Desafio Github API</h1>
        <h2>Bootcamp Spring react - DevSuperior</h2>
        <Link to="/api">
          <button className="btn btn-primary">Começar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
