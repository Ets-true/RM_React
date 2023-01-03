import React from 'react'
import crumbs from '../media/icons/arrow__crumbs.svg'

export default function Crumbs() {
    return (
        <a href="../" class="wow animate__animated animate__fadeIn"> 
        <div class="crumbs wow animate__animated animate__fadeIn">
            <div class="crumbs__main">
                Главная{' '}
            </div>
            <img src={crumbs} alt="" class="crumbs__arrow"></img>
            {' '}О компании
        </div>
        </a>
    )
}
