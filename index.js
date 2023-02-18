// TODO: Include packages needed for this application
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [ {

  //   inquirer
  // .prompt ([{

//   WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the READM
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of this project?',
  },
  {
    type: 'input',
    name: 'instruction',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'information',
    message: 'What is the usage information?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter the test instructions:',

  },

  {
    type: 'input',
    name: 'github',
    message: 'Enter the github username:',
    
  },

  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    
  },

  {
    type: 'list',
    name: 'license',
    message: 'Enter your licences:',
    choices: ['apache', 'bsd', 'MIT']
  },
]


// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });
        
// ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // fs.writeFile('index.html', htmlPageContent, (err) =>
    // err ? console.log(err) : console.log('Successfully created index.html!')
    // );}

    // Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
      console.log('generating read me');
      writeToFile('README.md', generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();
