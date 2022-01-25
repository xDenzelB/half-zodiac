import React from 'react'
import backgroundImg from '../background.png'
import './Main.css'
import ZodiacCard from '../ZodiacCard/ZodiacCard'
import { zodiac } from '../data'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      )
      )}
      {/* import the ZodiacCard component */}
      {/* get the zodiac array from props */}
      {/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */}
      {/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */}
    </main>
  )
}
