import React, { Component } from 'react';
import Question from './Question.js'
import data from '../data.js'

import { gql, useQuery } from "@apollo/client";
const getQuestionsQuery = (amount, categoryID, difficulty) => {
  return gql`
        query GET_QUESTIONS {
            questions(amount: ${amount}, categoryID: ${categoryID}, difficulty: ${difficulty}) {
                question correct_answer incorrect_answers
            }
        }
    `;
};

/*
// Then in your componenet:
function ExampleComponent(props) {
    const {loading, error, data} = useQuery(getQuestionsQuery(amount, categoryID, difficulty))
    // where amount and categoryID are integers, and difficulty is a string
    // data now contains the question string, the correct answer, and the incorrect answers (an array)
}*/


const QuestionList = () => {
    const {loading, error, data} = useQuery(getQuestionsQuery(1, 21, "easy"))
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return <>
    <div><Question id="1"/></div>
    <div><Question id="2"/></div>
    </>;
}

export default QuestionList;