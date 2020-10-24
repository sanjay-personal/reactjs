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
