import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">Sobre</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Consquistas</a></li>
        <li className="p__opensans"><a href="#contact">Contato</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registrar</a>
        <div />
        <a href="/" className="p__opensans">Faça seu pedido</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>Sobre</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Consquistas</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contato</a></li>
              </ul>
            </div>
          )
        }
      </div>
    </nav >
  );
};

export default Navbar;