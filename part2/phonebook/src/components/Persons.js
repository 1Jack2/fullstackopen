const Person = (props) => {
    const {person, handleDelete} = props
    // console.log(props)
    return <div>
        {person.name} {person.number}
        <button onClick={handleDelete}>delete</button>
    </div>
}

const Persons = ({persons, handleDelete}) => (
    <div>
        {persons.map((person) =>
            <Person
                key={person.id}
                person={person}
                handleDelete={() => handleDelete(person.id)}
            />
        )}
    </div>
)

export default Persons
