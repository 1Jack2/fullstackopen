import axios from 'axios'
import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import Display from './components/Display'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterKey, setFilterKey] = useState('')
    const filteredCountries = countries.filter(
        (country) => country.name.common.toLowerCase().includes(filterKey.toLowerCase()))

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            console.log("promise fulfilled");
            setCountries(response.data)
        })
    }, [])
    console.log("render", countries.length, 'countries');

    const handleFilterChange = (event) => {
        setFilterKey(event.target.value)
    }

    return (
        <div>
            <Filter filterKey={filterKey} handleFilterChange={handleFilterChange} />
            <Display countries={filteredCountries} />
        </div>
    )
}

export default App
