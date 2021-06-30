import React, { useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import QuestionList from "./QuestionList";

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      name
      id
    }
  }
`;

const DropDown = () => {
  // The state variables are stored here
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [categoryID, setCategoryID] = useState(9);
  const [difficulty, setDifficulty] = useState("0");
  // References to the inputs
  const categoryIDInput = useRef(null);
  const numberOfQuestionsInput = useRef(null);
  const difficultyInput = useRef(null);
  // Updates the state variables
  const updateStateVariables = () => {
    setNumberOfQuestions(numberOfQuestionsInput.current.value);
    setDifficulty(difficultyInput.current.value);
    setCategoryID(categoryIDInput.current.value);
  };

  // Fetches category data
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading || !data) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <label htmlFor="categories">Choose a category: </label>
      <select id="categories" ref={categoryIDInput}>
        {data.categories.map((category) => {
          return <option value={category.id}>{category.name}</option>;
        })}
      </select>
      <br />
      <label htmlFor="number">How many questions: </label>
      <input type="text" ref={numberOfQuestionsInput}></input>
      <br />
      <label htmlFor="difficulty">What difficulty: </label>
      <select id="difficulty" ref={difficultyInput}>
        <option value="0">Random</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <br />
      <button onClick={() => updateStateVariables()}>Begin</button>
      <br />
      <QuestionList qs={numberOfQuestions} cat={categoryID} diff={difficulty} />
    </>
  );
};

export default DropDown;
