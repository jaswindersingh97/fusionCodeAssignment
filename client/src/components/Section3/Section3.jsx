import Card from './Card/Card'
import style from './index.module.css'
import React from 'react'
import search from './../../assets/Section3/Search.svg'
import heart from './../../assets/Section3/Heart.svg'
import build from './../../assets/Section3/Build.svg'
import downArrow from './../../assets/Section3/downArrow.png';
import twistedArrow from './../../assets/Section3/twistedArrow.png';

function Section3() {
  const  cards=[
    {
     Title:"Browse",
     desc:'Discover activities from our partner booking providers.',
     icon:search
    },
    {
      Title:"Build",
      desc:'Share your child’s interests, schedule, and preferences. Watch as JustLiv creates the perfect calendar filled with activities.',
      icon:build
     },
     {
      Title:"Book",
      desc:'Finalize your selections with one click and enjoy peace of mind.',
      icon:heart
     },
  ]
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>How it works</h2>
      </div>
      <div className={style.body}>
        <Card card={cards[0]}/>
        <img className={style.icon1} src={downArrow} alt='downarrow'/>
        <Card card={cards[1]}/>
        <img className={style.icon2} src={twistedArrow} alt='twistedArrow'/>

        <Card card={cards[2]}/>

      </div>
    </div>
  )
}

export default Section3
