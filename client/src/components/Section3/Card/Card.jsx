import React from 'react'
import style from './index.module.css'
function Card({card}) {

  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={card.icon} alt='icon'/>
      </div>
      <div className={style.right}>
        <h3>{card.Title}</h3>
        <p>{card.desc}</p>
      </div>
    </div>
  )
}

export default Card
