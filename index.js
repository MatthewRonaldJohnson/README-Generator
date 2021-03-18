// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your projects title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a short description for your project',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'Enter any installation instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Enter the usage information',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Enter the testing instructions',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'Select a license for this project',
        name: 'license',
        choices: ['Public Domain', 'Permissive', 'LGPL', 'CopyLeft', 'Proprietary']
    },
    {
        type: 'input',
        message: 'Enter your Github Username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email'
    },

];

// TODO: Create a function to write README file
function writeToFile(content) {
    fs.writeFile('./Output/README.md', content, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function generateContent({title, desc, install, usageInfo, contribute, testing, license, github, email}){
     return content = `
        # ${title}

        ## Description

        ${desc}
        
        ## Installation Instructions

        ${install}

        ## Usage Information

        ${usageInfo}

        ## Contribution Guidelines

        ${contribute}

        ## Testing Instructions

        ${testing}

        ## License

        ${license}

        ## Questions

        Contact me via my github profile, ${github}, or email, ${email}
     `
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const content = generateContent(data);
            writeToFile(content);
        })
}

// Function call to initialize app
init();
