import React, { Component } from 'react'

class ListC extends Component {
    name = ['REACT', 'REACT NATIVE', 'ANGULAR']
    nameList = this.name.map(v => <h2>{v}</h2>)

    render() {
        return (
            <div>
                {this.nameList}
            </div>
        )
    }
}

export default ListC
