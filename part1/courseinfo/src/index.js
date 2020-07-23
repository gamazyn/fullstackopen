import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
	return <h1>Welcome to {props.course} course!</h1>;
};

const Content = (props) => {
	return (
		<div>
			<p>
				We will study about {props.parts[0].name} with {props.parts[0].exercises} exercises.
			</p>
			<p>
				We will study about {props.parts[1].name} with {props.parts[1].exercises} exercises.
			</p>
			<p>
				We will study about {props.parts[2].name} with {props.parts[2].exercises} exercises.
			</p>
		</div>
	);
};

const Total = (props) => {
	return <p>The total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}!</p>;
};

const App = () => {
	const course = 'Half Stack application development';
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10,
		},
		{
			name: 'Using props to pass data',
			exercises: 7,
		},
		{
			name: 'State of a component',
			exercises: 14,
		},
	];
	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
