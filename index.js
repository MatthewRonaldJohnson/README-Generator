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
        message: 'Enter the command the user should run to test the program',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'Select a license for this project',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'BSD 3-Clause License', 'GNU GPL License v3', 'Mozilla Public License 2.0', 'None']
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
        err ? console.error(err) : console.log('Success! Your README has been stored in the Output folder')
    );
}

function generateContent({ title, desc, install, usageInfo, contribute, testing, license, github, email }, badge) {
    let licenseStatment = `This program is licensed under the ${license}.`;
    if (license = 'None'){
        licenseStatment = 'This program is not covered under any software license.'
    }

    return content = `
# ${title}

${badge}

## Table of Contents
[Description](#Description)  
[Installation Instructions](#Installation-Instructions)  
[Usage Information](#Usage-Information)  
[Contribution Guidelines](#Contribution-Guidelines)  
[Testing Instructions](#Testing-Instructions)  
[License](#License)  
[Questions](#Questions)  

## Description

${desc}
        
## Installation Instructions

${install}

## Usage Information

${usageInfo}

## Contribution Guidelines

${contribute}

## Testing Instructions

To Test this program run the following command: 

\`\`\`
${testing}
\`\`\`

## License

${licenseStatment}

## Questions

Contact me with any questions at my email: [${email}](${email}). Check out my other projects at my GitHub Profile: [${github}](https://github.com/${github}).
     `
}

function getBadge(license) {
    let badge;
    switch (license) {
        case 'MIT License':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Apache License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'BSD 3-Clause License':
            badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        case 'GNU GPL License v3':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case 'Mozilla Public License 2.0':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            break;
        case 'None':
            badge = '';
            break;
    }
    return badge;
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const badge = getBadge(data.license);
            const content = generateContent(data, badge);
            writeToFile(content);
        })
}

// Function call to initialize app
init();
