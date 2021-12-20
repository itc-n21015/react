import './App.css'
import React, { useState } from 'react'
const API = 'bc73e49e0fa48f40911e6c468dad3939'
export default function APP () {
  document.bgColor = '#00ffff'
  const [city, setCity] = useState('')
  const [result, setResult] = useState({})
  const getWeather = async e => {
   e.preventDefault()
   if (!city) {
     return
   }
   const res = await fetch(
     `http://api.openweathermap.org/data/3.5/weather?q=${city}&appid=${API}`
   )
   const { main } = await res.json()
   setResult(main)
 }
 return (
   <div>
     <form onSubmit={getWeather}>
       <div>
         <h1>ローマ字で都市名を↓に記入！</h1>
         <label>CityName</label>
         <input value={city} onChange={e => setCity(e.target.value)} />
       </div>
       <button type='submit'><p>　検索　</p></button>
     </form>
     {result && (
       <>
         <p>今日の気温はこちら！</p>
         <p>　　　　　↓　　　　　</p>
         <p>　　気温： {Math.trunc(result.temp - 273.15)}</p>
         <p>最高気温： {Math.trunc(result.temp_max - 273.15)}</p      >
         <p>最低気温： {Math.trunc(result.temp_min - 273.15)}</p      >
        <p>　　湿度： {result.humidity}</p>
      </>
    )}
  </div>
 )
}
