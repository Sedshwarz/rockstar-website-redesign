import { useContext } from 'react';
import { MyContext } from '../../../context/context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import headlines from '../headlines.json';

function Carousel() {

    const { changeHeadline } = useContext(MyContext);

    return (
        <div className='carousel-wrapper'>

            <div className='carousel' onMouseMove={changeHeadline}>
                <Swiper
                    className='swiper_container'
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={false}
                    slidesPerView={headlines.length}
                    modules={[EffectCoverflow]}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true
                    }}
                >

                    {
                        headlines.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className={`carousel-card tmb-${item.id}`}
                                    data-num={item.id.toString()}
                                >
                                    <div className='cc-stick'></div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

        </div>
    );
}

export default Carousel;
