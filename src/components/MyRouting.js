import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Greet from './GreetF';
import Welcome from './Welcome';
import Form from './Form';
import If_Else from './If_Else';
import ElementVariables from './ElementVariables';
import Ternary from './Ternary';
import ShortCircuit from './ShortCircuit';
import PageNotFound from './PageNotFound';
import Employee from './Employee';
import EditEmployee from './EditEmployee';


export default function MyRouting() {
    return (
        <div>
            <Switch>

                <Route exact path="/" component={Welcome}></Route>
                <Route path="/Greet" component={Greet}></Route>
                <Route path="/Form" component={Form}></Route>
                <Route path="/If_Else" component={If_Else}></Route>
                <Route path="/ElementVariables" component={ElementVariables}></Route>
                <Route path="/Ternary" component={Ternary}></Route>
                <Route path="/ShortCircuit" component={ShortCircuit}></Route>
                <Route path="/employee" component={Employee}></Route>
                <Route path="/edit/:id" component={EditEmployee}></Route>


                <Route  component={PageNotFound}></Route>

            </Switch>

        </div>
    )
}
