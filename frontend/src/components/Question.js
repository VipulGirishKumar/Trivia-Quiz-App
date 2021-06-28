import React from 'react';
import data from '../data';
import he from 'he'; //run npm install he

const Question = ({id}) => {
    return <div>
	    <h2>Question {id}: {he.decode(data.questions[id-1].question)}</h2>
	    <div id = "content">
            <div>
                <input type="radio" id="true" name={id} value="true">
                </input>
                <label htmlFor="true">True</label>
            </div>
            <div>
                <input type="radio" id="false" name={id} value="false">
                </input>
                <label htmlFor="true">False</label>
            </div>
	    </div>
    </div>;
}

export default Question;
