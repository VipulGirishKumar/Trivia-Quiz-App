import React from 'react';

const Question = ({id}) => {
    return <div>
	    <h2>Question {id}</h2>
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
