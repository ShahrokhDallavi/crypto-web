import React, { useState, useEffect } from 'react';

// API
import { getCoin } from '../services/api';

// Components
import Loader from './Loader';
import Coin from './Coin';

// React Scroll
import { Element } from 'react-scroll';

const Landing = () => {

    const [coins, setCoins] = useState ([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }

        fetchAPI()
    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <Element name='cryptocurrency'>
            <input type='text' placeholder='Search' value={search} onChange={searchHandler} className='border-2 border-gray border-opacity-15 bg-gradient-to-r from-[#272727] to-[#14101D] rounded-xl px-4 py-2 my-8 w-80 text-white focus:outline-none' />
            <div className='flex justify-between items-center px-5 md:px-10 lg:px-28 text-xs text-gray font-extralight mb-8'>
                <h6>Coin</h6>
                <h6>Symbol</h6>
                <h6>Price</h6>
                <h6>Price Change</h6>
                <h6>Market Cap</h6>
            </div>
            {
                coins.length ?
                <div className='mb-8'>
                    {
                        searchCoins.map(coin => <Coin 
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                        />)
                    }
                </div> :
                <Loader />
            }
        </Element>
    );
};

export default Landing;