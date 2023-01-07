import React from 'react'
import './economic.style.scss'
import { Helmet } from 'react-helmet';
import { ReactComponent as IconFile } from '../../media/icons/file.svg';
import { economicContent as content } from './economic.content';
import { animIU, animI } from '../../helpers/Constants';



export default function Economic() {
  window.scrollTo(0, 0);
  function showFooter() {
    document.querySelector('.footer').style.display = 'flex'
  }
  setTimeout(() => {
    showFooter()
  }, 300);

  return (
    <div class={`economic`}>
      <Helmet>
        <meta charSet={`utf-8`} />
        <title>{content.helmet}</title>
      </Helmet>
      <div class={`content__container`}>
        <div class={`economic__economicBenefit`}>
          <div class={`economicBenefit__title ${animI}`} data-wow-duration={`0.8s`}><h1>{content.benefit.title}</h1></div>
          <div class={`economicBenefit__textTop ${animI}`} data-wow-duration={`0.8s`}><p>{content.benefit.textTop}</p></div>
          <div class={`economic__wrapper`}>
            <div class={`economicBenefit__textLeft ${animI}`} data-wow-duration={`0.8s`}>
              <p>{content.benefit.textLeft1}</p><br/><br/>
              <p>{content.benefit.textLeft2}</p><br/>
              <p>{content.benefit.textLeft3}</p>
            </div>
            <div class={`economicBenefit__initData ${animI}`} data-wow-delay={`0.2s`} data-wow-duration={`1s`}>
              <div class={`initData__title`}><p>{content.benefit.initData.title}</p></div>
              <div class={`initData__content`}>
                {content.benefit.initData.tezisGroup.map((tezis, tezisIndex)=>{
                  return(
                    <div class={`initData__tezis`}>
                      <div class={`initData__point`}/>
                      <p class={`initData__el`}>{tezis}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={`economic__companyA`}>
        <div class={`content__container`}>
          <div class={`companyA__title ${animI}`}><h2>{content.companyA.title}</h2></div>
          <div class={`companyA__columnNames ${animI}`}>
            <div class={`columnNames__action`}>{content.companyA.action}</div>
            <div class={`columnNames__time`}>{content.companyA.time}</div>
            <div class={`columnNames__cost`}>{content.companyA.cost}</div>
          </div>
          <div class={`company__wrapper ${animI}`} data-wow-offset={`100`}>
            <div class={`company__left`}>
              <h2>Предприятие А</h2>
            </div>
            <div class={`company__right`}>
              {content.companyA.table.rows.map((row, rowIndex)=>{
                return(
                  <div class={`row`}>
                    {row.map((tezis, tezisIndex)=>{
                      return(
                        <div class={`Col__tezis _action`}>
                          <div class={`Col__point`}></div>
                          <div class={`Col__el`}>{tezis}</div>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>

          <div class={`company__conclusion`}>
            <div class={`conclusion__title ${animIU}`}>
              <p>Вывод по действиям предприятия A</p>
            </div>
            <div class={`conclusion__text ${animIU}`}>
              <p>{'    '}Просуммировав средние значения из полученных диапазонов делаем вывод, что
                для продолжения работы своего объекта Предприятию А <br />
                необходимо израсходовать около 3 млн рублей за 13 дней, заключая договоры с тремя
                юридическими лицами: поставщик масла, подрядчик <br />
                по обустройству места хранения и сборщик отработанного масла.</p>
            </div>
          </div>
        </div>

      </div>
      <div class={`economic__companyB`}>
        <div class={`content__container`}>
          <div class={`company__wrapper ${animI}`} data-wow-offset={`100`}>
            <div class={`company__left`}>
              <h2>Предприятие Б</h2>
            </div>
            <div class={`company__right`}>
              <div class={`row`}>
                <div class={`Col__tezis _action`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>Обращение в ООО "Регенерация масел" </div>
                </div>

              </div>
              <div class={`row`}>
                <div class={`Col__tezis _action`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>Анализ проб масла </div>
                </div>
                <div class={`Col__tezis _time`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}> 1 день</div>
                </div>
                <div class={`Col__tezis _cost`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>Входит в сумму работ</div>
                </div>
              </div>
              <div class={`row`}>
                <div class={`Col__tezis _action`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>Очистка масла <br />
                    (фильтрация, осушка, дегазация) </div>
                </div>
                <div class={`Col__tezis _time`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}> 2 дня</div>
                </div>
                <div class={`Col__tezis _cost`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>До 750 тыс. рублей</div>
                </div>
              </div>
              <div class={`row`}>
                <div class={`Col__tezis _action`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>Регенерация и стабилизация присадками </div>
                </div>
                <div class={`Col__tezis _time`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>2 дня</div>
                </div>
                <div class={`Col__tezis _cost`}>
                  <div class={`Col__point`}></div>
                  <div class={`Col__el`}>До 600 тыс. рублей</div>
                </div>
              </div>
            </div>
          </div>
          <div class={`company__conclusion`}>
            <div class={`conclusion__title`}>
              <p>Вывод по действиям предприятия Б</p>
            </div>
            <div class={`conclusion__text`}>
              <p>{'    '}Предприятие Б при восстановлении 20 тонн трансформаторного масла в
                среднем тратит около 1,3 млн рублей, что составляет около 50% от <br />
                средней суммы покупки нового масла у поставщика. Временной диапазон составит полных 5
                рабочих дней при круглосуточной работе без <br />
                учета расстояний.</p>
            </div>
          </div>
        </div>
      </div>

      <div class={`economic__final`}>
        <div class={`content__container`}>
          <div class={`final__title ${animIU}`}>
            <h2>Сравнительный вывод:</h2>
          </div>
          <div class={`final__text ${animI}`}>
            <p>{'    '}Анализируя вышеуказанные данные видим, что Предприятие Б по сравнению с
              Предприятием А экономит порядка 1,5 млн рублей. Также<br />
              важно заметить, что Предприятие Б заключило договор только с одним юридическим лицом, что
              существенно сэкономило временные<br />
              затраты руководителей организации.</p>
          </div>
          <div className={`final__docs`}>
            <div className={`docs__title`}>Документы с расчетами<br />
              для соответствующих<br />
              объемов</div>
              <div className={`docs__example`}>
            </div>
            <div className={`docs__example`}>
              <a href={`../files/economic/Энерго-временные_затраты_20_тонн.pdf`} target={`_blank`}>
                <div className={`example__icon`}><IconFile /></div>
                <div className={`example__name`}>20 тонн</div>
              </a>
            </div>
            <div className={`docs__example`}>
              <a href={`../files/economic/Энерго-временные_затраты_40_тонн.pdf`} target={`_blank`}>
                <div className={`example__icon`}><IconFile /></div>
                <div className={`example__name`}>40 тонн</div>
              </a>
            </div>
            <div className={`docs__example`}>
              <a href={`../files/economic/Энерго-временные_затраты_50_тонн.pdf`} target={`_blank`}>
                <div className={`example__icon`}><IconFile /></div>
                <div className={`example__name`}>50 тонн</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
