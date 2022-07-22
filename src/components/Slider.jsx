import React from "react";
import Slider from "react-slick";
import arrow from '../media/icons/arrow_white.svg'
import './../scss/company.scss'
import $ from 'jquery';





function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="slider__button_left" onClick={onClick}>
            <img src={arrow} alt="" className="slider__button_arrow arrow_left" ></img>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="slider__button_right" onClick={onClick}>
            <img src={arrow} alt="" className="slider__button_arrow" ></img>
        </div>
    );
}


    


function opacity(next){

    let slides = document.querySelectorAll('.slider__event')
    
        if(next == 0){
            slides[0].style.opacity = 1;
            slides[1].style.opacity = 0.5;
            slides[2].style.opacity = 0.2;
            slides[3].style.opacity = 0;
            slides[4].style.opacity = 0;
        }
        if(next == 1){
            slides[0].style.opacity = 0;
            slides[1].style.opacity = 1;
            slides[2].style.opacity = 0.5;
            slides[3].style.opacity = 0.2;
            slides[4].style.opacity = 0;
            
        }
        if(next == 2){
            slides[0].style.opacity = 0;
            slides[1].style.opacity = 0;
            slides[2].style.opacity = 1;
            slides[3].style.opacity = 0.5;
            slides[4].style.opacity = 0.2;
        }
        if(next == 3){
            slides[0].style.opacity = 0;
            slides[1].style.opacity = 0;
            slides[2].style.opacity = 0;
            slides[3].style.opacity = 1;
            slides[4].style.opacity = 0.5;
        }
        if(next == 4){
            slides[0].style.opacity = 0;
            slides[1].style.opacity = 0;
            slides[2].style.opacity = 0;
            slides[3].style.opacity = 0;
            slides[4].style.opacity = 1;
        }

}


export default function CompanySlider() {
    setTimeout(() => {
        let slides = document.querySelectorAll('.slider__event')
        slides[0].style.opacity = 1;
        slides[1].style.opacity = 0.5;
        slides[2].style.opacity = 0.2;
        slides[3].style.opacity = 0.2;
        slides[4].style.opacity = 0.2;
        slides[5].style.opacity = 0;
        slides[6].style.opacity = 0;
    }, 300);
    var settings = {
        slidesToShow: 3,
        speed: 1000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        beforeChange: (current, next) => {opacity(next)},
        // beforeChange: (current, next) => {alert(next)},
        dots: false,
        infinite: false,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    

    return (
        <Slider className="slider__sliderBody" {...settings}>

            <div className="slider__event">
                <div className="event__title"><h2>КСОР-1</h2></div>
                <div className="event__text">
                    <p>По заказу АО «Дальневосточная генерирующая компания» в ООО "МикронИнтер" была разработана и изготовлена установка
                        КСОР-1 (Комплексная система очистки и регенерации масел),
                        которая в последствии была введена в эксплуатацию в филиалах «Приморская генерация»,
                        «Хабаровская генерация» и «Амурская генерация» </p>
                </div>
                <div className="event__date"><p>2016-2018 гг.</p></div>
            </div>
            <div className="slider__event">
                <div className="event__title"><h2>Идея МУРМ </h2></div>
                <div className="event__text">
                    <p>После выполнения нескольких крупных заказов по поставке КСОР-1 специалистам ООО "МикронИнтер"
                        пришла мысль о создании передвижной установки по восстановлению масла с целью экономии денежных и
                        временных ресурсов клиента, благодаря этому появилась идея Мобильной установки регенерации масел (МУРМ)</p>
                </div>
                <div className="event__date"><p>Осень 2020 г.</p></div>
            </div>
            <div className="slider__event">
                <div className="event__title"><h2>Реализация МУРМ </h2></div>
                <div className="event__text">
                    <p>На базе КСОР-1 и грузового автомобиля КАМАЗ спроектирована и изготовлена установка МУРМ,
                        определена экономическая эффективность проекта,
                        спланирована его реализация. Дан старт инвестиционной кампании.
                        Результат – привлечение денежных средств, создание ООО "Регенерация масел".</p>
                </div>
                <div className="event__date"><p>Осень – зима 2020 г.</p></div>
            </div>
            <div className="slider__event">
                <div className="event__title"><h2> РОССЕТИ </h2></div>
                <div className="event__text">
                    <p>На базе КСОР-1 и грузового автомобиля КАМАЗ спроектирована и изготовлена установка МУРМ,
                        определена экономическая эффективность проекта, спланирована его реализация. Дан старт
                        инвестиционной кампании. Результат – привлечение денежных средств, создание ООО "Регенерация масел".</p>
                </div>
                <div className="event__date"><p>Осень – зима 2020 г.</p></div>
            </div>
            <div className="slider__event">
                <div className="event__title"><h2>МОИМ  </h2></div>
                <div className="event__text">
                    <p>На базе КСОР-1 и грузового автомобиля КАМАЗ спроектирована и изготовлена установка МУРМ,
                        определена экономическая эффективность проекта, спланирована его реализация. Дан старт
                        инвестиционной кампании. Результат – привлечение денежных средств, создание ООО "Регенерация масел".</p>
                </div>
                <div className="event__date"><p>Осень – зима 2020 г.</p></div>
            </div>
            <div className="slider__event">
                <div className="event__title"><h2>Образец слайда  </h2></div>
                <div className="event__text">
                    <p>Образец текста</p>
                </div>
                <div className="event__date"><p>Осень – зима 2020 г.</p></div>
            </div>
            <div className="slider__event">
                <div className="event__title"><h2>Образец слайда  </h2></div>
                <div className="event__text">
                    <p>Образец текста</p>
                </div>
                <div className="event__date"><p>Осень – зима 2020 г.</p></div>
            </div>



        </Slider>

    );
}


