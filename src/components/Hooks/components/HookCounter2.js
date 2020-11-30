import React, { useState } from 'react'

export default function HookCounter2() {
    let initialCount = 0
   let [count, setCount] = useState(initialCount);
   let fivetimes = ()=>{
        for(var i=0;i<5;i++) {
            setCount(prevC=>prevC+1);
        }
    }
    return (
        <div>
            <p>COUNT {count}</p>
            <button onClick={() => setCount(initialCount)}>Rest</button> &nbsp;
            <button onClick={() => setCount(prevC=>prevC+1)}>ADD</button>&nbsp;
            <button onClick={() => setCount(prevC=>prevC-1)}>SUB</button>&nbsp;
            <button onClick={fivetimes}>ADD+5</button>


        </div>
    )
}
