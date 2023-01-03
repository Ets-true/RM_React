import React from "react";
import Slider from "react-slick";
import arrow from '../media/icons/arrow_white.svg'
import './../scss/techno.scss'

import boilerImg from '../media/img/boiler.jpg'
import filterImg from '../media/img/filter.jpg'
import deghydrationImg from '../media/img/dehydration.jpg'
import adsorbentsImg from '../media/img/adsorbents.jpg'
import controlImg from '../media/img/control.jpg'


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div class="slider__button_left" onClick={onClick}>
            <img src={arrow} alt="" class="slider__button_arrow arrow_left"></img>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div class="slider__button_right" onClick={onClick}>
            <img src={arrow} alt="" class="slider__button_arrow"></img>
        </div>
    );
}

export default function TechnoSlider() {
    var settings = {
        centerMode: true,
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
       
    };
    return (
        <Slider className="engineer__slider wow animate__animated animate__fadeIn" {...settings}>
                    <div class="engineer__slider_slide_large op">
                        <div class="engineer__slider_image"><img src={boilerImg} alt="" class="engineer__slider_img"></img></div>
                        <div class="engineer__slider_text"><p>Электронагреватель</p></div>
                    </div>

                    <div class="engineer__slider_slide_large">
                        <div class="engineer__slider_image"><img src={filterImg} alt="" class="engineer__slider_img"></img></div>
                        <div class="engineer__slider_text"><p>Фильтр грубой очистки</p></div>
                    </div>

                    <div class="engineer__slider_slide_small op">
                        <div class="engineer__slider_image"><img src={deghydrationImg} alt="" class="engineer__slider_img"></img></div>
                        <div class="engineer__slider_text"><p>Камера вакуумной осушки</p></div>
                    </div>

                    <div class="engineer__slider_slide_large">
                        <div class="engineer__slider_image"><img src={adsorbentsImg} alt="" class="engineer__slider_img"></img></div>
                        <div class="engineer__slider_text"><p>Блок адсорбентов</p></div>
                    </div>

                    <div class="engineer__slider_slide_small">
                        <div class="engineer__slider_image"><img src={controlImg} alt="" class="engineer__slider_img"></img></div>
                        <div class="engineer__slider_text"><p>Блок управления</p></div>
                    </div>
        </Slider >

    );
}