// Packages for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')
console.log("Connected ....")

// Array of questions for user input
const questions = [];

// Function to write README file
function writeToFile(fileName, data) { 

    fs.writeFile(fileName, data, ()=>{console.log('File created')})

}

// Initialize app function
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
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your app?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your app used?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the license of your project?',
            choices: ["MIT", "GNU", "Apache", "None"]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests were ran?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Who can users contact for questions?',
        },
    ]).then(answers => {
       var readme = generateMarkdown(answers)  
       console.log("Data: ", answers);

        writeToFile("README.md", readme)
    })
    .catch(error => {
        throw error;
    })
}

// Function call to initialize app
init();
