import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="Header">
      <nav>
        <div className="navigation">
          <img src="/images/logo/logo.svg" alt="Логотип" />
          <div className="burger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? 'active' : ''}>
            <li>Информация</li>
            <li>Партфолио</li>
            <li>Ресурсы</li>
          </ul>
        </div>
        <button>Заказать сайт</button>
      </nav>
    </header>
  );
}

export default Header;
