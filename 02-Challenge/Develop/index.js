// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

console.log("Connected ....")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let datafile = generateMarkdown(data); 

}

// TODO: Create a function to initialize app
function init() {
    console.log("Starting app");
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the license of your project?',
            choices: ["MIT", "GNU", "Apache", "None"]
        },
    ]).then(answers => {
        console.log("Data: ", answers);
    })
    .catch(error => {
        throw error;
    })
}

// Function call to initialize app
init();
