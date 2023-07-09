import React, {useState, useEffect} from 'react'

import "../assets/style/Header.css"

const Showcase = () => {
    const [deadline] = useState('04 July 2024 04:00 PM')

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    setSeconds(Math.floor((time/1000) % 60));
    setMinutes(Math.floor((time/1000/60) % 60));
    setHours(Math.floor((time/(1000*60*60)% 24)));
    setDays(Math.floor((time/(1000*60*60*24))));
  }

  useEffect(() => {
    getTimeUntil(deadline);
  })

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000)
  }, [deadline])

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num
  }

  return (
    <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <p className="main-title" id="home">Úristen házasodunk!</p>
          <h1>Viki &amp; Sanyi</h1>
          <span className="date">2024 Július 4. 16:00</span>
          <div className='countdown'>
            <span className='span'>{leading0(days)}</span><span className='span-text'>Nap</span>
            <span className='span'>{leading0(hours)}</span><span className='span-text'>Óra</span>
            <span className='span'>{leading0(minutes)}</span><span className='span-text'>Perc</span>
            <span className='span'>{leading0(seconds)}</span><span className='span-text'>Másodperc</span>
          </div>
        </div>
    </section>
  )
}

export default Showcase