import React from 'react'

const CountryCard = ({ country }) => {
    const {
        name,
        flag,
        capital,
        region
    } = country

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            <div>
                <img src={flag} width={30} /><span>{` ${name}`}</span>
            </div>
            <p>{`${capital}`}</p>
            <p>{`${region}`}</p>
        </div>
    )
}

export default CountryCard