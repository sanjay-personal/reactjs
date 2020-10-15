import React from 'react'

function ListF() {
    const name = ['REACT', 'REACT NATIVE', 'ANGULAR']
    // const nameList = name.map(v => <h2>{v}</h2>)

    // above one given waring Each child in a list should have a unique "key" prop to resolve those waring use below one

    const nameList = name.map((v,index) => <h2 key={index}>{v}</h2>)
    return (
        <div>
            {
                // name.map(v => <h2>{v}</h2>)
                nameList
            }
        </div>
    )
}

export default ListF
