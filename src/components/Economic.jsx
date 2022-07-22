import React from 'react'
import '../scss/economic.scss'
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { ReactComponent as IconFile } from '../media/icons/file.svg';




export default function Economic() {
  window.scrollTo(0, 0);
  function showFooter() {
    document.querySelector('.footer').style.display = "flex"
  }
  setTimeout(() => {
    showFooter()
  }, 300);
  return (
    <div class="economic">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Экономика | РМ</title>
      </Helmet>
      <div class="content__container">
        <div class="economic__economicBenefit">
          <div class="economicBenefit__title wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
            <h1>Экономическая выгода</h1>
          </div>
          <div class="economicBenefit__textTop wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
            <p> На данной странице отображена модель расчета экономической выгоды при выборе услуг компании ООО
              "Регенерация масел" по <br /> сверхглубокой очистке и восстановлению химико-физических свойств
              отработанного масла.</p>
          </div>

          <div class="economic__wrapper">
            <div class="economicBenefit__textLeft wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
              <p>
                Имеется два предприятия А и Б, на <br /> которых находится по 20 тонн<br /> отработанного
                трансформаторного масла. <br /><br /><br />

                Для его замены Предприятию А требуется <br /> оборудовать места хранения, вызвать <br /> службу
                по утилизации отходов и
                закупить <br /> новое масло у поставщика. Предприятие Б <br /> решает восстановить отработанное
                масло <br /> и обращается в ООО "Регенерация масел".
                <br /><br />

                Ниже приведено детальное сравнение <br /> расходов обеих организаций.
              </p>
            </div>
            <div class="economicBenefit__initData wow animate__animated animate__fadeIn" data-wow-delay="0.2s"
              data-wow-duration="1s">
              <div class="initData__title">
                <p>Исходные данные:</p>
              </div>
              <div class="initData__content">
                <div class="initData__tezis">
                  <div class="initData__point"></div>
                  <p class="initData__el">Два промышленных предприятия </p>
                </div>
                <div class="initData__tezis">
                  <div class="initData__point"></div>
                  <p class="initData__el">20 тонн трансформаторного масла на каждом из предприятий</p>
                </div>
                <div class="initData__tezis">
                  <div class="initData__point"></div>
                  <p class="initData__el">Диапазон стоимости нового трансформаторного масла <br />
                    110 тыс. - 140 тыс. рублей/тонну</p>
                </div>



              </div>
            </div>
          </div>

        </div>
      </div>



      <div class="economic__companyA">
        <div class="content__container">
          <div class="companyA__title wow animate__animated animate__fadeIn">
            <h2>Условия расчетов</h2>
          </div>
          <div class="companyA__columnNames wow animate__animated animate__fadeIn">
            <div class="columnNames__action">Действие</div>
            <div class="columnNames__time">Рабочее время</div>
            <div class="columnNames__cost">Затраты</div>
          </div>
          <div class="company__wrapper wow animate__animated animate__fadeIn" data-wow-offset="100">
            <div class="company__left">
              <h2>Предприятие А</h2>
            </div>
            <div class="company__right">
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Оснащение помещений для хранения <br />
                    отработанного масла </div>
                </div>
                <div class="Col__tezis _time">
                  <div class="Col__point"></div>
                  <div class="Col__el"> 3 дня</div>
                </div>
                <div class="Col__tezis _cost">
                  <div class="Col__point"></div>
                  <div class="Col__el">от 80 тыс. р</div>
                </div>
              </div>
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Проверка отработанного масла <br />
                    перед утилизацией </div>
                </div>
                <div class="Col__tezis _time">
                  <div class="Col__point"></div>
                  <div class="Col__el"> 1 день</div>
                </div>
                <div class="Col__tezis _cost">
                  <div class="Col__point"></div>
                  <div class="Col__el">Входит в сумму утилизации</div>
                </div>
              </div>
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Утилизация отработанного масла </div>
                </div>
                <div class="Col__tezis _time">
                  <div class="Col__point"></div>
                  <div class="Col__el"> 2 дня</div>
                </div>
                <div class="Col__tezis _cost">
                  <div class="Col__point"></div>
                  <div class="Col__el">Сумма утилизации составляет <br />
                    от 200 тыс. до 400 тыс.</div>
                </div>
              </div>
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Закупка нового трансформаторного масла </div>
                </div>
                <div class="Col__tezis _time">
                  <div class="Col__point"></div>
                  <div class="Col__el"> Минимум 7 дней</div>
                </div>
                <div class="Col__tezis _cost">
                  <div class="Col__point"></div>
                  <div class="Col__el">Сумма закупки составляет<br />
                    от 1.5 млн до 3 млн рублей</div>
                </div>
              </div>
            </div>
          </div>

          <div class="company__conclusion">
            <div class="conclusion__title wow animate__animated animate__fadeInUp">
              <p>Вывод по действиям предприятия A</p>
            </div>
            <div class="conclusion__text wow animate__animated animate__fadeInUp">
              <p>{"    "}Просуммировав средние значения из полученных диапазонов делаем вывод, что
                для продолжения работы своего объекта Предприятию А <br />
                необходимо израсходовать около 3 млн рублей за 18 дней, заключая договоры с тремя
                юридическими лицами: поставщик масла, подрядчик <br />
                по обустройству места хранения и сборщик отработанного масла.</p>
            </div>
          </div>
        </div>

      </div>
      <div class="economic__companyB">
        <div class="content__container">
          <div class="company__wrapper wow animate__animated animate__fadeIn" data-wow-offset="100">
            <div class="company__left">
              <h2>Предприятие Б</h2>
            </div>
            <div class="company__right">
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Обращение в ООО "Регенерация масел" </div>
                </div>

              </div>
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Анализ проб масла </div>
                </div>
                <div class="Col__tezis _time">
                  <div class="Col__point"></div>
                  <div class="Col__el"> 1 день</div>
                </div>
                <div class="Col__tezis _cost">
                  <div class="Col__point"></div>
                  <div class="Col__el">Входит в сумму работ</div>
                </div>
              </div>
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Очистка масла <br />
                    (фильтрация, осушка, дегазация) </div>
                </div>
                <div class="Col__tezis _time">
                  <div class="Col__point"></div>
                  <div class="Col__el"> 2 дня</div>
                </div>
                <div class="Col__tezis _cost">
                  <div class="Col__point"></div>
                  <div class="Col__el">До 750 тыс. рублей</div>
                </div>
              </div>
              <div class="row">
                <div class="Col__tezis _action">
                  <div class="Col__point"></div>
                  <div class="Col__el">Регенерация и стабилизация присадками </div>
                </div>
                <div class="Col__tezis _time">
                  <div class="Col__point"></div>
                  <div class="Col__el">2 дня</div>
                </div>
                <div class="Col__tezis _cost">
                  <div class="Col__point"></div>
                  <div class="Col__el">До 600 тыс. рублей</div>
                </div>
              </div>
            </div>
          </div>
          <div class="company__conclusion">
            <div class="conclusion__title">
              <p>Вывод по действиям предприятия Б</p>
            </div>
            <div class="conclusion__text">
              <p>{"    "}Предприятие Б при восстановлении 20 тонн трансформаторного масла в
                среднем тратит около 1,3 млн рублей, что составляет около 50% от <br />
                средней суммы покупки нового масла у поставщика. Временной диапазон составит полных 5
                рабочих дней при круглосуточной работе без <br />
                учета расстояний.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="economic__final">
        <div class="content__container">
          <div class="final__title wow animate__animated animate__fadeInUp">
            <h2>Сравнительный вывод:</h2>
          </div>
          <div class="final__text wow animate__animated animate__fadeIn">
            <p>{"    "}Анализируя вышеуказанные данные видим, что Предприятие Б по сравнению с
              Предприятием А экономит порядка 1,5 млн рублей. Также<br />
              важно заметить, что Предприятие Б заключило договор только с одним юридическим лицом, что
              существенно сэкономило временные<br />
              затраты руководителей организации.</p>
          </div>
          <div className="final__docs">
            <div className="docs__title">Документы с расчетами<br />
              для соответствующих<br />
              объемов</div>
              <div className="docs__example">
              <a href="../files/economic/Энерго-временные_затраты_20_тонн.pdf" target="_blank">
                <div className="example__icon"><IconFile /></div>
                <div className="example__name">10 тонн</div>
              </a>
            </div>
            <div className="docs__example">
              <a href="../files/economic/Энерго-временные_затраты_20_тонн.pdf" target="_blank">
                <div className="example__icon"><IconFile /></div>
                <div className="example__name">20 тонн</div>
              </a>
            </div>
            <div className="docs__example">
              <a href="../files/economic/Энерго-временные_затраты_40_тонн.pdf" target="_blank">
                <div className="example__icon"><IconFile /></div>
                <div className="example__name">40 тонн</div>
              </a>
            </div>
            <div className="docs__example">
              <a href="../files/economic/Энерго-временные_затраты_50_тонн.pdf" target="_blank">
                <div className="example__icon"><IconFile /></div>
                <div className="example__name">50 тонн</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
