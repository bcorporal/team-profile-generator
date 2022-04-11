const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


// questions for generating readme
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of you project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are some key features?',
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What language(s) are used in this app?',
        choices: ['HTML', 'Javascript', 'Python', 'C', 'Java'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'checkbox',
        message: 'Chose a license for your product.',
        name: 'license',
        choices: ['MIT', 'GNU', 'None'],
    },
    {
        type: 'input',
        message: 'Test Instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your github profile username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
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

function init() {
    inquirer.prompt(questions)
    .then((data) => {
    console.log("---Generating---README---File---");
    
    const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;
    
    writeToFile("./utils/README.md", generateMarkdown({ ...data }));
    })
}

// Function call to initialize app
init();

