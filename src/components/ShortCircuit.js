import React, { Component } from 'react'

class ShortCircuit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>HELLO REACT <h1>Shortcircuit</h1></div>
    }
}

export default ShortCircuit
