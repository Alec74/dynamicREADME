// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project? ==>', 
    'What was your build motivation? ==>', 
    'Why did you build this project? ==>',
    'What problem does it solve? ==>', 
    'What makes your project standout? ==>', 
    'What did you learn? ==>',
    'What are the steps to install your project? ==>',
    'Please provide instructions for usage: ==>',
    'If you would like other devs to be able to contribute, please explain how to do so: ==>',
    'Select a license from these options:',
    'Please provide a test/ for your app and explain how to run them: ==>',
    'Enter Github Username: ==>',
    'Enter emailL ==>',
    'How can people reach you with additional questions? ==>'
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
                name: 'learn',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'contrib',
            },
            {
                type: 'input',
                message: `${questions[9]}
                Academic Free License v3.0,
                Apache license 2.0,
                Artistic license 2.0,
                Boost Software License 1.0,
                BSD 2-clause "Simplified" license,
                BSD 3-clause "New" or "Revised" license,
                BSD 3-clause Clear license,
                Creative Commons license family,
                Creative Commons Zero v1.0 Universal,
                Creative Commons Attribution 4.0,
                Creative Commons Attribution Share Alike 4.0,
                Do What The F*ck You Want To Public License,
                Educational Community License v2.0,
                Eclipse Public License 1.0,
                Eclipse Public License 2.0,
                European Union Public License 1.1,
                GNU Affero General Public License v3.0,
                GNU General Public License family,
                GNU General Public License v2.0,
                GNU General Public License v3.0,
                GNU Lesser General Public License family,
                GNU Lesser General Public License v2.1,
                GNU Lesser General Public License v3.0,
                ISC,
                LaTeX Project Public License v1.3c,
                Microsoft Public License,
                MIT,
                Mozilla Public License 2.0,
                Open Software License 3.0,
                PostgreSQL License,
                SIL Open Font License 1.1,
                University of Illinois/NCSA Open Source License,
                The Unlicense,
                zLib License
                
                ==> `,
                name: 'license',
            },
            {
                type: 'input',
                message: questions[10],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[11],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[12],
                name: 'email',
            },
            {
                type: 'input',
                message: questions[13],
                name: 'questions',
            },
        ])
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        });
};

// Function call to initialize app
init();
