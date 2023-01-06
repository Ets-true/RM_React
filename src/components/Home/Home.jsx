import React from 'react'
import './home.scss'
import schema from '../../media/img/scheme.png'
import schemaMob from '../../media/img/scheme__mobile.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ReactComponent as IconFile } from '../../media/icons/file.svg';
import { homeContent as content } from './Home-content';




export default function Home() {

  window.scrollTo(0, 0);
  function showFooter() {
    document.querySelector('.footer').style.display = 'flex'
    if (document.documentElement.clientWidth < 1000) {
      document.querySelector('.footer').style.display = 'block'
    }
  }

  setTimeout(() => {
    showFooter()
  }, 300);

  const animIU = 'wow animate__animated animate__fadeInUp'
  const animI = 'wow animate__animated animate__fadeIn'
  
  return (
    <div className={`bd`}>
      <Helmet>
        <meta charSet={`utf-8`} />
        <title>{content.helmet}</title>
      </Helmet>
      <div className={`home content`}>
        <div className={`home__mainTezis`}>
          <div className={`content__container`}>
            <div className={`mainTezis__content ${animI}`}>
              <div className={`mainTezis__text ${animIU}`}>{content.mainTazis.text}</div>
              <Link to={`/company`}><div className={`mainTezis__button ${animIU}`}>{content.mainTazis.button}</div></Link>
            </div>
          </div>
        </div>
        <div className={`home__diagram`}>
          <div className={`diagram__content`}>
            <div className={`diagram__title ${animIU}`}><h1>{content.diagram.title}</h1></div>
            <div className={`diagram__text ${animIU}`}><p>{content.diagram.text}</p></div>
            <div className={`diagram__img ${animI}`}><img src={schema} alt={``}/></div>
            <div className={`diagram__img__mobile ${animI}`}><img src={schemaMob} alt={``}/></div>
            <Link to={`/techno`}><div className={`diagram__button ${animI}`}>{content.diagram.button}</div></Link>
          </div>
        </div>
        <div className={`home__EconomicTechnic`}>
          <div className={`blot`}/>
          {content.tezisGroups.map((group, groupIndex)=>{
            return(
              <div className={`home__tezis-group`}> 
                <div className={`content__container`}>
                  <div className={`EconomicTechnic__title ${animIU}`}><h1>{group.title}</h1></div>
                  <div className={`tezis__border`}>
                  {group.tezis.map((tez, tezIndex)=>{
                    return(
                      <div className={`tezis__column`}>
                        <div className={`tezis__point`}></div>
                        <div className={`tezis__digit ${animIU}`}>0{groupIndex*group.tezis.length + tezIndex+1}</div>
                        <div className={`tezis__title ${animIU}`}><h2>{tez.name}</h2></div>
                        <div className={`tezis__text ${animIU}`}><p>{tez.info}</p></div>
                      </div>
                    )
                  })}
                  </div>
                </div>
            </div>
            )
          })}
        </div>

        <div className={`home__ecological`}>
          <div className={`content__container`}>
            <div className={`ecological__title ${animIU}`}><h1>{content.ecological.title}</h1></div>
            <div className={`ecological__text ${animIU}`}><p>{content.ecological.text}</p></div>
            <div className={`ecological__wrapper`}>
              {content.ecological.columns.map((column, columnIndex)=>{
                return(
                  <div className={`ecological__column`}>
                    <div className={`ecological__digit`}><div className={`digit ${animI}`}>0{columnIndex+1}</div></div>
                    <div className={`ecological_tezisTitle ${animIU}`}><h2>{column.name}</h2></div>
                    <div className={`ecological_tezisText ${animIU}`}><p>{column.info}</p></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className={`home__results`}>
        <div className={`content__container`}>
          <div className={`results__title ${animIU}`}>{content.results.title}</div>
          <div className={`results__resultRow ${animIU}`}>
          {content.results.docs.map((doc, docIndex)=>{
            return(
              <div className={`result__example`}>
                <a href={`../files/results/${doc.url}`} target={`_blank`}>
                  <div className={`result__name`}>{doc.name}</div>
                  <div className={`result__file-icon`}><IconFile/></div>
                </a>
              </div>
            )
          })}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
