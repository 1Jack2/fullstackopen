const Head = (props) => (
    <h2>{props.title}</h2>
)

const Part = (props) => (
    <p>{props.part} {props.exercises}</p>
)

const Content = ({parts}) => (
    parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises} />
    )
)

const Course = ({courses}) => (
    <div>
        <h1> Web development curriculum </h1>
        {courses.map(course =>
            <div key={course.id}>
                <Head title={course.name} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </div>
        )}
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
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return <Course courses={courses} />
}

export default App
