import './App.css';
import Jsx from './components/Jsx';
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
import Sample1 from './components/sample1';
import ListRendering from './components/ListRendering';
import DemoForInputHandler from './components/DemoForInputHandler';
import LifeCycleMethodsInFunctional from './components/LifeCycleMethodsInFunctional';
import FormHandling from './components/FormHandling';
import DemoApplication from './components/DemoApplication';
import RefsInReact from './components/RefInReact';
import Todo from './components/components2/Todo';






function App() {
  return (
    <div className="App">
   {/*  <Jsx />
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
     <Sample1 /> 
     <ListRendering /> 
    <DemoForInputHandler /> 
   <LifeCycleMethodsInFunctional />  
   <FormHandling />  
  <DemoApplication/> 
  <RefsInReact />  */}
  <Todo />
     
    </div>
  );
};

export default App;
