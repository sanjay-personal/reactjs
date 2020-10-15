import React, { Component } from 'react'

class ListC extends Component {
    name = ['REACT', 'REACT NATIVE', 'ANGULAR']
    // nameList = this.name.map(v => <h2>{v}</h2>)
    // above one given waring Each child in a list should have a unique "key" prop to resolve those waring use below one
    nameList = this.name.map((v,index) => <h2 key={index}>{v}</h2>)


    render() {
        return (
            <div>
                {this.nameList}
            </div>
        )
    }
}

export default ListC
