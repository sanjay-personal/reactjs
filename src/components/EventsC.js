import React, { Component } from 'react'

 class EventsC extends Component {
    clickHandler() {
       alert("heloo click C")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} >ClickEventC</button>
            </div>
        )
    }
}

export default EventsC
