import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = (props) => <h1>{props.title}</h1>;

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Statistic = (props) => {
	return (
		<tbody>
			<tr>
				<td>{props.text}</td>
				<td>{props.value}</td>
			</tr>
		</tbody>
	);
};

const Statistics = (props) => {
	const all = props.good + props.bad + props.neutral;
	const average = (props.good + props.bad * -1) / all;
	const positive = (props.good / all) * 100;

	if (all === 0) return <p>There's no feedback given yet!</p>;

	return (
		<div>
			<table>
				<Statistic text="good " value={props.good} />
				<Statistic text="neutral " value={props.neutral} />
				<Statistic text="bad " value={props.bad} />
				<Statistic text="all " value={all} />
				<Statistic text="average " value={average} />
				<Statistic text="positive " value={positive + ' %'} />
			</table>
		</div>
	);
};

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Title title="Give feedback!" />
			<Button handleClick={() => setGood(good + 1)} text="good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="bad" />
			<Title title="Statistics" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
