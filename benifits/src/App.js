import './App.css';
import jsx from './components/Jsx';
import BindingEventHandler from './components/BindingEventHandler';
import BindingEventHandlerCheck from './components/BindingEventHandlerCheck';
import ConditionalRendering from './components/ConditionalRendering';
import ConditionalRenderingWithTernery from './components/ConditionalRenderingWithTernery';
import Destructing from './components/Destructing';
import DestructingFunctional from './components/DestructingFunctional';
import Greet from './components/greetClass';
import GreetFunction from './components/greetFunction';
import StateClass from './components/StateClass';
import StateFunction from './components/StateFunction';




function App() {
  return (
    <div className="App">
      <jsx />
     <Greet nameProp="sateesh"/> 
     <GreetFunction nameProp="saragadam"/>
     <StateClass nameprop="sateesh"/>
     <StateFunction nameprop="saragadam"/>
     <Destructing name= "sateesh" place= "akp" age= "26" />
     <DestructingFunctional name= "sateesh" place= "akp" age= "26" /> 
     <BindingEventHandler /> 
     <BindingEventHandlerCheck />
     <ConditionalRendering /> 
     <ConditionalRenderingWithTernery />
     
    </div>
  );
};

export default App;
