import React from 'react'
import CarView from './CarView'

function CarF() {

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

    const carsList = cars.map(c => <CarView c={c}/>)
    return (
        <div>
            {carsList}
        </div>
    )
}

export default CarF
