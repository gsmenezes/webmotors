import React from 'react';


import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Home.css';
import Searchbox from '../../components/search-box/Searchbox';

function Home() {
    return (
        <div className="container-fluid">
            <Header />
            {/* Criar componente de titles */}
            <div className="search-box">
                <Searchbox />
            </div>
            {/* Criar componente de cards */}
            <Footer />
        </div>
    );
}

export default Home;