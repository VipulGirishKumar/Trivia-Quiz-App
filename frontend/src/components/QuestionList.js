import React, { Component } from "react";
import Question from "./Question.js";
import he from "he"

import { gql, useQuery } from "@apollo/client";
const getQuestionsQuery = (amount, categoryID, difficulty) => {
  return gql`
        query GET_QUESTIONS {
            questions(amount: ${amount}, categoryID: ${categoryID}, difficulty: "${difficulty}") {
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

const renderQuestions = (data) => {
  return data.questions.map((question, index) => <Question id={index} q={question.question} a={question.answer}/>);
}

const QuestionList = ({qs, cat, diff}) => {
  const { loading, error, data } = useQuery(getQuestionsQuery(qs, cat, diff));
  if (loading || !data) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }
  
  return (
    <>
    {renderQuestions(data)}
    </>
  );
};

export default QuestionList;
