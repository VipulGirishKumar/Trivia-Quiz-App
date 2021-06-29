import React from 'react';
import data from '../data';
import he from 'he'; //run npm install he

const Question = ({id, q, a}) => {
    return <div>
	    <h2>Question {id+1}: {he.decode(q)}</h2>
	    <div id = "content">
            <div>
                <input type="radio" id="true" name={id} value="true">
                </input>
                <label htmlFor="true">True</label>
            </div>
            <div>
                <input type="radio" id="false" name={id} value="false">
                </input>
                <label htmlFor="false">False</label>
            </div>
	    </div>
    </div>;
}

export default Question;
