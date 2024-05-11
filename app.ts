#! /usr/bin/env node

import inquirer from "inquirer";

//printing a welcome message
console.log("\Wellcome to \'code with maheen\' -CLI simple calculator\n");

//asking questions from usres through inquirer
let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices:["Addition","Subtraction","Multiplication","Division"],

    },
]);

//conditional statement if-else
if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber )
}
else if(answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("invalid input")
}