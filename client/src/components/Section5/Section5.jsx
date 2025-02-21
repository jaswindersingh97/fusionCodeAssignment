import style from './index.module.css'
import React from 'react'

function Section5() {
  return (
    <div className={style.container}>
    <div className={style.header}>
      <h2>Ready to Simplify Your Life?</h2>
      <p>Be the first to know when we launch! Join our waiting list and get exclusive updates and early access to our journey.</p>
    </div>
    <div className={style.button}>
      <button>Join the waiting list</button>
    </div>
    </div>
  )
}

export default Section5
