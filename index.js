// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = ['Enter the title', 'Enter a short description', 'Enter installtion instructions', 'Enter usage information', 'Enter contribution guidelines', 'Enter test instructions', 'Enter your Github username', 'Enter your email'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //get responses stored in data array and print to fileName
}

function getData(){
    //ask questions, loop through questions array
    //store responses in answers array (indexes of answers and questions array match up)
    const answers = []; //init answers as an array so we can use the push method
    questions.forEach(question => {
        inquirer
            .prompt([question])
            .then(response => answers.push(response))
            .catch(error => { //this section comes from the inquirer docs
                if (error.isTtyError) {
                    console.log("Prompt couldn't be rendered in the current environment")
                } else {
                    console.log('something else went wrong')
                }
            })
    })
    return answers;
}

// TODO: Create a function to initialize app
function init() {
    //create readme file
    const userInputs = getData();
    writeToFile(readme, userInputs); //should we just do writeToFile(readme, getData()) ??
}

// Function call to initialize app
init();
