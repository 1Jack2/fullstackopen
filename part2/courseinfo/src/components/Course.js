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

export default Course
