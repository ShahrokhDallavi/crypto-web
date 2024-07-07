import React from 'react';


// Components
import Header from './Header'
import Statistic from './Statistic';
import Whyus from './Whyus';
import BestCoins from './BestCoins';
import CoinCards from './CoinCards';
import Footer from './shared/Footer';

const Landing = () => {
    return (
        <div>
            <Header />
            <Statistic />
            <Whyus />
            <BestCoins />
            <CoinCards />
            <Footer />
        </div>
    );
};

export default Landing;