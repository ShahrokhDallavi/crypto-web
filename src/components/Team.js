import React from 'react';

// React Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Team = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="text-white px-48 my-48">
            <Slider {...settings}>
                <div>
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    {/* <img src={} alt='' /> */}
                    <p></p>
                    <span></span>
                    <h3></h3>
                    <p></p>
                </div>
                <div>
                    {/* <img src={} alt='' /> */}
                    <p></p>
                    <span></span>
                    <h3></h3>
                    <p></p>
                </div>
            </Slider>
        </div>
    );
};

export default Team;