import React from 'react'
import './company.scss'
import $ from 'jquery';
import CompanySlider from './Slider'
import { Helmet } from 'react-helmet';
import { companyContent as content } from './Company-content';
import { animIU, animI } from '../../helpers/Constants';


import arrow from '../../media/icons/arrow_white.svg'

export default function () {
  window.scrollTo(0, 0);
  function showFooter() {
    document.querySelector('.footer').style.display = 'flex'
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
    <div className={`about`}>
      <Helmet>
        <meta charSet={`utf-8`} />
        <title>{content.helmet}</title>
      </Helmet>
      <div className={`about__aboutUs`}>
        <div className={`aboutUs__info`}>
          <div className={`aboutUs__title ${animI}`} data-wow-duration={`1.5s`}><h1>{content.about.title}</h1></div>
          <div className={`aboutUs__text ${animI}`} data-wow-duration={`1.5s`} ><p>{content.about.text1}</p><br/><p>{content.about.text2}</p></div>
        </div>
        <div className={`aboutUs__image ${animI}`} data-wow-duration={`1.5s`} data-wow-delay={`0.5s`}></div>
      </div>
      <div className={`about__history`}>
        <div className={`history__title ${animIU}`} data-wow-offset={`100`}><h1>{content.history.title}</h1></div>
        <div className={`history__slider ${animI}`} data-wow-offset={`300`} data-wow-duration={`2s`}>
          <CompanySlider />
        </div>
      </div>
      <div className={`content__container`}>
        <div className={`about__clients`}>
          <div className={`clients__title ${animIU}`}><h1>{content.clients.title}</h1></div>
          <div className={`clients__info ${animIU}`}><p>{content.clients.text}</p></div>

          {content.clients.clientsAll.map((group, groupIndex)=>{
            return(
              <>
                {group.types.map((type, typeIndex)=> {
                  return (
                    <div 
                      className={`clients__${type.name}`}
                      id={`${type.name}-${groupIndex}`}
                    >
                      {type.list.map((client, clientIndex)=>{
                        return(
                          <div className={`clients__client_example ${animIU}`}>
                            <div className={`client__image`}><img src={require(`./../../media/img/${client.img}`)} alt="" /></div>
                            <div className={`client__name`}><p>{client.name}</p></div>
                            <div className={`client__work`}><p>{client.info}</p></div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
                <div onClick={() => { diplay_hide(`#hidden-${groupIndex}`)}} className={`clients__button ${animI}`} data-wow-offset={`100`} data-wow-duration={`1s`}>
                  <img src={arrow} alt={``} className={`clients__arrow_bottom`} id={`arrowClients`}></img>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className={`content__container`}>
        <div className={`about__thanks`}>
          <div className={`thanks__title`}><h1>{content.thanks.title}</h1></div>
          <div className={`thanks__wrapper`}>
            {content.thanks.list.map((thank, thankIndex)=>{
              return(
                <a href={`../files/${thank.url}`} target={`_blank`}>
                  <div className={`thanks__example ${animI}`} data-wow-duration={`1s`}>
                    <img src={require(`./../../media/img/${thank.img}`)} alt="" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  )
}
