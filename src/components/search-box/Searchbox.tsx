import React, { useState, useEffect, ChangeEvent } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import api from '../../service/Apiservice';
import { IMake } from '../../service/interfaces/Imake';
import { IModel } from '../../service/interfaces/Imodel';
import { IVersion } from '../../service/interfaces/Iversion';
import './Searchbox.css';


const Searchbox = () => {

    const [makes, setMakes] = useState<Array<IMake>>([]);
    const [selectedMake, setSelectedMake] = useState("0");
    useEffect(() => {
        api.get('Make').then(resp => {
            setMakes(resp.data);
        });
    }, []);
    function handleMakeChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedMake(event.target.value);
        setVersions([]);
    }

    const [models, setModels] = useState<Array<IModel>>([]);
    const [selectedModel, setSelectedModel] = useState("0");
    useEffect(() => {
        if (selectedMake === '0') {
            return;
        }
        api.get('Model', { params: { MakeID: selectedMake } }).then(resp => {
            setModels(resp.data);
        });
    }, [selectedMake]);
    function handleModelChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedModel(event.target.value);
    }

    const [versions, setVersions] = useState<Array<IVersion>>([]);
    const [selectedVersion, setSelectedVersion] = useState("0");
    useEffect(() => {
        if (selectedModel === '0') {
            return;
        }
        api.get('Version', { params: { ModelID: selectedModel } }).then(resp => {
            setVersions(resp.data);
        });
    }, [selectedModel]);
    function handleVersionChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedVersion(event.target.value);
    }

    function cleanFilters() {
        window.location.reload();
    }



    return (
        <div className="content">
            <main>
                <div className="checkboxes">
                    <label htmlFor="new" className="checkbox">
                        <input
                            name="new"
                            type="checkbox"
                        />
                        <span>Novos</span>
                    </label>
                    <label htmlFor="used" className="checkbox">
                        <input
                            name="used"
                            type="checkbox"
                        />
                        <span>Usados</span>
                    </label>
                </div>
                <form>
                    <fieldset>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="City">Selecione sua Cidade</label>
                                <select name="city" id="city">
                                    <option value="0"></option>
                                    <option value="1">São Paulo - SP</option>
                                    <option value="2">Rio de Janeiro - RJ</option>
                                    <option value="3">Belo Horizonte - MG</option>
                                    <option value="4">Porto Alegre - RS</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="distance">Raio</label>
                                <select name="distance" id="distance">
                                    <option value="0"></option>
                                    <option value="1">0 KM</option>
                                    <option value="2">50 KM</option>
                                    <option value="3">100 KM</option>
                                    <option value="4">150 KM</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="Make">Marca</label>
                                <select name="make" id="make" value={selectedMake} onChange={handleMakeChange}>
                                    <option value="0">Todas</option>
                                    {makes.map(make => (
                                        <option key={make.ID} value={make.ID}>{make.Name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="Model">Modelo</label>
                                <select name="model" id="model" value={selectedModel} onChange={handleModelChange}>
                                    <option value="0">Todos</option>
                                    {models.map(model => (
                                        <option key={model.ID} value={model.ID}>{model.Name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="field-group2">
                            <div className="field">
                                <label htmlFor="Year">Ano desejado</label>
                                <select name="year" id="year">
                                    <option value="0"></option>
                                    <option value="1">2020 - 2021</option>
                                    <option value="2">2019 - 2020</option>
                                    <option value="3">2018 - 2019</option>
                                    <option value="4">2017 - 2018</option>
                                    <option value="5">2016 - 2017</option>
                                    <option value="6">2015 - 2016</option>
                                    <option value="7">2014 - 2015</option>
                                    <option value="8">2013 - 2014</option>
                                    <option value="9">2012 - 2013</option>
                                    <option value="10">2011 - 2012</option>
                                    <option value="11">2010 - 2011</option>
                                    <option value="12">2009 - 2010</option>
                                    <option value="13">2008 - 2009</option>
                                    <option value="14">2007 - 2008</option>
                                    <option value="15">2006 - 2007</option>
                                    <option value="16">2005 - 2006</option>
                                    <option value="17">2004 - 2005</option>
                                    <option value="18">2003 - 2004</option>
                                    <option value="19">2002 - 2003</option>
                                    <option value="20">2001 - 2002</option>
                                    <option value="21">2000 - 2001</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="price">Faixa de preço</label>
                                <select name="price" id="price">
                                    <option value="0"></option>
                                    <option value="1">Até R$ 5.000,00</option>
                                    <option value="2">De R$ 5.001,00 até R$ 10.000,00</option>
                                    <option value="3">De R$ 10.001,00 até R$ 15.000,00</option>
                                    <option value="4">De R$ 15.001,00 até R$ 25.000,00</option>
                                    <option value="5">De R$ 20.001,00 até R$ 30.000,00</option>
                                    <option value="6">De R$ 30.001,00 até R$ 45.000,00</option>
                                    <option value="7">De R$ 45.001,00 até R$ 60.000,00</option>
                                    <option value="8">De R$ 60.001,00 até R$ 75.000,00</option>
                                    <option value="9">De R$ 75.001,00 até R$ 100.000,00</option>
                                    <option value="10">Mais de R$ 100.000,00</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="Version">Versão</label>
                                <select name="version" id="version" value={selectedVersion} onChange={handleVersionChange}>
                                    <option value="0">Todas</option>
                                    {versions.map(version => (
                                        <option key={version.ID} value={version.ID}>{version.Name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <div className="form-footer">
                    <span className="search-filter"><IoIosArrowForward /> Busca avançada </span>
                    <div className="buttons">
                        <span className="clean-search" onClick={() => cleanFilters()}>Limpar Filtros</span>

                        <button className="search">Ver Ofertas</button>
                    </div>

                </div>
            </main>
        </div >
    );
}

export default Searchbox;