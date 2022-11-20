import {useState} from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const StatisticLine = (props) => (
    <div>{props.text} {props.value}</div>
)

const Statistic = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    if (good === 0 && neutral === 0 && bad === 0) {
        return <div>No feedback given</div>
    }

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
        <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all()}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average()}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positive()}</td>
                </tr>
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />
            <h2>statistics</h2>
            <Statistic good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
