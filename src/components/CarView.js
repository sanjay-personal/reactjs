import React from 'react'

function CarView({c}) {
    // console.log("CCCCCCC",c,{c})
    return (
        <div>
            <h2>car color is {c.color}.car type is {c.type}.car is registration on {c.registration}.car capacity is{c.capacity}</h2>
        </div>
    )
}

export default CarView
