import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Title = (props) => <h1>{props.text}</h1>;

const Mostvoted = (props) => {
	const topVoted = Math.max(...props.votes);
	let mostVoted = props.votes.indexOf(topVoted);

	if (topVoted === 0) {
		return <p>There are no votes yet!</p>;
	}

	return (
		<p>
			{props.anecdotes[mostVoted]}
			<br /> has {props.votes[mostVoted]} votes
		</p>
	);
};

const App = (props) => {
	const [votes, setVotes] = useState(new Array(6).fill(0));
	const [selected, setSelected] = useState(0);

	return (
		<div>
			<Title text="Anecdote of the day" />
			<p>
				{props.anecdotes[selected]}
				<br /> has {votes[selected]} votes
			</p>
			<Button
				handleClick={() => {
					const votesCopy = [...votes];
					votesCopy[selected] += 1;
					setVotes(votesCopy);
				}}
				text="Vote"
			/>
			<Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="Next anecdote" />
			<Title text="Most voted anecdote" />
			<Mostvoted votes={votes} anecdotes={props.anecdotes} />
		</div>
	);
};

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
