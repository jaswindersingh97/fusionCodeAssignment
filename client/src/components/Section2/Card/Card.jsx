import style from './index.module.css';
import React from 'react'
import sym from './../../../assets/universal/sym.svg'
function Card({card}) {
  
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={sym} alt='sym'/>
        <h2>{card.heading}</h2>
      <div className={style.paragraph}>
        <p>{card.paragraph}</p>
      </div>
      </div>

      <div className={style.image}>
        <img src={card.image} alt='image'/>
      </div>
    </div>
  )
}

export default Card
