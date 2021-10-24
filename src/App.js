import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';

// import Buttom from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload. auq nga
        </p>       
        <Greet name= "Francis" alyas="pogi"/>
          <Message/>
        <Greet name= "Fundal" alyas="qtie"/>
          <Button/>      
        <h1>MAMA HACKER NAQ T_T</h1>
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
