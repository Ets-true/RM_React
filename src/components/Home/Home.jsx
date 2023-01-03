import React from 'react'
import './home.scss'
import schema from '../../media/img/scheme.png'
import schemaMob from '../../media/img/scheme__mobile.png'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { ReactComponent as IconFile } from '../../media/icons/file.svg';




export default function Home() {

  window.scrollTo(0, 0);
  function showFooter() {
    document.querySelector('.footer').style.display = "flex"
    if (document.documentElement.clientWidth < 1000) {
      document.querySelector('.footer').style.display = "block"
    }
  }
  setTimeout(() => {
    showFooter()
  }, 300);
  
  return (
    <div className="bd">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Главная | РМ</title>
      </Helmet>
      <div className="home content">
        <div className="home__mainTezis">
          <div className="content__container">
            <div className="mainTezis__content wow animate__animated animate__fadeIn">
              <div className="mainTezis__text wow animate__animated animate__fadeInUp">
                Регенерируем индустриальные масла
                и экономим ресурсы предприятий по всей России.
              </div>
              <Link to="/company">
                <div className="mainTezis__button wow animate__animated animate__fadeInUp">
                  Подробнее
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="home__diagram">
          <div className="diagram__content">
            <div className="diagram__title wow animate__animated animate__fadeInUp">
              <h1>Комплексное решение </h1>
            </div>
            <div className="diagram__text wow animate__animated animate__fadeInUp">
              <p>Восстановление физико-химических свойств трансформаторного и
                турбинного масел с применением новейших адсорбирующих технологий с
                целью их дальнейшей эксплуатации:</p>
            </div>
            <div className="diagram__img wow animate__animated animate__fadeIn">
              <img src={schema} alt=""></img>
            </div>
            <div className="diagram__img__mobile wow animate__animated animate__fadeIn">
              <img src={schemaMob} alt=""></img>
            </div>
            <Link to="/techno">
              <div className="diagram__button wow animate__animated animate__fadeIn">
                Подробнее
              </div>
            </Link>
          </div>
        </div>
        <div className="home__EconomicTechnic">

          <div className="blot"></div>

          <div className="home__economic">
            <div className="content__container">
              <div className="EconomicTechnic__title wow animate__animated animate__fadeInUp">
                <h1>Экономическая выгода</h1>
              </div>
              <div className="tezis__border">
                <div className="tezis__column">
                  <div className="tezis__point"></div>
                  <div className="tezis__digit wow animate__animated animate__fadeInUp">
                    01
                  </div>
                  <div className="tezis__title wow animate__animated animate__fadeInUp">
                    <h2>Экономия средств
                      на утилизацию</h2>
                  </div>
                  <div className="tezis__text wow animate__animated animate__fadeInUp">
                    <p>Продливаем срок службы масла, избавив вас от необходимости его утилизации</p>
                  </div>
                </div>
                <div className="tezis__column">
                  <div className="tezis__point"></div>
                  <div className="tezis__digit wow animate__animated animate__fadeInUp">
                    02
                  </div>
                  <div className="tezis__title wow animate__animated animate__fadeInUp">
                    <h2>Минимизация издержек
                      на закупку</h2>
                  </div>
                  <div className="tezis__text wow animate__animated animate__fadeInUp">
                    <p>95% от объема отработанного масла будет готово к дальнейшей эксплуатации</p>
                  </div>
                </div>
                <div className="tezis__column">
                  <div className="tezis__point"></div>
                  <div className="tezis__digit wow animate__animated animate__fadeInUp">
                    03
                  </div>
                  <div className="tezis__title wow animate__animated animate__fadeInUp">
                    <h2>Снижение расходов
                      на хранение</h2>
                  </div>
                  <div className="tezis__text wow animate__animated animate__fadeInUp">
                    <p>Масло используется на постоянной основе, нет необходимости в его хранении</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home__technic">
            <div className="content__container">
              <div className="EconomicTechnic__title wow animate__animated animate__fadeInUp">
                <h1>Технические преимущества</h1>
              </div>
              <div className="tezis__border">
                <div className="tezis__column">
                  <div className="tezis__point"></div>
                  <div className="tezis__digit wow animate__animated animate__fadeInUp">
                    04
                  </div>
                  <div className="tezis__title wow animate__animated animate__fadeInUp">
                    <h2>"Мобильное" восстановление</h2>
                  </div>
                  <div className="tezis__text wow animate__animated animate__fadeInUp">
                    <p>Наша передвижная установка приедет к вам для реализации всех необходимых задач</p>
                  </div>
                </div>
                <div className="tezis__column">
                  <div className="tezis__point"></div>
                  <div className="tezis__digit wow animate__animated animate__fadeInUp">
                    05
                  </div>
                  <div className="tezis__title wow animate__animated animate__fadeInUp">
                    <h2>Регенерация без остановок</h2>
                  </div>
                  <div className="tezis__text wow animate__animated animate__fadeInUp">
                    <p>Работа от протоколов анализа масла до получения необходимых показателей</p>
                  </div>
                </div>
                <div className="tezis__column">
                  <div className="tezis__point"></div>
                  <div className="tezis__digit wow animate__animated animate__fadeInUp">
                    06
                  </div>
                  <div className="tezis__title wow animate__animated animate__fadeInUp">
                    <h2>Энергоэффективность</h2>
                  </div>
                  <div className="tezis__text wow animate__animated animate__fadeInUp">
                    <p>Минимальные затраты электроэнергии - максимальная производительность установки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="home__ecological">
          <div className="content__container">
            <div className="ecological__title wow animate__animated animate__fadeInUp">
              <h1>Экологические преимущества</h1>
            </div>
            <div className="ecological__text wow animate__animated animate__fadeInUp">
              <p>Описанные выше экономические и технические преимущества являются <br /> основополагающими
                факторами выбора нашей компании, но также <br /> приятным дополнением будет забота об
                окружающей среде.</p>
            </div>
            <div className="ecological__wrapper">
              <div className="ecological__column">
                <div className="ecological__digit">
                  <div className="digit wow animate__animated animate__fadeIn"> 01 </div>
                </div>
                <div className="ecological_tezisTitle wow animate__animated animate__fadeInUp">
                  <h2>Экологически чистый продукт</h2>
                </div>
                <div className="ecological_tezisText wow animate__animated animate__fadeInUp">
                  <p>Процесс регенерации масла<br /> происходит только с использованием<br /> природных материалов </p>
                </div>

              </div>
              <div className="ecological__column">
                <div className="ecological__digit">
                  <div className="digit wow animate__animated animate__fadeIn"> 02 </div>
                </div>
                <div className="ecological_tezisTitle wow animate__animated animate__fadeInUp"><h2>Здоровая планета</h2></div>
                <div className="ecological_tezisText wow animate__animated animate__fadeInUp">
                  <p>Восстановление масла является<br /> частью принципа безотходного<br /> производства</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home__results">
        <div className="content__container">
          <div className="results__title wow animate__animated animate__fadeInUp">Результат очистки и регенерации</div>
          <div className="results__resultRow wow animate__animated animate__fadeInUp">
            <div className="result__example">
              <a href="../files/results/Россети_ФСК_ЕЭС_Пахра.pdf" target="_blank">
                <div className="result__name">Россети ФСК ЕЭС Подстанция<br/> пс-500кв Пахра</div>
                <div className="result__file-icon"><IconFile/></div>
              </a>
            </div>
            <div className="result__example">
              <a href="../files/results/АО_Завод_РЭТО.pdf" target="_blank">
                <div className="result__name">Россети московский регион<br/>АО Завод «РЭТО»</div>
                <div className="result__file-icon"><IconFile/></div>
              </a>
            </div>
            <div className="result__example">
              <a href="../files/results/Филиал_ТУЛЭНЕРГО.pdf" target="_blank">
                <div className="result__name">ПАО «МРСК Центра и Приволжья» -<br/> филиал  ТУЛЭНЕРГО</div>
                <div className="result__file-icon"><IconFile/></div>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
