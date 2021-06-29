import React, { useState } from 'react';

const DropDown = () => {
    
    const handleLockSettings = () => {
        console.log();  // temporary
    }

    return(
        <>
        <label for="categories">Choose a category: </label>
        <select name="categories" id="categories">
        <option value="Any">Any</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Mythology">Mythology</option>
            <option value="History">History</option>
            <option value="Sports">Sports</option>
        </select>
        <br></br>
        <label for="number">How many questions: </label>
        <select name="number" id="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <br></br>
        <label for="difficulty">What difficulty: </label>
        <select name="difficulty" id="difficulty">
            <option value="Random">Random</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>
        <br></br>
        <button onClick={handleLockSettings}>Begin</button>
        </>
    );
}


export default DropDown;