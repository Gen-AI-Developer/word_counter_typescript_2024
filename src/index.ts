#!/usr/bin/env node
import inquirer from "inquirer";
const str = await inquirer.prompt([
    {
        type: "input",
        message: "Enter Your Paragrahp Or Sentence for Word Counting > ",
        name: "inputString"
    }
])
function countWords(input: string): void {
    input = input.trim();
    if (input.length === 0) {
        console.log('Input Unvalid')
    }
    const words: string[] = input.split(/\s+/);
    console.log("Words = ", words.length)
    console.log('Characters count =' + input.length)

}
const text: string = str.inputString;
countWords(text);
