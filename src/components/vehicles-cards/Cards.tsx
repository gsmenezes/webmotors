import React, { useState, useEffect } from 'react';
import { IoIosColorPalette } from 'react-icons/io';
import { IVehicle } from '../../service/interfaces/Ivehicle';
import api from '../../service/Apiservice';
import './Cards.css';

const Cards = () => {

    const [vehicles, setVehicles] = useState<Array<IVehicle>>([]);
    useEffect(() => {
        api.get('Vehicles', { params: { Page: 1 } }).then(resp => {
            setVehicles(resp.data);
        });
    }, []);


    return (
        <div className="cards-grid">
            {vehicles.map(vehicle => (
                <div className="card-group">
                    <div className="card-header">
                        <img className="car" src={vehicle.Image} alt="vehicle" />
                    </div>
                    <div className="card-content">
                        <div className="card-body">
                            <h4 className="model-car">{vehicle.Model}</h4>
                            <p className="version-car">{vehicle.Version}</p>
                        </div>
                        <h1 className="price-car"> R$ {vehicle.Price}</h1>
                        <div className="card-info">
                            <p className="year-car">Modelo {vehicle.YearModel}</p>
                            <p className="km-car">{vehicle.KM} km</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <IoIosColorPalette className="icon-color" />
                        <p className="color-car">{vehicle.Color}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;