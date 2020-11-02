import React, { Component } from 'react'

class LifeCycleChildA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "lifecyclechildA"
        }
     console.log("LifeCycleChildA  constructor")
    }
    static getDerivedStateFromProps(props,state) {
     console.log("LifeCycleChildA  getDerivedStateFromProps")

     return null

    }
    componentDidMount() {
        console.log("LifeCycleChildA  componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleChildA  shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevprop,prevstate) {
        console.log("LifeCycleChildA  getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleChildA  componentDidUpdate")
    }
    render() {
        console.log("LifeCycleChildA  render")

        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default LifeCycleChildA
