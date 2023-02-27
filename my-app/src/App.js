import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  

  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3001/todos")
    .then(result => result.json())
    .then(data => setTasks(data))
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <ul>
          {tasks.map(t => <li key={t.id}>{t.task}</li>)}
        </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
