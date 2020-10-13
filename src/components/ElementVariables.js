import React, { Component } from 'react'

class ElementVariables extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let message
        if(this.state.isLoggedIn) {
            message = <div>HELLO REACT <h1>IF</h1></div>
        } else {
            message = <div>HELLO GUEST <h1>ELSE</h1></div>

        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default ElementVariables
