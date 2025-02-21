import Card from './Card/Card';
import style from './index.module.css'
import React from 'react'
import {Child,laptop,mother} from './../../assets/Section2';
function Section2() {
  const cards = [
    {
    heading:"Custom Calendar",
    paragraph:'Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.',
    image:laptop
    },
    {
      heading:"Tailored to Your Interests",
      paragraph:'Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.',
      image:Child
    },
    {
      heading:"Stress-Free Bulk Booking",
      paragraph:'Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.',      image:mother
    }    
];
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h2>Why JustLiv?</h2>
      </div>
      <div className={style.body}>
        {
          cards.map((item,index)=>
          (
            <Card card={item} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Section2
