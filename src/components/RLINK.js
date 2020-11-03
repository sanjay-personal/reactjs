import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RLINK extends Component {
    render() {
        return (
            <div>
                <ul style={{display: "inline-grid"}}>
                <li><Link to="/If_Else">If_Else</Link></li>
        <li><Link to="/ElementVariables">ElementVariables</Link></li>
        <li><Link to="/Ternary">Ternary</Link></li>
        <li><Link to="/ShortCircuit">ShortCircuit</Link></li>
                </ul>
            </div>
        )
    }
}

export default RLINK
