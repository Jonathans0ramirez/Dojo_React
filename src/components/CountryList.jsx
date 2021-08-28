import React from 'react'
import CountryCard from './CountryCard'

const CountryList = ({ countries }) => {
    return (
        countries.map((country, index) => {
            return (
                <CountryCard key={index} country={country} />
            )
        })
    )
}

export default CountryList