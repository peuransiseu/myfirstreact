import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';



function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src="https://cryptologos.cc/logos/smooth-love-potion-slp-logo.png"
          className="App-logo" alt="logo" />
        <div class="header">
          <h1 className="blinkText">
            <img src="https://cryptologos.cc/logos/smooth-love-potion-slp-logo.png" alt="slp" />
            <strong>SLP TO THE MOON!</strong>
            <img src="https://cryptologos.cc/logos/smooth-love-potion-slp-logo.png" alt="slp2" />
          </h1>
        </div>

        <p>{Hello}</p>
        <br/>
        <Greet name="Francis" alias="pogi" />
        <br/>
        <Message />
        <div class="button">
          <Button />
        </div><br/>
        <p>kung ayaw mo-</p>
        <img className="bimby" src="https://pbs.twimg.com/media/EoslR-RUcAAqPgp.jpg" alt="bimby"/>
        <br/>
        <h1>MAMA HACKER NAQ T_T</h1>
        <p>--papa jihoz help us--</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <h5>Created by: Francis Angelo Fundal</h5>
      </footer>
    </div>
  );
}

export default Home
