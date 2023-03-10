import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import APIURL from './apiEnd';


function App() {

  

  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    fetch(APIURL)
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
          <div> {process.env.NODE_ENV}</div>
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
