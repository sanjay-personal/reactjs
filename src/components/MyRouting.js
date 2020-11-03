import React from 'react'
import { Route } from 'react-router-dom';
import Greet from './GreetF';
import Welcome from './Welcome';
import Form from './Form';
import If_Else from './If_Else';
import ElementVariables from './ElementVariables';
import Ternary from './Ternary';
import ShortCircuit from './ShortCircuit';


export default function MyRouting() {
    return (
        <div>
            <Route path="" component={Welcome}></Route>
            <Route path="/Greet" component={Greet}></Route>
            <Route path="/Form" component={Form}></Route>
            <Route path="/If_Else" component={If_Else}></Route>
            <Route path="/ElementVariables" component={ElementVariables}></Route>
            <Route path="/Ternary" component={Ternary}></Route>
            <Route path="/ShortCircuit" component={ShortCircuit}></Route>

        </div>
    )
}
