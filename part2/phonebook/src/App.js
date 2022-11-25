import {useState, useEffect} from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import service from './services/phonebook'
import Notification from './notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterKey, setFilterKey] = useState('')
    const [notification, setNotification] = useState(null)
    const filteredPersons = persons.filter(
        (person) => person.name.toLowerCase().includes(filterKey.toLowerCase()));

    useEffect(() => {
        service.getAll().then(data => {
            console.log("promise fulfilled")
            setPersons(data)
        })
    }, [])
    // console.log("render", persons.length, 'persons');

    const addPerson = (event) => {
        event.preventDefault()
        const existedPerson = persons.find((person) => person.name === newName)
        if (existedPerson) {
            const ok = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (ok) {
                const updatedPerson = {...existedPerson, number: newNumber}
                console.log(updatedPerson)
                service.update(existedPerson.id, updatedPerson).then((data) => {
                    setNotification(
                        `Updated ${data.name}`
                    )
                    setTimeout(() => {
                        setNotification(null)
                    }, 3000)
                    setPersons(persons.map((v) => {
                        return v === existedPerson
                            ? updatedPerson
                            : v
                    }))
                })
            }

            return
        }

        const newPerson = {
            name: newName,
            number: newNumber,
        }
        service.create(newPerson).then(data => {
            setNotification(
                `Added ${data.name}`
            )
            setTimeout(() => {
                setNotification(null)
            }, 5000)
            setPersons(persons.concat(data))
        })
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilterKey(event.target.value)
    }

    const handleDelete = (id) => {
        const data = service.del(id)
        // console.log('before delete data.length = ', persons.length)
        setPersons(persons.filter(v => v.id !== id))
        // console.log(persons.filter(v => v.id !== id))
        // console.log('after delete data.length = ', persons.length)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notification} />
            <Filter filterKey={filterKey} handleFilterChange={handleFilterChange} />
            <h3>add a new</h3>
            <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
            <h3>Numbers</h3>
            <Persons persons={filteredPersons} handleDelete={handleDelete} />

            <div>debug: {newName} {newNumber}</div>
        </div>
    )
}

export default App
