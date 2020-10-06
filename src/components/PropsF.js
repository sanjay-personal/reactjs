import React from 'react'

// function PropsF(props) {
// return <h1>{props.name} {props.greeting}</h1>
// }
/**
 * 
 * @param {*} props 
 * props is userdefined name argument.
 * By using props(argument) can we retrieve the data.
 * props(argument) store data like object.
 * props(argument) data come from parent(js file)
 * to get children data we use reserved word children.
 * In class level we 'this' keyword to get data and use 'props' keyword
 * In class see the file(PropsC)
 */
 const PropsF = (props)=> {
    return <div><h1>{props.name}</h1> <h5>{props.greeting}</h5><div>
        <p>{props.children}</p>
        </div></div>
    }
export default PropsF