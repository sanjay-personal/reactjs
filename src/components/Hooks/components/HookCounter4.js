import React, { useState } from 'react'

export default function HookCounter4() {
    let [items, setItem] = useState([]);
    let addItem = ()=>{
        setItem([...items,{id:items.length,value:"Item"+items.length}]);
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button> &nbsp;

            <ul>
                {items.map(item => <li key={item.id} >{item.value}</li>)}
            </ul>
        </div>
    )
}
