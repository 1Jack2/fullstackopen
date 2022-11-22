import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterKey, setFilterKey] = useState('')
    const filteredPersons = persons.filter(
        (person) => person.name.toLowerCase().includes(filterKey.toLowerCase()));

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        }
        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }

        setPersons(persons.concat(newPerson))
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilterKey(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input value={filterKey} onChange={handleFilterChange} />
            </div>
            <h3>add a new</h3>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h3>Numbers</h3>
            <ul>
                {filteredPersons.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
            </ul>
            <div>debug: {newName} {newNumber}</div>
        </div>
    )
}

export default App
