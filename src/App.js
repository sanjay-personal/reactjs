import React from 'react';
import './App.css';
import Greet from './components/GreetF';
import Welcome from './components/Welcome';
import PropsF from './components/PropsF';
import PropsC from './components/PropsC';
import StateC from './components/StateC';
import SetstateC from './components/SetstateC';
import EventsF from './components/EventsF';
import EventsC from './components/EventsC';
import EventBindC from './components/EventBindC';
import ParentC from './components/ParentC';
import If_Else from './components/If_Else';
import ElementVariables from './components/ElementVariables';
import Ternary from './components/Ternary';
import ShortCircuit from './components/ShortCircuit';
import ListC from './components/ListC';
import ListF from './components/ListF';
import ListF2 from './components/ListF2';
import CarF from './components/CarF';

function App() {
  return (
    <div className="App">
     <Greet />
     <Welcome />
     <PropsF name="Hello Functional props i rendering from Appjs" greeting="thankyou" />
     <PropsF> I am Functional Children use like this </PropsF>
     <PropsF> <button>I am Functional ACTION</button> </PropsF>


     <PropsC name="Hello Class props i rendering from Appjs" greeting="thankyou" />
     <PropsC>I am Class Children use like this</PropsC>
     <PropsC> <button>I am Class ACTION</button> </PropsC>
     <StateC/>
     <SetstateC pluseFive = "5" />
     <br></br>
     <EventsF />
     <br></br>
     <EventsC />
     <br></br>
     <EventBindC />
     <br></br>
     <ParentC />
     <br></br>
     <If_Else/>
     <br></br>
    <ElementVariables />
    <br></br>
    <Ternary />
    <br></br>
    <ShortCircuit />
    <br></br>
    <ListF />
    <br></br>
    <ListC />
    <br></br>
    <ListF2 />
    <br></br>
    <CarF />
    </div>

  );
}

export default App;
