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
      <div className="compare__wrap">
        <div class={`content__container`}>
          <div class={`compare__title ${animI}`}><h2>{content.compare.title}</h2></div>
          <div class={`compare__columnNames ${animI}`}>
          {content.compare.columnNames.map(columName=>{
            return <div class={`columnName`}>{columName}</div>
          })}
          </div>
                {content.compare.companies.map((company, companyIndex)=>{
                  return(
                    <>
                    <div class={`company__table ${animI}`} data-wow-offset={`100`}>
                      <div class={`company__left`}><h2>{company.table.title}</h2></div>
                      <div class={`company__right`}>
                        {company.table.rows.map((row, rowIndex)=>{
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
                      <div class={`conclusion__title ${animI}`}><p>{company.conclusion.title}</p></div>
                      <div class={`conclusion__text ${animI}`}><p>{company.conclusion.text}</p></div>
                    </div>
                    </>
                  )
                })}
        </div>
      </div>
      <div class={`economic__final`}>
        <div class={`content__container`}>
          <div class={`final__title ${animIU}`}><h2>{content.final.title}</h2></div>
          <div class={`final__text ${animI}`}><p>{content.final.text}</p></div>
          <div className={`final__docs`}>
            <div className={`docs__title`}>{content.final.docs.title}</div>
            {content.final.docs.list.map(doc=>{
              return(
                <div className={`docs__example`}>
                  <a href={`../files/economic/${doc.url}`} target={`_blank`}>
                    <div className={`example__icon`}><IconFile /></div>
                    <div className={`example__name`}>{doc.name}</div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
