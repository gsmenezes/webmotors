import React from 'react';


import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <Header />
            <div className="search-box">
                {/* Criar o componente da busca */}
            </div>
            <Footer />
        </div>
    );
}

export default Home;