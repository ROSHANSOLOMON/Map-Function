import logo from './logo.svg';
import './App.css';
//import planets from './planets';

function App() {
  const planetName = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];

  const planetList = planetName.map(planet => <center><table><tr><td>{planet}</td></tr></table></center>);
  return (
    <div className="App">
      {
        planetList
      }
    </div>
  );
}

export default App;
