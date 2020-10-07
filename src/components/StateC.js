import React,{Component} from 'react'

class StateC extends Component {
    constructor() {
        super();                                  // it is mandtory to use super keyword
        this.state = {message : "Welcome state"};  // initilize state object
    }
    changeMessage() {
        this.setState({message : "Thank You"})
    }
    resetMessage() {
        this.setState({message :"Welcome state"}) // changing state object by using setState
    }
    render() {
    return (<div><h1>{this.state.message}</h1>
    <button onClick={()=>this.changeMessage()}>Subscribe</button> &nbsp;
    <button onClick={()=>this.resetMessage()}>Reset</button>
    </div> )
    }
}

export default StateC