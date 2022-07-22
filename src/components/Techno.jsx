import React from 'react'

import fileIcon from '../media/icons/file.svg'
import engineerIcon from '../media/icons/engineer.svg'
import arrowWhiteIcon from '../media/icons/arrow_white.svg'
import arrowBlackIcon from '../media/icons/arrow_black.svg'
import chemistryIcon from '../media/icons/chemistry.svg'
import medalIcon from '../media/icons/medal.svg'

import boilerImg from '../media/img/boiler.jpg'
import filterImg from '../media/img/filter.jpg'
import deghydrationImg from '../media/img/dehydration.jpg'
import adsorbentsImg from '../media/img/adsorbents.jpg'
import controlImg from '../media/img/control.jpg'

import TechnoSlider from './TechnoSlider'

import "../scss/techno.scss"
import Footer from './Footer'
import $ from 'jquery';
import {Helmet} from "react-helmet";



export default function Techno() {
    window.scrollTo(0, 0);
    function showFooter() {
        document.querySelector('.footer').style.display =  "flex"
    }
    setTimeout(() => {
        showFooter()
    }, 300);


    function diplay_hide (blockId){ 
        if ($(blockId).css('display') == 'none') { 
            $(blockId).animate({height: 'show'}, 300); 
        } 
        else {     
                $(blockId).animate({height: 'hide'}, 300); 
        }
    } 
    return (
        <div class="technology">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Технология | РМ</title>
            </Helmet>
            <div class="content__container">
                <div class="technology__aboutTech">

                    <div class="aboutTech__title wow animate__animated animate__fadeIn" data-wow-duration="0.8s"><h1>О технологии</h1></div>
                    <div class="aboutTech__text1 wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
                        <p>Существует порядка десяти запатентованных методов по восстановлению отработанного масла. Но каждый включает в себя ряд
                            существенных недостатков. Простые способы очистки масла, включающие в себя комбинированные методы фильтрации, дегазации и осушки,
                            дают низкое качество в виду отсутствия адсорбционной обработки. Более сложные технологии не отвечают требованиям
                            малоотходности и экологической безопасности - осадок, образующийся после прохода через сорбент, требует последующей утилизации в
                            качестве экологически опасного отхода. Данные недостатки были учтены в нашей разработке.</p>
                    </div>
                    <div class="aboutTech__tezis wow animate__animated animate__fadeIn" data-wow-delay="0.2s" data-wow-duration="1s">
                        <p>Из индустриальных масел мы восстанавливаем трансформаторные, турбинные и <br />компрессорные масла</p>
                    </div>
                    <div class="aboutTech__text2 wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
                        <p>Нашим изобретением является способ регенерации отработанного энергетического масла, включающий удаление механических примесей,
                            подогрев, вакуумную сушку и дегазацию, адсорбционную обработку и последующий ввод базового пакета присадок, отличающийся тем, что
                            перед адсорбционной обработкой вводят деактиватор металлов в виде антраниловой кислоты, а для адсорбционной обработки применяют
                            гранулированный алюмосиликатный адсорбент, впоследствии не требующий специализированной утилизации. <br />
                            <br />

                            Преимущество нашей технологии - повышение качества регенерированного масла за счет более полного извлечения продуктов старения из
                            отработанного масла при сохранении экологичности.</p>
                    </div>
                </div>
            </div>

            <div class="technology__system">
                <div class="content__container">
                    <div class="system__title">
                        <h1 class="wow animate__animated animate__fadeInUp">Система регенерации масла</h1>
                        <div class="system__patent wow animate__animated animate__fadeIn" data-wow-delay="0.5s" data-wow-duration="1s">
                            <p><a href="https://patenton.ru/patent/RU2679901C1" target="_blank">Полная версия патента</a></p>
                            <a href="https://patenton.ru/patent/RU2679901C1" target="_blank"><img src={fileIcon} alt="" class="file__icon"></img></a>
                        </div>

                    </div>
                </div>
                <div class="content__container">
                    <div class="technology__engineer">
                        <div class="engineer__title">
                            <img src={engineerIcon} alt="" class="engineer__icon wow animate__animated animate__fadeIn" data-wow-delay="0.5s" data-wow-duration="1s"></img>
                            <h2 class="wow animate__animated animate__fadeInUp">Установка КСОР-1</h2>
                        </div>
                        <div class="engineer__info wow animate__animated animate__fadeInUp">
                            <p>  Наша технология реализована в установке КСОР-1 (Комплексная система очистки и регенерации масел), являющейся частью
                                МУРМ (Мобильной установки регенерации масел), базирующейся на автомобиле КАМАЗ с прицепом. На слайдере показаны основные
                                элементы установки. С более подробной информацией вы можете ознакомиться в патенте.
                            </p>
                        </div>
                        <div class="egineer__main">
                            <TechnoSlider />

                            {/* <div class="slider__button_block wow animate__animated animate__fadeIn" data-wow-duration="1s">
                    
                    
                </div> */}


                            <div class="engineer__text wow animate__animated animate__fadeIn" data-wow-delay="0.5s" tadata-wow-duration="1.3s">
                                <p class="en_text">Отработанное индустриальное масло подается насосом в вакуумную камеру через фильтр грубой очистки (ФГО) и электронагреватель. ФГО представляет собой металлический или полимерный сетчатый фильтр,
                                    извлекающий из отработанного масла механические примеси размером более 50 мкм,
                                    которые впоследствии (при отмывке ФГО) удаляются. <br />
                                    <br />
                                    Электронагреватель
                                    обеспечивает нагрев потока масла до температуры (40-60°С), необходимой для
                                    эффективной работы камеры вакуумной осушки (КВО). В КВО с помощью насоса осуществляется вакуумная сушка (извлечение воды)
                                    и дегазация (извлечение растворенных в масле газов, включая воздух). Извлекаемые
                                    вода и газы выбрасываются в атмосферу через конденсатор паров.</p>
                                <p class="en_text">
                                    Осушенное и дегазированное масло из КВО подается насосом на обработку
                                    в блок адсорбентов (БА). При этом масло дополнительно подогревается электронагревателем
                                    до рабочей температуры процесса адсорбции (70-90°С).В БА из масла удаляются продукты старения (оксикислоты, смолы,
                                    полиароматические соединения, металлорганические и другие гетероатомные
                                    соединения). Для интенсификации этого процесса перед адсорбционной обработкой в
                                    масло с помощью миксера вводят деактиватор металлов в виде антраниловой кислоты. <br />
                                    <br />
                                    В масло, прошедшее адсорбционную обработку, вводят с помощью миксера
                                    базовый пакет присадок в соответствии с требованиями действующих нормативных
                                    документов.
                                </p>
                            </div>

                            <div class="engineer__scheme wow animate__animated animate__fadeIn" data-wow-delay="0.5s" tadata-wow-duration="1.3s">
                                <a href="../files/scheme_princip.jpg" target="_blank">
                                    <div class="scheme__img">
                                        <img alt=""></img>
                                    </div>
                                    <div class="scheme__title">
                                        Cхема комбинированная принципиальная.pdf
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content__container">
                    <div class="technology__chemistry">
                        <div class="chemistry__title">
                            <img src={chemistryIcon} alt="" class="chemistry__icon wow animate__animated animate__fadeIn" data-wow-delay="0.5s" data-wow-duration="1s"></img>
                            <h2 class="wow animate__animated animate__fadeInUp">Физико-химические процессы</h2>
                        </div>
                        <div class="chemistry__info wow animate__animated animate__fadeInUp">
                            <p>     Выше был разобран технологический блок, включающий в себя части нашей установки и последовательность их работы.
                                Далее более подробно разберем прикладной функционал использования установки КСОР-1 с точки зрения внутренних изменений
                                восстанавливаемого индустриального масла.
                            </p>
                            <br />
                            <br />
                            <p>Работа по восстановлению масел делится на несколько этапов:</p>
                        </div>
                        <div class="chemistry__opener  wow animate__animated animate__fadeIn" data-wow-delay="0.5s" data-wow-duration="1s">
                            {/* <div class="opener__visible border_none" onClick={()=>{diplay_hide('#hidden1');return false;}}>
                                <div class="opener__title"><h2>Анализ масла</h2></div>

                                <div>
                                    <div class="opener__button"><img src={arrowBlackIcon} alt="" class="opener__arrow"></img></div>
                                </div>

                            </div>
                            <div class="opener__hidden" id="hidden1">

                            </div> */}

                            <div class="opener__visible border_none" onClick={()=>{diplay_hide('#hidden2');return false;}}>
                                <div class="opener__title"><h2>Очистка</h2></div>
                                <div>
                                    <div class="opener__button"><img src={arrowBlackIcon} alt="" class="opener__arrow"></img></div>
                                </div>
                            </div>
                            <div class="opener__hidden" id="hidden2">
                                <div class="hidden__wrap">
                                    <div class="opener__columnNames">
                                        <div class="operation">Технологические операции</div>
                                        <div class="pollution_delete">Удаляемые загрязнения</div>
                                        <div class="pollution">Выбросы и отходы</div>
                                    </div>
                                    <div class="opener__hidden_left">
                                        <div class="opener__hidden_operation">
                                            Грубая очистка
                                            контейнерами - сепараторами
                                        </div>
                                        <div class="opener__hidden_operation">
                                            Вакуумная осушка
                                        </div>
                                    </div>
                                    <div class="opener__hidden_right">
                                        <div class="hidden__block">
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Твердые частицы </div>
                                                </div>
                                                <div class="Col__tezis Col_tezis_2">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Пары масла </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Масляный шлам </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hidden__block">
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Вода (50% от исходного <br />
                                                        влагосодержания за один проход)</div>
                                                </div>
                                                <div class="Col__tezis Col_tezis_2">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Пары воды</div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Полярные гетероатомные <br />
                                                        углеводороды</div>
                                                </div>
                                                <div class="Col__tezis Col_tezis_2">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Концентрат загрязнений <br />
                                                        (группа СНО) </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="opener__visible" onClick={()=>{diplay_hide('#hidden3');return false;}}>
                                <div class="opener__title"><h2>Адсорбционная регенерация</h2></div>
                                <div>
                                    <div class="opener__button"><img src={arrowBlackIcon} alt="" class="opener__arrow"></img></div>
                                </div>
                            </div>
                            <div class="opener__hidden" id="hidden3">
                                <div class="hidden__wrap">
                                    <div class="opener__columnNames">
                                        <div class="operation">Технологические операции</div>
                                        <div class="pollution_delete">Удаляемые загрязнения</div>
                                        <div class="pollution">Выбросы и отходы</div>
                                    </div>
                                    <div class="opener__hidden_left">
                                        <div class="opener__hidden_operation center">
                                            Активированная <br /> адсорбция <br />
                                            с реактивацией сорбента

                                        </div>
                                    </div>
                                    <div class="opener__hidden_right">
                                        <div class="hidden__block">
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Смоло-асфальтовые вещества
                                                    </div>
                                                </div>
                                                <div class="Col__tezis Col_tezis_2">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Пары воды
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Полиароматические соединения
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="hidden__block">
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Кислоты, соли оксикислот (мыла)
                                                    </div>
                                                </div>
                                                <div class="Col__tezis Col_tezis_2">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Пары масла
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Другие полярные гетероатомные углеводороды
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="opener__visible" onClick={()=>{diplay_hide('#hidden4');return false;}}>
                                <div class="opener__title"><h2>Стабилизация присадками</h2></div>
                                <div>
                                    <div class="opener__button"><img src={arrowBlackIcon} alt="" class="opener__arrow"></img></div>
                                </div>
                            </div>
                            <div class="opener__hidden" id="hidden4">
                                <div class="hidden__wrap">
                                    <div class="opener__columnNames">
                                        <div class="operation">Технологические операции</div>
                                        <div class="pollution_delete">Удаляемые загрязнения</div>
                                        <div class="pollution">Выбросы и отходы</div>
                                    </div>
                                    <div class="opener__hidden_left">
                                        <div class="opener__hidden_operation center">
                                            Компаундирование <br /> базового масла с <br /> пакетами присадок


                                        </div>
                                    </div>
                                    <div class="opener__hidden_right">
                                        <div class="hidden__block center">
                                            <div class="row Stab">
                                                <div class="Col__tezis">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Твердые частицы
                                                    </div>
                                                </div>
                                                <div class="Col__tezis Col_tezis_2">
                                                    <div class="Col__point"></div>
                                                    <div class="Col__el">Отсутствуют
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* <div class="technology__form">
                    <div class="form__title">
                        Появились вопросы? Свяжитесь с нами!
                    </div>
                    <div class="form__button">
                        Написать нам
                    </div>

                </div> */}

                <div class="content__container">
                    <div class="technology__result">
                        <div class="result__title">
                            <img src={medalIcon} alt="" class="result__medal wow animate__animated animate__fadeIn" data-wow-delay="0.5s" data-wow-duration="1s"></img>
                            <h2 class="wow animate__animated animate__fadeInUp">Результат работы</h2>
                        </div>
                        <div class="result__text1 wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
                            <p>{" "}{" "}{" "}{" "}После полного цикла восстановления, включающего в себя фильтрацию, осушку, дегазацию и регенерацию через
                                сорбент, качество полученного трансформаторного, турбинного и
                                компрессорного масла соответствует требованиям СТО и ГОСТ, согласно которым масло может повторно эксплуатироваться.</p>
                        </div>
                        <div class="result__tezis wow animate__animated animate__fadeIn" data-wow-delay="0.2s" data-wow-duration="1s">
                            <p>Качество восстановленного масла гарантирует его дальнейшую эксплуатацию в течении 1 года на <br />
                                работающем оборудовании и хранение в маслоемкостях в течении 3 лет</p>
                        </div>
                        <div class="result__text2 wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
                            <p>{" "}{" "}{" "}{" "}С полученными показателями кислотного числа, пробивного напряжения, содержания шлама, класса промышленной
                                частоты и остальными данными для трансформаторного и турбинного масел Вы можете ознакомиться в нижеприведенных документах. В них содержатся экспертизы
                                московской химической лаборатории ООО "ЭлегазЭнергоСервис", а также результаты нашего собственного анализа. </p> <br />

                        </div>
                    </div>
                </div>
            </div>
        {/* <Footer/> */}
        </div>
    )
}







