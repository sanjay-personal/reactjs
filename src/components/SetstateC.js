import React, { Component } from 'react'

class SetstateC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0
        }
    }
    count() {

            // this.setState({
            //     number: this.state.number + 1
            // })
            // above is regular expression but below is callback with previous state sync function 
            // pass two arguments with pre and props(pre is userdefined)
            this.setState((pre,props)=>({
                // number : pre.number +1 + parseInt(this.props.pluseFive)
                // number : pre.number +1 + parseInt(props.pluseFive)
                number : pre.number +1


            }))
    }
    render() {
        return (
            <div>
    <p>{this.state.number}</p>
    <button onClick={()=>this.count()}>Count </button>
            </div>
        )
    }
}

export default SetstateC
