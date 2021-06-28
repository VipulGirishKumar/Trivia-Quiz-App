import React, { useState } from 'react';

const AddName = (props) => { 
    const [name, setName] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleAddName = () => {
        console.log(name) // console log for now,
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