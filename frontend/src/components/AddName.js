import React, { useState } from 'react';
import Hello from './Hello';


const AddName = (props) => { 
    const [name, setName] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleAddName = () => {
        console.log(name);  // temporary
        <Hello name={name}/>
    }

    return (
        <div>
            <h2>Please Enter your name</h2>
            <input type='text' value ={name} onChange={handleChangeName} />
            <button onClick={handleAddName}>Enter</button>
        </div>
    ); 
};

export default AddName;