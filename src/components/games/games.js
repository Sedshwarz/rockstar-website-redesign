import './games.css';
import signboard from '../../assets/other/splash-signboard-games.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from '../../assets/games/1.jpg';
import img2 from '../../assets/games/2.jpg';
import img3 from '../../assets/games/3.jpg';
import img4 from '../../assets/games/4.jpg';
import img5 from '../../assets/games/5.jpg';
import img6 from '../../assets/games/6.jpg';
import img7 from '../../assets/games/7.jpg';

import { Tilt } from 'react-tilt';
import { useEffect, useState } from 'react';

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 0.9,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 750,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Games() {

    const imgAry = [img1, img2, img3, img4, img5, img6, img7];
    const [cardPerPage, setCPP] = useState(4);

    const setCardPerPage = () => {
        window.innerWidth > 1850 ? setCPP(4) : 
            (window.innerWidth > 1405 ? setCPP(3) : 
                (window.innerWidth > 1010 ? setCPP(2) : 
                    (window.innerWidth > 850 ? setCPP(3) : 
                        (window.innerWidth > 639 ? setCPP(2) : setCPP(1)))))
    }

    useEffect(setCardPerPage,[])

    window.addEventListener("resize", setCardPerPage);

    return (
        <div className="games">
            <img src={signboard} className='signboard' alt='Games' />

            <div className='games-body'>

                <Swiper
                    slidesPerView={cardPerPage}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {
                        imgAry.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Tilt options={defaultOptions} >
                                    <div className='games-card'>
                                        <img src={item} alt='Games' />
                                    </div>
                                </Tilt>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
            <div className='view-more'>View More</div>
        </div>
    );
}

export default Games;
