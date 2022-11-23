const Display = ({countries}) => {
    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (countries.length == 1) {
        const country = countries[0]
        console.log(countries)
        return (
            <div>
                <h2>{country.name.common}</h2>
                <div>capital {country.capital}</div>
                <div>area {country.area}</div>
                <b>languages:</b>
                <ul>
                    {Object.values(country.languages).map((e, i) =>
                        <li key={i}>{e}</li>)}
                </ul>
                <img src={country.flags.png} />
            </div>
        )
    } else {
        return (
            <div>
                {countries.map((country) =>
                    <div>{country.name.common}</div>
                )}
            </div>
        )
    }

}

export default Display
