import React from 'react'
import './archive.scss'
import { Helmet } from "react-helmet";
import { ReactComponent as IconFile } from '../../media/icons/file.svg';
import {Link} from "react-router-dom"



export default function Archive() {
  window.scrollTo(0, 0);
  return (
    <div className="archive">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Архив | РМ</title>
      </Helmet>
      <div className="content__container">
        <div className="archive__page"><Link to="/">Главная</Link> / Страница архива</div>
        <div className="archive__section">
          <div className="section__title">Научно-техническая документация</div>
          <div className="section__docs">
            <div className="section__document">
              <a href="../files/archive/НТД/14_11_2016_№9_1459-П_О_введении_в_действие_РД_ЭО_1_1_2_05_0444-2016.pdf" target="_blank">
                <IconFile />14 11 2016 № 9_1459-П О введении в действие РД ЭО 1 1 2 05 0444-2016.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/НТД/ОНИЭ_31_Трансформаторное_масло_Часть_2.pdf" target="_blank">
                <IconFile />ОНИЭ 31 Трансформаторное масло Часть 2.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/НТД/СТО_02.01.112-2015_РусГидро.pdf" target="_blank" id="ksor">
                <IconFile />СТО 02.01.112-2015 РусГидро.pdf
              </a>
            </div>
          </div>
        </div>
        <div className="archive__section">
          <div className="section__title">Установка регенерации КСОР-1</div>
          <div className="section__docs">
            <div className="section__document">
              <a href="../files/archive/КСОР_1/Общий_вид_установки_(вид сверху).pdf" target="_blank">
                <IconFile />Общий вид установки (вид сверху).pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/КСОР_1/Паспорт_КСОР.pdf" target="_blank">
                <IconFile />Паспорт КСОР.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/КСОР_1/Руководство_КСОР.pdf" target="_blank" id="moim">
                <IconFile />Руководство КСОР.pdf
              </a>
            </div>
          </div>
        </div>
        <div className="archive__section">
          <div className="section__title">Установка очистки МОИМ-4.0</div>
          <div className="section__docs">
            <div className="section__document">
              <a href="../files/archive/МОИМ/Основные_характеристики_МОИМ-4.0.pdf" target="_blank">
                <IconFile />Основные характеристики МОИМ-4.0.pdf
              </a>
            </div>
            <div className="section__document" id="results">
              <a href="../files/archive/МОИМ/Схема_установки_МОИМ-4.0.pdf" target="_blank">
                <IconFile />Схема установки МОИМ-4.0.pdf
              </a>
            </div>
          </div>
        </div>
        <div className="archive__section">
          <div className="section__title">Отчетная документация</div>
          <div className="section__docs">
            <div className="section__document">
              <a href="../files/archive/Отчеты/2021.09.15.Отчет_исп._МУРМ_ТУЛЭНЕРГО.pdf" target="_blank">
                <IconFile />2021.09.15.Отчет исп. МУРМ ТУЛЭНЕРГО.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/Отчеты/2021.09.21.Отчет_исп.МУРМ_Пахра_МЭС_Центра_с_прилож.pdf" target="_blank">
                <IconFile />2021.09.21.Отчет исп.МУРМ Пахра МЭС Центра с прилож.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/Отчеты/АО_Завод_РЭТО.pdf" target="_blank">
                <IconFile />Результаты АО Завод РЭТО.pdf
              </a>
            </div>
          </div>
        </div>
        <div className="archive__section">
          <div className="section__title">Патентная документация</div>
          <div className="section__docs">
            <div className="section__document">
              <a href="../files/archive/Патенты/Патент-свидетельство_2679901.pdf" target="_blank">
                <IconFile />Патент-свидетельство 2679901.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/Патенты/Патент_масло_турбинное_2641005.pdf" target="_blank">
                <IconFile />Патент масло турбинное 2641005.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/Патенты/Описание_патента_2679901.pdf" target="_blank">
                <IconFile />Описание патента 2679901.pdf
              </a>
            </div>
            <div className="section__document">
              <a href="../files/archive/Патенты/Описание_патента_2641005.pdf" target="_blank">
                <IconFile />Описание патента 2641005.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
