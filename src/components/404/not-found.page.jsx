import React from 'react'
import './not-found.style.scss'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';


export default function NotFound() {
  return (
    <div className="background">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Страница не найдена | РМ</title>
      </Helmet>
      <div className="background-404">404</div>
      <div className="attention">
        <div className="title">Страница не найдена</div>
        <div className="info">Возможно, эта страница удалена или не действительна.</div>
        <Link to="/"><div className="button">Перейти на главную</div></Link>
      </div>
    </div>
  )
}
