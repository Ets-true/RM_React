import React from 'react'
import '../scss/company.scss'
import Crumbs from './Crumbs'
import Footer from "./Footer"
import $ from 'jquery';
// import Slider from "react-slick";
import CompanySlider from './Slider'
import {Helmet} from "react-helmet";

// import Slider from "react-slick";


import arrow from '../media/icons/arrow_white.svg'

export default function () {
    window.scrollTo(0, 0);
    function showFooter() {
        document.querySelector('.footer').style.display =  "flex"
    }
    setTimeout(() => {
        showFooter()
    }, 300);


    function diplay_hide(blockId) {
        if ($(blockId).css('display') == 'none') {
            $(blockId).animate({ height: 'show' }, 500);
            $('.clients__arrow_bottom').addClass('clients__arrow_bottom_active')
        }
        else {
            $(blockId).animate({ height: 'hide' }, 500);
            $('.clients__arrow_bottom').removeClass('clients__arrow_bottom_active')
        }
        
    }




    return (
        <div className="about">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Компания | РМ</title>
            </Helmet>
            <div className="about__aboutUs">
                {/* <Crumbs /> */}
                <div className="aboutUs__info">
                    <div className="aboutUs__title wow animate__animated animate__fadeIn" data-wow-duration="1.5s"><h1>О нас</h1></div>
                    <div className="aboutUs__text wow animate__animated animate__fadeIn" data-wow-duration="1.5s" >
                        <p>Наша компания является членом ассоциации "МикронИнтер",
                            занимающейся разработкой, производством и внедрением оборудования по
                            сверхглубокой очистке и регенерации индустриальных масел <br /><br />
                            ООО «Регенерация масел» была  создана с целью <br/>выполнения удаленных работ по восстановлению масел
                            </p>
                    </div>
                </div>
                <div className="aboutUs__image wow animate__animated animate__fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s"></div>
            </div>





            <div className="about__history">
                <div className="history__title wow animate__animated animate__fadeInUp" data-wow-offset="100">
                    <h1>Развитие компании</h1>
                </div>
                <div className="history__slider wow animate__animated animate__fadeIn" data-wow-offset="300" data-wow-duration="2s">
                    <CompanySlider/>
                </div>
            </div>

            <div className="content__container">
                <div className="about__clients">
                    <div className="clients__title wow animate__animated animate__fadeInUp">
                        <h1>Клиенты</h1>
                    </div>
                    <div className="clients__info wow animate__animated animate__fadeInUp">
                        <p>Основу клиентской базы составляют генерирующие и сетевые компании в
                            области электроэнергетики. Основные объекты - АЭС, ТЭЦ, ГЭС, ЛЭП и др.
                            Также проводятся работы на промышленных заводах и предприятиях.</p>
                    </div>
                    <div className="clients__visible">
                        <div className="clients__client_example wow animate__animated animate__fadeInUp">
                            <div className="client__image DGK_Prim"></div>
                            <div className="client__name"><p>ДГК "Приморская генерация"</p></div>
                            <div className="client__work">
                                <p>Поставлена и введена в эксплуатацию установка <br />
                                    по очистке и регенерации масла КСОР-1</p>
                            </div>
                        </div>
                        <div className="clients__client_example wow animate__animated animate__fadeInUp">
                            <div className="client__image DGK_Hab"></div>
                            <div className="client__name"><p>ДГК "Хабаровская генерация"</p></div>
                            <div className="client__work">
                                <p>Поставлена и введена в эксплуатацию установка по очистке и регенерации масла КСОР-1  </p>
                            </div>
                        </div>
                        <div className="clients__client_example wow animate__animated animate__fadeInUp">
                            <div className="client__image Smol"></div>
                            <div className="client__name"><p>Смоленская АЭС</p></div>
                            <div className="client__work">
                                <p>Поставлена и введена в эксплуатацию  установка по электрофизической очистке 2МЭФО-200   </p>
                            </div>
                        </div>
                    </div>
                    <div className="clients__hidden" id="hidden">
                        <div className="clients__client_example">
                            <div className="client__image DGK_Nyr"></div>
                            <div className="client__name"><p>ДГК "Нюрингринская ГРЭС"</p></div>
                            <div className="client__work">
                                <p>Поставлена и введена в эксплуатацию установка по очистке и регенерации масла КСОР-1   </p>
                            </div>
                        </div>
                        <div className="clients__client_example">
                            <div className="client__image DGK_Amur"></div>
                            <div className="client__name"><p>ДГК "Амурская генерация"</p></div>
                            <div className="client__work">
                                <p>Поставлена и введена в эксплуатацию установка по очистке и регенерации масла КСОР-1 </p>
                            </div>
                        </div>
                        <div className="clients__client_example client_example__last">
                            <div className="client__image PMES"></div>
                            <div className="client__name"><p>Нижегородская ПМЭС</p></div>
                            <div className="client__work">
                                <p>Поставлена и введена в эксплуацию установка МЭФО-200МВ КТИ, выполняющая функции очистки</p>
                            </div>
                        </div>
                    </div>

                    {/* <div onClick={()=>{diplay_hide('#hidden');return false;}} data-wow-offset="300" data-wow-duration="2s"> */}
                    <div onClick={() => { diplay_hide('#hidden'); return false; }} className="clients__button wow animate__animated animate__fadeIn" data-wow-offset="100" data-wow-duration="1s">
                        <img src={arrow} alt="" className="clients__arrow_bottom" id="arrowClients"></img>
                    </div>
                    {/* </div> */}
                </div>
            </div>


            <div className="content__container">
                <div className="about__thanks">
                    <div className="thanks__title"><h1>Доверие и компетенции</h1></div>
                    <div className="thanks__wrapper">
                        <a href="../files/Rosseti.pdf" target="_blank"><div className="thanks__example rosseti wow animate__animated animate__fadeIn" data-wow-duration="1s"></div></a>
                        <a href="../files/DGK.pdf" target="_blank"><div className="thanks__example DGK wow animate__animated animate__fadeIn" data-wow-duration="1s"></div></a>
                        <a href="../files/DGK_Hab.pdf" target="_blank"><div className="thanks__example DGK_HAB wow animate__animated animate__fadeIn" data-wow-duration="1s"></div></a>
                        <a href="../files/Sozidanie.pdf" target="_blank"><div className="thanks__example Sozidanie wow animate__animated animate__fadeIn" data-wow-duration="1s"></div></a>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>

    )
}
