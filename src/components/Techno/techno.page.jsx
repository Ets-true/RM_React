import React from 'react'
import arrowBlackIcon from '../../media/icons/arrow_black.svg'
import { ReactComponent as ChemistryIcon } from '../../media/icons/chemistry.icon.svg'
import { ReactComponent as GearIcon } from '../../media/icons/gear.icon.svg'
import { ReactComponent as RegenerationIcon } from '../../media/icons/regeneration.icon.svg'
import './techno.style.scss'
import $ from 'jquery';
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import { technoContent as content } from './techno.content'
import { animI } from '../../helpers/Constants';


export default function Techno() {
  window.scrollTo(0, 0);
  function showFooter() {
    document.querySelector('.footer').style.display = 'flex'
  }
  setTimeout(() => {
    showFooter()
  }, 300);

  setTimeout(() => {
    let plants = document.querySelectorAll('.plant__img')
    let num = 0;
    let winHeight = $(window).height();
    let murm = document.querySelector('.technology__murm')
    let counter_num = 0;
    let plant_position

    $(window).on('scroll', function () {
      plant_position = plants[num].getBoundingClientRect().top;
      if (plant_position <= winHeight / 1.05) {
        plants[num].style.opacity = 1;
        plants[num].style.transform = 'translateX(0px)';
        if(num<=1){
          num++;
        }
      }

      let murm_position = murm.getBoundingClientRect().top;
      if (murm_position <= winHeight / 1.5) {
        if (counter_num === 0) {
          counter()
          counter_num++;
        }

      }
    })

    function counter() {
      var time = 1.5

      $('.number-large').each(function () {
        var
          i = 0,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function () {
            if (i <= num) {
              that.html(i);
            }
            else {
              clearInterval(int)
            }
            i=i+5
          }, step);
      })

      $('.number').each(function () {
        var
          i = 0,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function () {
            if (i <= num) {
              that.html(i);
            }
            else {
              clearInterval(int)
            }
            i=i+1
          }, step);
      })

      $('.number').each(function () {
        var
          i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function () {
            if (i <= num) {
              that.html(i);
            }
            else {
              clearInterval(int)
            }
            i=i+1
          }, step);
      })

      $('.number-small').each(function () {
        var
          i = 0,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function () {
            if (i <= num) {
              that.html(i);
            }
            else {
              clearInterval(int)
            }
            i = i + 1
          }, step);
      })

    }

  }, 500);



  function diplay_hide(blockId) {
    if ($(blockId).css('display') == 'none') {
      $(blockId).animate({ height: 'show' }, 300);
    }
    else {
      $(blockId).animate({ height: 'hide' }, 300);
    }
  }
  return (
    <div class={`technology`}>
      <Helmet>
        <meta charSet={`utf-8`} />
        <title>{content.helmet}</title>
      </Helmet>
      <div class={`content__container`}>
        <div class={`technology__aboutTech`}>
          <div class={`aboutTech__title ${animI}`} data-wow-duration={`0.8s`}><h1>{content.about.title}</h1></div>
          <div class={`aboutTech__text1 ${animI}`} data-wow-duration={`0.8s`}><p>{content.about.text1}</p></div>
          <div class={`aboutTech__tezis ${animI}`} data-wow-delay={`0.2s`} data-wow-duration={`1s`}><p>{content.about.tezis}</p></div>
          <div class={`aboutTech__text2 ${animI}`} data-wow-duration={`0.8s`}>
            <p>{content.about.text1}</p><br/><p>{content.about.text3}</p>
          </div>
        </div>
      </div>
      <div class={`technology__system`}>
        <div class={`content__container`}>
          <div className={`techprocess__info`}>
            <div className={`techprocess__title ${animI}`} data-wow-duration={`0.8s`}>{content.process.title}</div>
            <div className={`techprocess__text ${animI}`} data-wow-duration={`0.8s`}>
              <p>{content.process.text}</p><br/><br/>
              <p>{content.process.below}</p>
            </div>
          </div>
          <div class={`chemistry__opener  ${animI}`} data-wow-delay={`0.5s`} data-wow-duration={`1s`}>
            <div class={`opener__visible border_none`} onClick={() => { diplay_hide('#hidden2'); return false; }}>
              <div class={`opener__title`}><h2>Очистка</h2></div>
              <div>
                <div class={`opener__button`}><img src={arrowBlackIcon} alt={``} class={`opener__arrow`}></img></div>
              </div>
            </div>
            <div class={`opener__hidden`} id={`hidden2`}>
              <div class={`hidden__wrap`}>
                <div class={`opener__columnNames`}>
                  <div class={`operation`}>Технологические операции</div>
                  <div class={`pollution_delete`}>Удаляемые загрязнения</div>
                  <div class={`pollution`}>Выбросы и отходы</div>
                </div>
                <div class={`opener__hidden_left`}>
                  <div class={`opener__hidden_operation`}>
                    Грубая очистка
                    контейнерами - сепараторами
                  </div>
                  <div class={`opener__hidden_operation`}>
                    Вакуумная осушка
                  </div>
                </div>
                <div class={`opener__hidden_right`}>
                  <div class={`hidden__block`}>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Твердые частицы </div>
                      </div>
                      <div class={`Col__tezis Col_tezis_2`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Пары масла </div>
                      </div>
                    </div>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Масляный шлам </div>
                      </div>
                    </div>
                  </div>
                  <div class={`hidden__block`}>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Вода (50% от исходного <br />
                          влагосодержания за один проход)</div>
                      </div>
                      <div class={`Col__tezis Col_tezis_2`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Пары воды</div>
                      </div>
                    </div>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Полярные гетероатомные <br />
                          углеводороды</div>
                      </div>
                      <div class={`Col__tezis Col_tezis_2`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Концентрат загрязнений <br />
                          (группа СНО) </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class={`opener__visible`} onClick={() => { diplay_hide('#hidden3'); return false; }}>
              <div class={`opener__title`}><h2>Адсорбционная регенерация</h2></div>
              <div>
                <div class={`opener__button`}><img src={arrowBlackIcon} alt={``} class={`opener__arrow`}></img></div>
              </div>
            </div>
            <div class={`opener__hidden`} id={`hidden3`}>
              <div class={`hidden__wrap`}>
                <div class={`opener__columnNames`}>
                  <div class={`operation`}>Технологические операции</div>
                  <div class={`pollution_delete`}>Удаляемые загрязнения</div>
                  <div class={`pollution`}>Выбросы и отходы</div>
                </div>
                <div class={`opener__hidden_left`}>
                  <div class={`opener__hidden_operation center`}>
                    Активированная <br /> адсорбция <br />
                    с реактивацией сорбента

                  </div>
                </div>
                <div class={`opener__hidden_right`}>
                  <div class={`hidden__block`}>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Смоло-асфальтовые вещества
                        </div>
                      </div>
                      <div class={`Col__tezis Col_tezis_2`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Пары воды
                        </div>
                      </div>
                    </div>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Полиароматические соединения
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class={`hidden__block`}>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Кислоты, соли оксикислот (мыла)
                        </div>
                      </div>
                      <div class={`Col__tezis Col_tezis_2`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Пары масла
                        </div>
                      </div>
                    </div>
                    <div class={`row`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Другие полярные гетероатомные углеводороды
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class={`opener__visible`} onClick={() => { diplay_hide('#hidden4'); return false; }}>
              <div class={`opener__title`}><h2>Стабилизация присадками</h2></div>
              <div>
                <div class={`opener__button`}><img src={arrowBlackIcon} alt={``} class={`opener__arrow`}></img></div>
              </div>
            </div>
            <div class={`opener__hidden`} id={`hidden4`}>
              <div class={`hidden__wrap`}>
                <div class={`opener__columnNames`}>
                  <div class={`operation`}>Технологические операции</div>
                  <div class={`pollution_delete`}>Удаляемые загрязнения</div>
                  <div class={`pollution`}>Выбросы и отходы</div>
                </div>
                <div class={`opener__hidden_left`}>
                  <div class={`opener__hidden_operation center`}>
                    Компаундирование <br /> базового масла с <br /> пакетами присадок


                  </div>
                </div>
                <div class={`opener__hidden_right`}>
                  <div class={`hidden__block center`}>
                    <div class={`row Stab`}>
                      <div class={`Col__tezis`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Твердые частицы
                        </div>
                      </div>
                      <div class={`Col__tezis Col_tezis_2`}>
                        <div class={`Col__point`}></div>
                        <div class={`Col__el`}>Отсутствуют
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`technology__murm`}>
            <div className={`murm__title ${animI}`} data-wow-duration={`0.8s`}><h1>Мобильный комплекс МУРМ</h1></div>
            <div className={`murm__tezis-group ${animI}`} data-wow-duration={`0.8s`}>
              <div className={`murm__tezis-element`}>
                <div className={`tezis__name`}>
                  <div className={`number-large`} data-num={`1500`}>0</div>
                  км
                </div>
                <div className={`tezis__surname`}>удаленность работ</div>
              </div>
              <div className={`murm__tezis-element`}>
                <div className={`tezis__name`}>
                  <div className={`number`} data-num={`45`}>0</div>
                  минут
                </div>
                <div className={`tezis__surname`}>время полного развертывания</div>
              </div>
              <div className={`murm__tezis-element`}>
                <div className={`tezis__name`}>
                  <div className={`number-small`} data-num={`4`}>0</div>
                  м<sup>3</sup>/ч
                </div>
                <div className={`tezis__surname`}>производительность</div>
              </div>
            </div>
            <div className={`murm__info ${animI}`} data-wow-duration={`0.8s`}>
              <div className={`murm__img`}></div>
              <div className={`murm__text-group `}>
                <div className={`murm__text-block`}>
                  <p>
                    Мобильная установка регенерации масла (далее - МУРМ)
                    позволяет удаленно выполнять полный цикл
                    восстановления индустриального масла на
                    объекте заказчика
                  </p>
                </div>
                <div className={`murm__text-block`}>
                  <p>
                    МУРМ включает в себя: установку очистки
                    МОИМ-4.0, установку регенерации
                    КСОР-1, а также химическую лабораторию
                    для анализа показателей масла во время всего
                    технологического процесса
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`plant__title`}><h1>Химическая лаборатория</h1></div>
          <div className={`plant__block`}>
            <div className={`plant__icon`}><ChemistryIcon /></div>
            <div className={`plant__info plant__info-chemistry`}>
              <div className={`firstText`}>
                Анализ качества необходимых параметров 
                индустриального масла производится с 
                использованием <a href={`../files/archive/хим.лаборатория.pdf`} target={`_blank`}><strong>поверенного оборудования</strong></a>
              </div>
              <div className={`secondText`}>
                <div>
                  Контроль тангенса угла диэлектрических потерь, 
                  пробивного напряжения и кислотного числа
                </div>
                <div>
                  Проверка на содержание механических примесей, 
                  воды, газов, присадки АГИДОЛ-1
                </div>
              </div>
            </div>
            <div className={`plant__img chemistry`}></div>
          </div>
          <div className={`plant__title`}><h1>Установка очистки МОИМ-4.0</h1></div>
          <div className={`plant__block`}>
            <div className={`plant__icon`}><GearIcon /></div>
            <div className={`plant__info plant__info-moim`}>
              <div className={`firstText`}>
                Высокопроизводительная установка, выполняющая 
                этап очистки масла от временных загрязнений
                методом механической фильтраций и вакуумного
                испарения
              </div>
              <div className={`secondText`}>
                Располагается в основном кузове МУРМ, что позволяет
                приехать на объект без прицепа с КСОР-1, в случаях,
                когда нет необходимости в полном цикле регенерации
                <br/>
                <br/>
                <strong><HashLink to={`/archive#moim`} className={`hash-ref`}><span className='line'>—</span> Документация</HashLink></strong>
              </div>
            </div>
            <div className={`plant__img moim`}></div>
          </div>
          <div className={`plant__title`}><h1>Установка регенерации КСОР-1</h1></div>
          <div className={`plant__block`}>
            <div className={`plant__icon`}><RegenerationIcon /></div>
            <div className={`plant__info plant__info-ksor`}>
              <div className={`firstText`}>
                Установка полного цикла восстановления 
                свойств масла с регенерацией через адсорбирующий блок
                <br/>
                <br/>
                <strong><HashLink to={`/archive#ksor`} className={`hash-ref`}><span className='line'>—</span> Документация</HashLink></strong>
              </div>
              <div className={`secondText`}>
                Корректирует значения<br/> кислотного числа, тангенса угла
                диэлектрических потерь и пробивного напряжения
                <br/><br/>
                Расположена в прицепе комплекса МУРМ
              </div>
            </div>
            <div className={`plant__img ksor`}></div>
          </div>

          <div class={`technology__result`}>
            <div class={`result__title ${animI}`} data-wow-duration={`0.8s`}>
              <h1>Результат работы</h1>
            </div>
            <div class={`result__text1 ${animI}`} data-wow-duration={`0.8s`}>
              <p>После полного цикла восстановления, включающего в себя фильтрацию, осушку, дегазацию и регенерацию через
                сорбент, качество полученного трансформаторного, турбинного и
                компрессорного масла соответствует требованиям СТО и ГОСТ, согласно которым масло может повторно эксплуатироваться.</p>
            </div>
            <div class={`result__tezis ${animI}`} data-wow-delay={`0.2s`} data-wow-duration={`1s`}>
              <p>Качество восстановленного масла гарантирует его дальнейшую эксплуатацию в течении 1 года на <br />
                работающем оборудовании и хранение в маслоемкостях в течении 3 лет</p>
            </div>
            <div class={`result__text2 ${animI}`} data-wow-duration={`0.8s`}>
              <p>С полученными показателями кислотного числа, пробивного напряжения, содержания шлама, класса промышленной
                частоты и остальными данными для трансформаторного и турбинного масел вы можете ознакомиться в архиве, раздел "Отчетная документация".</p> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}







