const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer") 
const Manager = require("./lib/Manager") 
const Intern = require("./lib/Intern") 

    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Mangers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the managers ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Provide instructions and examples for use.',
    }
]).then((ManagerInfo) => {
    
}
];
 
// Function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
                return console.log(err);
            } else {
            console.log("Success! Your README.md file has been created.")
        }
    });
}
// TODO: Create a function to initialize app

function generateHtml() {
    fs.writeFile


// Function call to initialize app
init();

