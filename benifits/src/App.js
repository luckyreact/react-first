import './App.css';
import Greet from './components/greetClass';
import GreetFunction from './components/greetFunction';
import StateClass from './components/StateClass';
import StateFunction from './components/StateFunction';

function App() {
  return (
    <div className="App">
     <Greet nameProp="sateesh" />
     <GreetFunction nameProp="saragadam"/>
     <StateClass nameprop="sateesh"/>
     <StateFunction nameprop="saragadam"/>
    </div>
  );
}

export default App;
