import React from 'react'

function ChildF(propss) {
    return (
        <div>
            {/* <button onClick={propss.handler}>Greet Parent</button> without arguments*/}
            <button onClick={()=>propss.handler("CHILD")}>Greet Parent</button>

        </div>
    )
}

export default ChildF
