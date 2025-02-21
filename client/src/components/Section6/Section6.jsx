import style from './index.module.css'
import React from 'react'
import logo from './../../assets/Section6/logo1.png'
import instagram from './../../assets/Section6/instagram.svg'
import indeed from './../../assets/Section6/indeed.svg'

function Section6() {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img src={logo} alt='logo'/>
        <span className={style.instagram}>
          <img className={style.icon} src={instagram} alt='instagram'/>
          <p>Connect with us on Instagram ♡</p>
        </span>
      </div>
      <div className={style.bottom}>
        <p>Privacy Policy</p>
        <p>Accessibility Statement</p>
        <img src={indeed} alt='indeed'/>
        <p>© 2024 by JustLiv</p>
      </div>
    </div>
  )
}

export default Section6
