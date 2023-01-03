import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './header.scss'
import logo from '../../../media/img/logo_full.png'
import $ from 'jquery'


export default function Navbar() {

  const calc = (val) => {
    if (document.documentElement.clientWidth < 1920) {
      return val * 1024 / 1920 + (val - val * 1024 / 1920) * ((document.documentElement.clientWidth - 1024) / (1920 - 1024))
    } else return val
  }

  const defaultPagesList = [
    {name: 'Главная', url: '/'},
    {name: 'О компании', url: '/company'},
    {name: 'Установки', url: '/plants'},
    {name: 'Контакты', url: '/contact'},
    {name: 'Технология', url: '/techno'},
    {name: 'Экономика', url: '/economic'},
    {name: 'Архив', url: '/archive'},
  ]

  // const hiddenPagesList = [
  //   {name: 'Технология', url: '/techno'},
  //   {name: 'Экономика', url: '/economic'},
  //   {name: 'Архив', url: '/archive'},
  // ]

  const [open, setOpen] = useState(false)
  useEffect(() => {
    let burgerLines = document.querySelectorAll('.openClose')
    let headerLinks = document.querySelector('.header-links')
    let links =  document.querySelectorAll('.header-link')
    if(open){
      headerLinks.style.transform = 'translateX(0)'
      burgerLines.forEach(line=>{
        line.style.width = `${calc(35)}px`
      })
      links.forEach((link, index)=>{
        if(index === 4 ){
          link.style.opacity = 1
        }
        if(index === 5){
          setTimeout(() => {
             link.style.opacity = 1
          }, 150);
        }
        if(index === 6){
          setTimeout(() => {
            link.style.opacity = 1
         }, 200);
        }
      })
    } else {
      document.querySelector('.header-links').style.transform = `translateX(${calc(580)}px)`
      burgerLines.forEach((line, index)=>{
        if(index===1)
          line.style.width = `${calc(24)}px`
        if(index===2)
          line.style.width = `${calc(12)}px`
      })
      links.forEach((link, index)=>{
        if(index === 4 || index === 5 || index === 6){
          link.style.opacity = 0
        }
      })
    }
  }, [open])
  
  const openClose = () => {
    setOpen(!open)
  }

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
    setOpen(false)
  }

  return (
    <div class="header">
      <div class="header-content">
        <div class="header-logo">
          <Link to="/" onClick={() => changepage({name: 'Главная', url: '/'})}>
            <img src={logo} alt=""></img>
          </Link>
        </div>

        <div className="header-links-wrap">
        <div className="header-links">
          {
            Pages.map((page,i) =>{
              if(i == 0){
                return <Link to={page.url} className="header-link header-link-active" key={`link-${i}`} onClick={() => changepage(page)}>{page.name}</Link>
              } else return <Link to={page.url} className="header-link" key={`link-${i}`} onClick={() => changepage(page)}>{page.name}</Link>
            })
          }
        </div>
        </div>
        <div className="openClose-wrap" onClick={openClose}>
          <div className="openClose"></div>
          <div className="openClose"></div>
          <div className="openClose"></div>
        </div>
      </div>
    </div>
  )
}
