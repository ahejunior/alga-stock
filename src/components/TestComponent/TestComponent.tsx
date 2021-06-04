import React, {useState, useEffect} from 'react';

import './TestComponent.css';

function TestComponent(props: {name: string}) {
    const [age, setAge] = useState(18);

    useEffect( () => {
        console.log('component was created')
    }, [])

    useEffect( () => {
        console.log('Age was updated to ' + age)
    }, [age])

    return <div className="TestComponentStyle">
        Hello {props.name}, {age}<br/>
        <button onClick={ () => {
            setAge(age + 1)
        }}>+</button><button onClick={ () => {
            setAge(age - 1)
        }}>-</button>
    </div>
}

export default TestComponent;