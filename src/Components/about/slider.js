import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation , EffectCards} from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import style from './about.module.css'

import Screen1 from '../main section/images/screen1.png'
import Screen2 from '../main section/images/screen2.png'
import Screen3 from '../main section/images/screen3.jpg'
import Screen4 from '../main section/images/screen4.jpg'

function Slider() {
    return (
        <div className={style.slider_container}>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards , Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className={style.slider_img} src={Screen1} alt="screenshot from game"/></SwiperSlide>
                <SwiperSlide><img className={style.slider_img} src={Screen2} alt="screenshot from game"/></SwiperSlide>
                <SwiperSlide><img className={style.slider_img} src={Screen3} alt="screenshot from game"/></SwiperSlide>
                <SwiperSlide><img className={style.slider_img} src={Screen4} alt="screenshot from game"/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider