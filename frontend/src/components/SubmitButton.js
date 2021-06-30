import React, {useState} from 'react';

const SubmitButton = ({correct, answer}) => {
    
    const [clicked, setClicked] = useState(0);
    const [right, setRight] = useState(0);
    function click(){
        setClicked(1);
        if(answer === correct){
             setRight(1);
        }
    }

return(
    <>
    <button id="check" onClick={click}>Submit Answer</button>
    {clicked === 1 && right === 1 && (<h3>Correct</h3>)}
    {clicked === 1 && right === 0 && (<h3>Incorrect</h3>)}
    </>
);
}

export default SubmitButton;

