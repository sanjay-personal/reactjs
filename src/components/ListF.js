import React from 'react'

function ListF() {
    const name = ['REACT', 'REACT NATIVE', 'ANGULAR']
    const nameList = name.map(v => <h2>{v}</h2>)
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
