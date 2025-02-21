import React from 'react'
import style from './App.module.css';
import {Section1,Section2,Section3,Section4,Section5,Section6} from './components';
function App() {
  return (
    <div className={style.container}>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </div>
  )
}

export default App
