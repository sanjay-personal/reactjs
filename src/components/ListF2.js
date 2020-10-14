import React from 'react'

function ListF2() {
    const cars = [
        {
            "color": "purple",
            "type": "minivan",
            "registration": '2017-01-03',
            "capacity": 7
        },
        {
            "color": "red",
            "type": "station wagon",
            "registration": '2018-03-03',
            "capacity": 5
        }]

    const carsList = cars.map(c => <h2>car color is {c.color}.car type is {c.type}.car is registration on {c.registration}.car capacity is{c.capacity}</h2>)

    return (
        <div>
            {carsList}
        </div>
    )
}

export default ListF2
