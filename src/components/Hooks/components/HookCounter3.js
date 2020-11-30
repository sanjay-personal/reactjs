import React, { useState } from 'react'

export default function HookCounter3() {
    let [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value })} />  &nbsp;
          <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value })} />  &nbsp;
          <h6>  firstName = {name.firstName}</h6>
            <h6> lastName = {name.lastName}</h6>
            <h6>{JSON.stringify(name)}</h6>
        </div>
    )
}
