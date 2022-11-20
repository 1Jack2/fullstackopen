import {useState} from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Display = (props) => (
    <div>{props.text} {props.value}</div>
)


const Statistic = (props) => (
    <div>{props.text} {props.func()}</div>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = () => good + neutral + bad
    const average = () => {
        if (all() === 0) {
            return '0'
        }

        return (good - bad) / all()
    }
    const positive = () => {
        if (all() === 0) {
            return '0%'
        }

        return (good / all()) * 100 + '%'
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />
            <h2>statistics</h2>
            <Display text='good' value={good} />
            <Display text='neutral' value={neutral} />
            <Display text='bad' value={bad} />
            <Statistic text='all' func={all} />
            <Statistic text='average' func={average} />
            <Statistic text='positive' func={positive} />
        </div>
    )
}

export default App
