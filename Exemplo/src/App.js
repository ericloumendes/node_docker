import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Docker é legal!
        </p>
        Este é um exemplo de node-React embutido no docker!
      </header>
    </div>
  );
}

export default App;
