import React, { Component } from 'react'

class If_Else extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return (<div>
                <p> Welcome React IF</p>
            </div>)
        } else {
            return (<div>
                <p> Welcome Guest<h1>ELSE</h1></p>
            </div>)
        }
    }
}

export default If_Else
