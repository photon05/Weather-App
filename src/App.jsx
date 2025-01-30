import { useState } from 'react'
import './App.css'
import Weather from './components/weather'

function App() {

  return (
    <div className='App'>
      <h1 className='heading'>This is the Weather App</h1>
      <h2>Search for a city to find it's weather</h2>
      <h2>Hello There</h2>
      <Weather/>
    </div>
  )
}

export default App
