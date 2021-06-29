import React, { useState } from "react";
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
  const handleLockSettings = () => {
    console.log(); // temporary
  };
  // The input variables are stored here
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [categoryID, setCategoryID] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const handleTextChange = (e) => {
    const value = e.target.value;
    setNumberOfQuestions(value);
  };
  const handleCategoryChange = (e) => {
    setCategoryID(e.target.value);
  };
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading || !data) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }
  return (
    <>
      <label for="categories">Choose a category: </label>
      <select
        name="categories"
        id="categories"
        onChange={(e) => handleCategoryChange(e)}
      >
        {data.categories.map((category) => {
          return <option value={category.id}>{category.name}</option>;
        })}
      </select>
      <br></br>
      <label for="number">How many questions: </label>
      <input
        value={numberOfQuestions}
        type="text"
        onChange={(e) => handleTextChange(e)}
      ></input>
      <br></br>
      <label for="difficulty">What difficulty: </label>
      <select
        name="difficulty"
        id="difficulty"
        onChange={(e) => handleDifficultyChange(e)}
      >
        <option value="0">Random</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <br></br>
      <button onClick={handleLockSettings}>Begin</button>
      <br></br>
      {numberOfQuestions&&categoryID&&difficulty&&(
        <QuestionList qs={numberOfQuestions} cat={categoryID} diff={difficulty}/>
      )}
    </>
  );
};

export default DropDown;
