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
  const [formInputs, setFormInputs] = useState({
    numberOfQuestions: 0,
    categoryID: 9,
    difficulty: "0",
  });

  // References to the inputs
  const categoryIDInput = useRef(null);
  const numberOfQuestionsInput = useRef(null);
  const difficultyInput = useRef(null);

  // Validates the form input
  const validFormInputs = () => {
    const numberOfQuestions = numberOfQuestionsInput.current.value;
    if (!isNormalInteger(numberOfQuestions)) {
      alert("Must input a positive integer");
      return false;
    }
    return true;
  };

  // Updates the state variables
  const updateStateVariables = () => {
    if (validFormInputs()) {
      setFormInputs({
        numberOfQuestions: numberOfQuestionsInput.current.value,
        difficulty: difficultyInput.current.value,
        categoryID: categoryIDInput.current.value,
      });
    }
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
      <QuestionList
        qs={formInputs.numberOfQuestions}
        cat={formInputs.categoryID}
        diff={formInputs.difficulty}
      />
    </>
  );
};

function isNormalInteger(str) {
  str = str.trim();
  if (!str) {
    return false;
  }
  str = str.replace(/^0+/, "") || "0";
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
}

export default DropDown;
