import React from "react";

import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <a href="https://www.webmotors.com.br/">
        <img src={logo} className="Webmotors-logo" alt="logo" />
      </a>
    </header>
  );

}

export default Header;