import React from 'react'

function EventsF() {
    function clickHandler() {
        alert("hello click F")
    }
    return (
        <div>
            <button onClick={clickHandler}>ClickEventF</button>
        </div>
    )
}

export default EventsF
