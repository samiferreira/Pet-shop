import "./index.css";
import logo from "../../assets/brand.png";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="box_menu">
      <div className="content_menu">
        <div className="logo">
          <img className="logo_image" src={logo} alt="icone" />
          <h1 className="title">Petshop</h1>
          </div>
        <nav className="nav">
          <ul className="nav_menu">
            <Link to="/agendamentos" className="schedule">Agendar</Link> 
            <li className="nav_item">
              <Link to="/" className="nav_link">Home</Link> 
            </li>
            <li className="nav_item">
              <Link to="/servicos" className="nav_link">Serviços</Link> 
            </li>
            <li className="nav_item">
              <Link to="/sobre" className="nav_link">Sobre</Link> 
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;