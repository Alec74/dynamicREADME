// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'What was your build motivation?', 'Why did you build this project?',
    'What problem does it solve?', 'What makes your project standout?', 'What are the steps to install your project?',
    'Please provide instructions for usage.'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    // console.log('Welcome! Your answers following questions will be added to your new README file!');
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'motiv',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'why',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'problem',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'standout',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'usage',
            },
        ])
        .then((response) => {
            console.log(response.title);
            console.log(response.motiv);
            console.log(response.why);
            console.log(response.problem);
            console.log(response.standout);
            console.log(response.install);
            console.log(response.usage);
        });
};

// Function call to initialize app
init();
