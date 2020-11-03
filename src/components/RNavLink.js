import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

 class RNavLink extends Component {
    render() {
        return (
            <div>
            {/* activeClassName="testClass" */ }
            <ul style={{ display: "inline-grid" }}>
                <li><NavLink to="/If_Else" activeClassName="testClass" >If_Else</NavLink></li>
                <li><NavLink to="/ElementVariables" activeClassName="testClass" >ElementVariables</NavLink></li>
                <li><NavLink to="/Ternary" activeClassName="testClass" >Ternary</NavLink></li>
                <li><NavLink to="/ShortCircuit" activeClassName="testClass" >ShortCircuit</NavLink></li>
            </ul>
            </div>
        )
    }
}

export default RNavLink
