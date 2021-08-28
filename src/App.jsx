import React, { useState, useEffect } from 'react'
import CountryList from './components/CountryList'
import getCountries from './services/getCountries'

const App = () => {
  const [input, setInput] = useState("")
  const [continent, setContinent] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries(continent)
      .then(data => setCountries(data))
  }, [continent])

  const handleSubmit = (e) => {
    e.preventDefault()
    setContinent(input)
  }

  return (
    <div>
      <p>{continent}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button type="submit">Buscar</button>
      </form>
      <br/>
      <CountryList countries={countries} />
    </div>
  )
}

export default App
