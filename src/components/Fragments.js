import React, { Component } from 'react'

class Fragments extends Component {
    render() {
        return (
            // React.Fragment by using this extra dom elements not appeared.we can use two ways.one way is  <React.Fragment> and other way <>.limitations if we use like this <> cant pass key attribute
            <React.Fragment>
                <h1>WITH FRAGMENT</h1>
            </React.Fragment>
        )
    }
}

export default Fragments
