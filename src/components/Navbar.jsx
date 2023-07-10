import './Navbar.css';
import navbarLogo from '../assets/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={navbarLogo} className="nav__logo" alt="airbnb logo" />
    </nav>
  );
};

export default Navbar;
