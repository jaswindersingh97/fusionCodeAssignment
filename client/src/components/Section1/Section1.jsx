import style from './index.module.css'
import React from 'react'
import sym from './../../assets/universal/sym.svg'
function Section1() {
  return (
    <div className={style.container}>
    <div className={style.heading}>
      <h2>Your Child's Perfect Schedule in Just a Few Clicks</h2>
      <p>Less Planning, More Living.</p>
      
      <a href="#button"><button >
        <img src={sym} alt="sym" />
      Join the waiting list</button>
      </a>
    </div>
    </div>
  )
}

export default Section1
