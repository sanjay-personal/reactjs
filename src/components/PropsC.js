import React,{Component} from 'react'

class PropsC extends Component {
    render() {
        return <div><h1>{this.props.name}</h1> <h5>{this.props.greeting}</h5>
    <p>{this.props.children}</p></div>
    }
}

export default PropsC