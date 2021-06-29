import express, { response } from "express";
import fetch from "node-fetch";

//Returns a promise that will return an array of questions
//amount must be less than 50
//category is 0 for any category, for a specific category visit the apis site for info
//difficulty can be 'easy' 'medium' 'hard' or 0
//can also specify question type if needed (mc or tf)
export function GetQuestions(amount, category, difficulty) {
  return fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=boolean`
  )
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      //can put error handling here with the response from database
      let bank = data.results;
      //console.log(bank);
      return bank;
    });
}

//This is how to get the questions

export function ParseQuestions() {
  fetch("https://opentdb.com/api.php?amount=10&type=boolean")
    .then((response) => {
      return response.json();
    })
    .then((GetQuestions) => {
      //console.log(GetQuestions);
      let questions = GetQuestions.results.map((GetQuestion) => {
        const formattedQuestion = {
          question: GetQuestion.question,
        };

        const answerChoices = [...GetQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 1) + 1;
        answerChoices.splice(
          formattedQuestion.answer - 1,
          0,
          GetQuestion.correct_answer
        );

        answerChoices.forEach((choice, index) => {
          formattedQuestion["choice" + (index + 1)] = choice;
        });
        console.log(formattedQuestion);
        return formattedQuestion;
      });
    });
}

console.log(await GetQuestions(10, 22, "easy"));
//ParseQuestions();

// I think I do not need this
/*var questions;
var numOfQs = 2;
var cat = 0;
var diff = `easy`;

GetQuestions(numOfQs, cat, diff).then((data =>{
    questions = data;
    
    for(var i = 0; i < numOfQs; i++){
        console.log(questions[i])
    }
})); 
*/
