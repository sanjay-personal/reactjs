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

    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevstate) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null

    }

    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate")
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
