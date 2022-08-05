// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'What is your projects title?',
    'Please provide a description by answering the following questions.',
    [
        'What was your motivation?', 
        'Why did you build this project?', 
        'What problem does it solve?', 
        'What did you learn?',
        'What makes your project stand out?'
    ],
    'Please list out the installation instructions needed for your project.',
    'Please provide instructions and an example for use.',
    `Please list anyone you'd like to list as a collaborater in the credits section.`,
    `Please select any licenses your application is covered under.`,
    `Please provide your GitHub username to add a link to your GitHub account.`,
    `Please provide your email address so you may be reached for any additional questions.`,
    `Please enter instructions on how you'd like to be contacted.`
];
const licenses = [
    'GNU AFFERO GENERAL PUBLIC LICENSE',
    'GNU GENERAL PUBLIC LICENSE',
    'GNU LESSER GENERAL PUBLIC LICENSE',
    'Mozilla Public License',
    'Apache License',
    'MIT License',
    'Boost Software License',
    'The Unlicense'
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./Develop/product/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README Created'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            // Project Title
            {
                type: 'input',
                name: 'title',
                message: questions[0],
                validate: projectTitleInput => {
                    if(projectTitleInput) {
                        return true;
                    } else {
                        console.log('Please enter a title for your project!');
                        return false;
                    }
                }
            },
            // Project Description
            {
                type: 'confirm',
                name: 'description',
                message: questions[1]
            },
            // Project Description Questions
            {
                type: 'input',
                name: 'descriptionQuestion1',
                message: questions[2][0]
            },
            {
                type: 'input',
                name: 'descriptionQuestion2',
                message: questions[2][1]
            },
            {
                type: 'input',
                name: 'descriptionQuestion3',
                message: questions[2][2]
            },
            {
                type: 'input',
                name: 'descriptionQuestion4',
                message: questions[2][3]
            },
            {
                type: 'input',
                name: 'descriptionQuestion5',
                message: questions[2][4]
            },
            // Installation
            {
                type: 'input',
                name: 'installation',
                message: questions[3]
            },
            // Usage
            {
                type: 'input',
                name: 'usage',
                message: questions[4]
            },
            // Credits
            {
                type: 'input',
                name: 'credits',
                message: questions[5]
            },
            // License
            {
                type: 'checkbox',
                name: 'license',
                message: questions[6],
                choices: [
                    licenses[0],
                    licenses[1],
                    licenses[2],
                    licenses[3],
                    licenses[4],
                    licenses[5],
                    licenses[6],
                    licenses[7]
                ]
            },
            // GitHub Username
            {
                type: 'input',
                name: 'github',
                message: questions[7]
            },
            // Email Address
            {
                type: 'input',
                name: 'email',
                message: questions[8]
            },
            // Questions
            {
                type: 'input',
                name: 'questions',
                message: questions[9]
            }
        ])
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        .then(readme => {
            return writeToFile(readme);
        })
}

// Function call to initialize app
init();
