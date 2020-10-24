import React, { Component } from 'react'
import LifeCycleChildA from './LifeCycleChildA'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "lifecycleA"
        }
     console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props,state) {
     console.log("LifeCycleA getDerivedStateFromProps")

     return null

    }
    componentDidMount() {
        console.log("LifeCycleA componentDidMount")

    }
    render() {
        console.log("LifeCycleA render")

        return (
            <div>
                {this.state.name} <br></br> <LifeCycleChildA />
            </div>
        )
    }
}

export default LifeCycleA
