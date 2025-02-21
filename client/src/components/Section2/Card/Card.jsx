import style from './index.module.css';
import React from 'react'
import sym from './../../../assets/universal/sym.svg'
import image from './../../../assets/Section2/laptop.png'
function Card() {
  const card ={
    heading:"Custom Calendar",
    paragraph:'Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.',
    image:'./../../../assets/Section2/laptop.png'
    }
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={sym} alt='sym'/>
        <h3>{card.heading}</h3>
      </div>
      <div className={style.paragraph}>
        <p>{card.paragraph}</p>
      </div>
      <div className={style.image}>
        <img src={image} alt='image'/>
      </div>
    </div>
  )
}

export default Card
