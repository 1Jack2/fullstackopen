import {useState} from 'react'

const Button = ({text, handleClick}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const MostVote = ({getMostVoted}) => {
    const {point, anecdote} = getMostVoted()
    return (
        <div>
            <div>{anecdote}</div>
            <div>has {point} votes</div>
        </div>
    )
}

const App = () => {
    const getRandomInt = max => Math.floor(Math.random() * max)
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

    const random = () => {
        const value = getRandomInt(anecdotes.length)
        console.log("selected=", value)
        setSelected(value)
    }
    const vote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }
    const getMostVoted = () => {
        const max = Math.max(...points)
        const index = points.indexOf(max)
        return {
            point: points[index],
            anecdote: anecdotes[index]
        }
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <div>{anecdotes[selected]}</div>
            <div>has {points[selected]} votes</div>
            <div>
                <Button text={'vote'} handleClick={vote} />
                <Button text='next anecdote' handleClick={random} />
            </div>
            <h2>Anecdote with most votes</h2>
            <MostVote getMostVoted={getMostVoted} />
        </div>
    )
}

export default App
