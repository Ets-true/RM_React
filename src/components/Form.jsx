import React from 'react'
import "../scss/form.scss"

export default function Form(closeForm) {
  return (
    <div className="form">
        <div className="form__wrapper">
            <div className="form__background" onClick={() => {closeForm.closeForm()}}></div>
            <div className="form__body">
              <div className="form__animationBlock">
                <div className="line">
                  <div className="line__body"></div>
                </div>
                <div className="line">
                  <div className="line__body"></div>
                </div>
                <div className="block"></div>
                <div className="dataBlock__column_left">
                  <div className="point">
                    <div className="point__num">01</div>
                    <div className="point__title">Ваше имя:</div>
                  </div>
                  <input type="text" placeholder="Иван Иванов"/>
                  <div className="point">
                    <div className="point__num">02</div>
                    <div className="point__title">Email:</div>
                  </div>
                  <input type="text" placeholder="info@gmail.com"/>
                  <div className="point">
                    <div className="point__num">03</div>
                    <div className="point__title">Телефон:</div>
                  </div>
                  <input type="text" placeholder="+749500000"/>
                </div>
                <div className="dataBlock__column_rigth"></div>
              </div>
            </div>
        </div>
    </div>
  )
}
