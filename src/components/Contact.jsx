import React from 'react'
import '../scss/contact.scss'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import fileIcon from '../media/icons/file.svg'
import logoImg from '../media/img/logo_short.png'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"
import { ReactComponent as IconFile } from '../media/icons/file.svg';





export default function Contact(showForm) {
  window.scrollTo(0, 0);
  function closeFooter() {
    document.querySelector('.footer').style.display = "none"
  }

  setTimeout(() => {
    closeFooter()
    // document.querySelector('.contacts__map').innerHTML = `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af8857bd38c31c2abc760dbcc4352f93af21260fef1450b0989fd162d7cc60dfe&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>`

  }, 300);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Контакты | РМ</title>
      </Helmet>
      <div class="contacts__content">
        <div class="contacts__info wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
          <div class="contacts__title"><h1>Контактная информация</h1></div>
          <div className="contact-row">
            <div class="contacts__phone">
              <h2>Телефон</h2>
              <p>8 (968) 085-83-03</p>
              {/* <p>+7 (499) 324-8947</p> */}
            </div>
            <div class="contacts__email">
              <h2>Почта</h2>
              <p>info@reg-oils.ru</p>
            </div>
          </div>
          <div className="contact-row">
          <div class="contacts__address">
            <h2>Адрес</h2>

            <p> 115409, РФ, г. Москва,<br /> Каширское шоссе,<br /> д.49 строение 10, метро<br /> Каширское</p>
          </div>
          <a href="../files/cardRM.pdf" target="_blank">
            <div class="contacts__card">
              <h2> Карточка <br />компании</h2>
              <IconFile className="contacts__file" />
            </div>
          </a>
          </div>
          <div class="contacts__button" onClick={() => { showForm.showForm() }}>
            Написать нам
          </div>
        </div>
        <div class="contacts__map wow animate__animated animate__fadeIn" data-wow-duration="0.8s">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af8857bd38c31c2abc760dbcc4352f93af21260fef1450b0989fd162d7cc60dfe&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>                </div>

      </div>

      <div class="contacts__footer">
        <div class="footer__container">
          <div class="footer__logo">
            <Link to="/">
              <img src={logoImg} alt="" class="footer__logo_img"></img>
            </Link>
          </div>
          <div class="footer__copyright">
            ©2022{'   '}ООО "Регенерация масел"
          </div>
        </div>
      </div>
    </div>
  )
}
