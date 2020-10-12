import React, { Component } from 'react'
import ChildF from './ChildF'

class ParentC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "REACT"
        }

        this.greet = this.greet.bind(this)
    }
    greet(childarg) {
        alert(`HELLO ${this.state.parentName} calling argument from  ${childarg}`)
    }
    render() {
        return (
            <div>
            <ChildF handler={this.greet} />
            </div>
        )
    }
}

export default ParentC
