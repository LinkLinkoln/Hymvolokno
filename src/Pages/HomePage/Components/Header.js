import React from 'react';
import '../ComponentsCss/Header.css';
import logo from '../../../assets/HeaderImage/Logo.png';
import LogIn from '../../../assets/HeaderImage/log-in.png';
import SignUp from '../../../assets/HeaderImage/add-user.png';
import BurgerMenu from '../Components/BurgerMenu';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <div className="header-text">
          <h1>Могилёвхимволокно</h1>
          <p>Новый взгляд на качество</p>
        </div>
      </div>
      <div className="header-nav">
        <a href="#home" className="nav-item active">Главная</a>
        <a href="#whatWeDo" className="nav-item">Что мы можем? <span>&#9660;</span></a>
        <a href="#whoWeAre" className="nav-item">Кто мы такие? <span>&#9660;</span></a>
        <div className="nav-icons">
            <img src={LogIn} alt="Log-In" className="authorized-image" />
            <img src={SignUp} alt="Sign-Up" className="authorized-image" />
        </div>
        <BurgerMenu/>
      </div>
    </header>
  );
}

export default Header;
