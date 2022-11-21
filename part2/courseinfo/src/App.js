const Head = (props) => (
    <h1>{props.title}</h1>
)

const Part = (props) => (
    <p>{props.part} {props.exercises}</p>
)

const Content = ({parts}) => (
    parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises} />
    )
)

const Course = ({course}) => (
    <div>
        <Head title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

const Total = ({parts}) => {
    return (
        <p><b>
            Total of exercises {parts.reduce(
                (s, p) => s + p.exercises,
                0
            )}
        </b></p>
    )
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course} />
}

export default App
