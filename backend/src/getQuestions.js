import express, { response } from "express";
const fetch = require("node-fetch");

//Returns a promise that will return an array of questions
//amount must be less than 50
//category is 0 for any category, for a specific category visit the apis site for info
//difficulty can be 'easy' 'medium' 'hard' or 0
//can also specify question type if needed (mc or tf)
function GetQuestions(amount, category, difficulty){
    return fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
    )
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        //can put error handling here with the response from database
        let bank = data.results;
        //console.log(bank);
        return bank;
    })
}

//This is how to get the questions

/*
var questions;
var numOfQs = 2;
var cat = 0;
var diff = `easy`;

GetQuestions(numOfQs, cat, diff).then((data =>{
    questions = data;
    
    for(var i = 0; i < numOfQs; i++){
        console.log(questions[i])
    }
})); */





