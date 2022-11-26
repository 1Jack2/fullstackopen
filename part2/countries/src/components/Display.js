const Display = ({countries, shouldShowDetail, toggleShowDetail}) => {
    const detail = (country) => (
        <div key={country.name.official}>
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

    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (countries.length == 1) {
        const country = countries[0]
        return detail(country)
    } else {
        return (
            <div>
                {countries.map((country) => {
                    return shouldShowDetail(country.name.official)
                        ? detail(country)
                        : (<div key={country.name.official}>
                            {country.name.common}
                            <button onClick={() => toggleShowDetail(country.name.official)}>show</button>
                        </div>)
                })}
            </div>
        )
    }

}

export default Display
