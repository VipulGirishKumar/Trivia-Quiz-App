import React from 'react';

const Quiz = () => {
    return (<>
    <div id="score"><p>score: 0 right answers out of 0 possible</p></div>
    <br></br>
    <button id="check" onclick="checkAnswer()">Submit Answer</button>
    <div id="response">
        <div id="explanation"></div>
    </div>
    </>);
}

export default Quiz;