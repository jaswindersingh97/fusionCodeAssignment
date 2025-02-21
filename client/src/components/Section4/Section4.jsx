import style from './index.module.css'
import React from 'react'
import icon from './../../assets/Section4/icon.svg';
import image from './../../assets/Section4/family.png';
function Section4() {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h2>Our Mission</h2>
        <img src={icon} className={style.headingimg} alt='icon'/>
      </div>
      <div className={style.body}>
        <p>Parents need a simple way to find, book, and track their kids activities. Businesses need a better way to be found and to keep families coming back.</p>
        <br/>
        <br/>
        <p>Our purpose is to</p>
        <h2>make parents lives <mark>easier</mark>,<mark> happier</mark>, and<mark> less stressful</mark>.</h2>
        <br/>
        <br/>
        <span>As parents and business owners, we get it.</span>
        <br/>
        <br/>
        <img src={image} alt='image'/>
      </div>
    </div>
  )
}

export default Section4
