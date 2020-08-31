import React from "react";
import { FaCar, FaMotorcycle } from 'react-icons/fa';

import logo from './logo.svg';
import './Header.css';

function Header() {

  const TypesVehicle = [
    {
      icon: <FaCar className="vehicles" />,
      text: 'COMPRAR',
      vehicle: 'CARROS',
    },
    {
      icon: <FaMotorcycle className="vehicles"/>,
      text: 'COMPRAR',
      vehicle: 'MOTOS',
    }
  ];

  return (
    <header>

      <div className="img">
        <a href="https://www.webmotors.com.br/">
          <img src={logo} className="webmotors-logo" alt="logo" />
        </a>
      </div>

      <div className="btns">
        <div className="types-vehicle">
          {TypesVehicle.map((item, i) => {
            return (
              <div className="types-button" key={i}>
                <div className="icon">{item.icon}</div>
                <div className="types-text">
                  <span className="text">{item.text}</span>
                  <span className="vehicle-name">{item.vehicle}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sell-car">
          <button className="btn-sell">Vender meu carro</button>
        </div>
      </div>
    </header>
  );

}

export default Header;
