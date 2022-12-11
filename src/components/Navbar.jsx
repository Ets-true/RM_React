import React from 'react'
import { Link } from "react-router-dom"
import '../scss/header.scss'
import logo from '../media/img/logo_full.png'
import $ from 'jquery'
import {location} from 'jquery'


export default function Navbar() {
  return (
    <div class="header">
      <div class="header__content">
        <div class="header__column _l">
          <Link to="/" className="header__link">Главная страница</Link>
          <Link to="/company" className="header__link">О компании</Link>
        </div>
        <div class="header__logo">
          <Link to="/">
            <img src={logo} alt="" class="header__logo_img"></img>
          </Link>
        </div>
        <div class="header__column _r">
          <Link to="/techno" className="header__link">Технология</Link>
          <Link to="/plants" className="header__link">Установки</Link>
          {/* <Link to="/economic" className="header__link">Экономика</Link> */}
          <Link to="/contact" className="header__link">Контакты</Link>
        </div>
      </div>
    </div>
  )
}
