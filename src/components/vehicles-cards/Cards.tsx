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

        <div className="cards-group">
            <div className="card-header">
                {vehicles.map(vehicle => (
                    <img className="car"src={vehicle.Image} alt="vehicle" />
                ))}
            </div>
            <div className="card-content">
                <div className="card-body">
                    {vehicles.map(vehicle => (
                        <h4 className="model-car">{vehicle.Model}</h4>
                    ))}
                    {vehicles.map(vehicle => (
                        <p className="version-car">{vehicle.Version}</p>
                    ))}
                </div>

                {vehicles.map(vehicle => (
                    <h1 className="price-car"> R$ {vehicle.Price}</h1>
                ))}
                <div className="card-body">
                    {vehicles.map(vehicle => (
                        <p className="year-car">{vehicle.YearModel}</p>
                    ))}
                    {vehicles.map(vehicle => (
                        <p className="km-car">{vehicle.KM} km</p>
                    ))}
                </div>
            </div>
            <div className="card-footer">
                <IoIosColorPalette className="icon-color" />
                {vehicles.map(vehicle => (
                    <p className="color-car">{vehicle.Color}</p>
                ))}
            </div>
        </div>
    )
}

export default Cards;