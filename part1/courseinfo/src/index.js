import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return(
  <div>
    <p>Hello {props.name},  you are {props.age} years old </p>
  </div>
  )
}

const Footer = () => {
  return(
    <div>
      greting app created by <a href="https://github.com/gamazyn">gamazyn</a>
    </div>
  )
}

const App = () => {
  const age = 69
  const name = "Putona"

  return(
    <div>
      <h1>Greetings</h1>
      <Hello name="Thiago" age= {10 + 14} />
      <Hello name={name} age= {age} />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);