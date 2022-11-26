import axios from 'axios'
import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import Display from './components/Display'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterKey, setFilterKey] = useState('')
    const [showDetailSet, setShowDetailSet] = useState(new Set())
    const filteredCountries = countries.filter(
        (country) => country.name.common.toLowerCase().includes(filterKey.toLowerCase()))
    const shouldShowDetail = id => showDetailSet.has(id)
    const toggleShowDetail = id => {
        console.log(showDetailSet);
        setShowDetailSet(
            showDetailSet.has(id)
                ? new Set(showDetailSet).delete(id)
                : new Set(showDetailSet).add(id)
        )
        console.log(new Set(showDetailSet).add(id));
        console.log(showDetailSet);
    }

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
            <Display countries={filteredCountries} shouldShowDetail={shouldShowDetail} toggleShowDetail={toggleShowDetail} />
        </div>
    )
}

export default App
