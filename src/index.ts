#!/usr/bin/env node
import inquirer from "inquirer";
const str = await inquirer.prompt([
    {
        type: "input",
        message: "Enter Your Paragrahp Or Sentence for Word Counting > ",
        name: "inputString"
    }
])
let WordCount = str.inputString.trim().split(/\s+/).lenght
console.log('WordCount', WordCount)