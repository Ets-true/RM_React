import React from 'react'
import './Plant.scss'
import { plantContentMoim } from './plant-content/Moim-content';
import { plantContentMepho } from './plant-content/Mepho-content';
import { plantContentKsor } from './plant-content/Ksor-content';
import { plantContentMurm } from './plant-content/Murm-content';

export default function Plant(props) {
  window.scrollTo(0, 0);
  let plantContent
  switch (props.name) {
    case 'Moim':
      plantContent = plantContentMoim
      break;
    case 'Mepho':
      plantContent = plantContentMepho
      break;
    case 'Ksor':
      plantContent = plantContentKsor
      break;
    case 'Murm':
      plantContent = plantContentMurm
      break;
    default:
      break;
  }
  
  let SubRows1 = false;
  let SubRows2 = false;

  const showCloseSub = (subId) => {
    if(subId == 'subRows1' && SubRows1 ==false){
      console.log('open')
      document.querySelector(`#subRows1`).style.display = 'block'
      document.querySelector(`#subRows1`).style.opacity = 1
      document.querySelector(`#subRows1-button`).children[0].style.backgroundColor = 'orange'
      SubRows1 = true
    }
    else if(subId == 'subRows1' && SubRows1 == true){
      console.log('close')
      document.querySelector(`#subRows1`).style.opacity = 0
      document.querySelector(`#subRows1`).style.display = 'none'
      document.querySelector(`#subRows1-button`).children[0].style.backgroundColor = '#9C9C9C'
      SubRows1 = false
    }
    if(subId == 'subRows2' && SubRows2 ==false){
      console.log('open')
      document.querySelector(`#subRows2`).style.display = 'block'
      document.querySelector(`#subRows2`).style.opacity = 1
      document.querySelector(`#subRows2-button`).children[0].style.backgroundColor = 'orange'
      SubRows2 = true
    }
    else if(subId == 'subRows2' && SubRows2 == true){
      console.log('close')
      document.querySelector(`#subRows2`).style.opacity = 0
      document.querySelector(`#subRows2`).style.display = 'none'
      document.querySelector(`#subRows2-button`).children[0].style.backgroundColor = '#9C9C9C'
      SubRows2 = false
    }
  }


  return (
    <div className="Plant">
      <div className="warm-background">
        <div className="content__container">
          <div className="block-init">
            <div className="init-title"><h1>{plantContent.Init.title}</h1></div>
            <div className="init-info">
              <div className="init-text">
                <p>{plantContent.Init.text}</p>
                <div className="init-points">
                  {plantContent.Init.points.map((point,i)=> {
                    return(
                      <div className="init-point" key={`point-${i}`}>
                        <div className="point-num">.0{i+1}</div>
                        {point}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="init-img"><img src={require(`./media/plants-named/${props.name}.png`)} alt="" /></div>
            </div>
          </div>
          <div className="block-property">
            <div className="property-title"><h1>{plantContent.Property.title}</h1></div>
            <div className="properties">
              {plantContent.Property.properties.map((property,i)=> {
                return (
                  <div className="property" key={`property-${i}`}>{property}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="cold-background">
        <div className="content__container">
          <div className="block-character">
            <div className="character-title"><h1>{plantContent.Character.title}</h1></div>
            <div className="Table">
              <div className="Table-name">{plantContent.Character.table1.title}</div>
              <div className="Table-columns">
                {plantContent.Character.table1.columns.map((column,i)=>{
                  return(
                    <div className="column" key={`column-${i}`}>{column}</div>
                  )
                })}
              </div>
              <div className="Table-rows">
                {plantContent.Character.table1.mainRows.map((row,i)=>{
                   return(
                    <div className="row" key={`row-${i}`}>
                      <div className="row-number value">0{i+1}</div>
                      {row.map((value,i)=>{
                        return(
                          <div className="value" key={`value-${i}`}>
                            {value}
                          </div>
                        )
                      })}
                    </div>
                   )
                 })}
              </div>
              <div className="Table-rows sub" id='subRows1'>
                {plantContent.Character.table1.subRows.map((row,i)=>{
                   return(
                    <div className="row" key={`row-${i}`}>
                      <div className="row-number value">0{i+1}</div>
                      {row.map((value,i)=>{
                        return(
                          <div className="value" key={`value-${i}`}>
                            {value}
                          </div>
                        )
                      })}
                    </div>
                   )
                 })}
              </div>

              

              <div className="button" id="subRows1-button" onClick={()=>showCloseSub('subRows1')}><div className="circle"></div></div>
            </div>
            <div className="Table">
              <div className="Table-name">{plantContent.Character.table2.title}</div>
              <div className="Table-columns">
                {plantContent.Character.table2.columns.map((column,i)=>{
                  return(
                    <div className="column" key={`column-${i}`}>{column}</div>
                  )
                })}
              </div>
              <div className="Table-rows">
                {plantContent.Character.table2.mainRows.map((row,i)=>{
                   return(
                    <div className="row" key={`row-${i}`}>
                      <div className="row-number value">0{i+1}</div>
                      {row.map((value,i)=>{
                        return(
                          <div className="value" key={`value-${i}`}>
                            {value}
                          </div>
                        )
                      })}
                    </div>
                   )
                 })}
              </div>
              <div className="Table-rows sub" id='subRows2'>
                {plantContent.Character.table2.subRows.map((row,i)=>{
                   return(
                    <div className="row" key={`row-${i}`}>
                      <div className="row-number value">0{i+1}</div>
                      {row.map((value,i)=>{
                        return(
                          <div className="value" key={`value-${i}`}>
                            {value}
                          </div>
                        )
                      })}
                    </div>
                   )
                 })}
              </div>
              <div className="button" id="subRows2-button" onClick={()=>showCloseSub('subRows2')}><div className="circle"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
