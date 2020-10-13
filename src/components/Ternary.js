import React, { Component } from 'react'

class Ternary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            this.state.isLoggedIn ? <div>HELLO REACT <h1>IF</h1></div> : <div>HELLO GUEST <h1>ELSE</h1></div>
        )
    }
}

export default Ternary
