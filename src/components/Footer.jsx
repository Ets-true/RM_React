import React from 'react'
import '../scss/footer.scss'
import logo from '../media/img/logo_short.png'
import {Link} from "react-router-dom"




export default function Footer(showForm) {
  return (
    <div class="footer">
        <div class="footer__column_left">
            <div class="footer__logo">
                <Link to="/"><img src={logo} alt="" class="footer__logo_img"></img></Link>
            </div>
            <div class="footer__copyright">
                ©2022{'     '}ООО "Регенерация масел"
            </div>
        </div>
        <div class="footer__column_right">
            {/* <div class="footer__form" onClick={() => {showForm.showForm()}}>Написать нам</div> */}
            <div class="footer__form">Написать нам</div>
            <div class="footer__email">info@reg-oils.ru</div>
            <div class="footer__phone"> +7 (499) 324-89-47</div>
        </div>
    </div>
  )
}
