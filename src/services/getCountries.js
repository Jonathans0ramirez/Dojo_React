const BASE_URL = "https://restcountries.eu/rest/v2/region"

const getCountries = async (continent) => {
    const res = await fetch(`${BASE_URL}/${continent}`)
    return res.json()
}

export default getCountries