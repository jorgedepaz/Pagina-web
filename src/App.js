import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Navbar from './components/Navbar'


function holamundo(name) {
  var presentacion =  <div>
    <h2>Hola mi nombre es: </h2>
    <h3>{name}</h3>
    </div> ;
  return presentacion
}

function App() {
  var nombre = "Jorge de Paz";
  
  return (
    <div className="App">
      <section className = "componentes">
          <Navbar/>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          En construcción
        </p>
        {holamundo(nombre)}
      </header>
    </div>
    
  );
}

export default App;
