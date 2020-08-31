import React from 'react';


import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Home.css';
import Searchbox from '../../components/search-box/Searchbox';
import Cards from '../../components/vehicles-cards/Cards';

function Home() {
    return (
        <div className="container">
            <Header />
            {/* Criar componente de titles */}
            <div className="search-box">
                <Searchbox />
            </div>
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;