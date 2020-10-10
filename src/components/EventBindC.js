import React, { Component } from 'react'

class EventBindC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "HELLO"
        }
        // this.eventBind = this.eventBind.bind(this) type3
    }

    // eventBind() {
    //     this.setState({
    //         message: "Bye"      type1,type2,type3 we use
    //     })
    // }

    eventBind() {
        this.setState({
            message: "BYE"
        })
    }
     
    // eventBind = () => {
    //     this.setState({
    //         message: "Bye"  only type4
    //     })
    // }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.eventBind.bind(this)}>Type of Binding</button> type1 */}
                <button onClick={()=>this.eventBind()}>Type of Binding</button> 
                {/* <button onClick={this.eventBind}>Type of Binding</button> if type3 we use decalre constructor also  */}
                {/* <button onClick={this.eventBind}>Type of Binding</button> type4 */}

            </div>
        )
    }
}

export default EventBindC
