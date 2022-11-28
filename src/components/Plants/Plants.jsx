import React, {useEffect} from 'react'
import './Plants.scss'
import { plantsContent } from './Plants-Content';
import { Link } from 'react-router-dom';

export default function Plants() {

  const calc = (val) => {
    if (document.documentElement.clientWidth < 1920) {
      return val * 1024 / 1920 + (val - val * 1024 / 1920) * ((document.documentElement.clientWidth - 1024) / (1920 - 1024))
    } else return val
  }

  useEffect(() => {
    let blur = document.querySelector('.info-img-blur')
    blur.style.transform = `translateX(${calc(480)}px)`
  }, [])
  

  return (
    <div className="Plants">
      <div className="Warm">
        <div className="content__container">
          <div className="Warm-body">
            <div className="orange-blot"><img src={require('./media/blot-orange.png')} alt="" /></div>
            <div className="About">
              <div className="about-title"><h1>{plantsContent.About.title}</h1></div>
              <div className="about-info">
                <div className="info-text">
                  <p>{plantsContent.About.text1}</p>
                  <p>{plantsContent.About.text2}</p>
                </div>
                <div className="info-img">
                  <div className="info-img-blur"></div>
                  <img src={require('./media/manufactory.png')} alt="" />
                </div>
              </div>
            </div>
            <div className="ServiceOr">
              <div className="title"><h1>{plantsContent.ServiseOr.title}</h1></div>
              <div className="text-1"><p>{plantsContent.ServiseOr.text1}</p></div>
              <div className="tezis-group">
                {plantsContent.ServiseOr.tezisGroup.map((column, i) => {
                  return (
                  <div className="tezis-column" key={`column-${i}`}>
                    {column.map((tezis,i)=>{
                      return (<div className="tezis" key={`tezis-${i}`}><p>{tezis}</p></div>)
                    })}
                  </div>
                  )
                })}
              </div>
              <div className="text-2"><p>{plantsContent.ServiseOr.text2}</p></div>
            </div>
            <div className="Catalog">
                {plantsContent.Catalog.map((row,rowIndex)=>{
                  return (
                    <div className="row" key={`row-${rowIndex}`}>
                      {row.map((plant,plantIndex)=>{
                        let link
                        console.log([rowIndex+1, plantIndex+1])
                        let index = [rowIndex+1, plantIndex+1]
                        console.log(index.toString())
                        switch (index.toString()) {
                          case '1,1':
                            link = '/plants/moim'
                            break;
                          case '1,2':
                            link = '/plants/mepho'
                            break;
                          case '2,1':
                            link = '/plants/ksor'
                            break;
                          case '2,2':
                            link = '/plants/murm'
                            break;
                          default:
                            break;
                        }
                        return (
                        <div className="plant" key={`row-${rowIndex}-${plantIndex}`}>
                          <Link to={link}><div className="plant-img"><img src={require(`./media/plants/${rowIndex+1}/${plantIndex+1}.png`)} alt="" /></div></Link>
                          <Link to={link}><div className="plant-title">{plant.title}</div></Link>
                          <div className="plant-info">{plant.info}</div>
                        </div>
                        )
                      })}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="Cold"></div>
    </div>
  )
}
