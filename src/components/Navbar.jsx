import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import '../scss/header.scss'
import logo from '../media/img/logo_full.png'
import $ from 'jquery'


export default function Navbar() {

  const defaultPagesList = [
    {name: 'Главная', url: '/'},
    {name: 'О компании', url: '/company'},
    {name: 'Установки', url: '/plants'},
    {name: 'Контакты', url: '/contact'},
    // {name: 'Технология', url: '/techno'},
    // {name: 'Экономика', url: '/economic'},
    // {name: 'Архив', url: '/archive'},
  ]

  const [Pages, setPages] = useState(defaultPagesList)

  useEffect(()=>{

  },[Pages])

  const changepage = (page) => {
    let copyPages = JSON.parse(JSON.stringify(defaultPagesList))
    let pageIndex
    copyPages.forEach((copyPage, i)=> {
      if(copyPage.name == page.name) pageIndex = i 
    });
    console.log(page)
    console.log(pageIndex)
    copyPages.splice(0, 0, copyPages.splice(pageIndex, 1)[0]);
    setPages([...copyPages])
  }

  return (
    <div class="header">
      <div class="header-content">
        <div class="header-logo">
          <Link to="/" onClick={() => changepage({name: 'Главная', url: '/'})}>
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="header-links">
          {
            Pages.map((page,i) =>{
              if(i == 0){
                return <Link to={page.url} className="header-link header-link-active" key={`link-${i}`} onClick={() => changepage(page)}>{page.name}</Link>
              } else return <Link to={page.url} className="header-link" key={`link-${i}`} onClick={() => changepage(page)}>{page.name}</Link>
            })
          }
          <div className="openClose-wrap">
            <div className="openClose"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
