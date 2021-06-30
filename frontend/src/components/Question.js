import React, {useState} from 'react';
import he from 'he'; //run npm install he
import SubmitButton from './SubmitButton';

const Question = ({id, q, a}) => {
    const [clicked, setClicked] = useState("False");

    function changeAnswer(value){
        setClicked(value);
        console.log(clicked);
    }

    return <div>
	    <h2>Question {id+1}: {he.decode(q)}</h2>
	    <div id = "content">
            <div>
                <input type="radio" id="true" name={id} value="true" onChange={() => changeAnswer("True")}>
                </input>
                <label htmlFor="true">True</label>
            </div>
            <div>
                <input type="radio" id="false" name={id} value="false" onChange={() => changeAnswer("False")}>
                </input>
                <label htmlFor="false">False</label>
            </div>
            <SubmitButton correct={a} answer={clicked}/>
	    </div>
    </div>;
}

export default Question;
