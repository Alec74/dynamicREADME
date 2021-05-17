// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ['What was your build motivation?', 'Why did you build this project?',
    'What problem does it solve?', 'What makes your project standout?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome! Your answers following questions will be added to your new README!');

}

// Function call to initialize app
init();
