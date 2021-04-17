const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateMarkdown = require('./src/generateMarkdown');

const employees = [];
const managerQuest = [
    {
        type: 'input',
        message: `What is your name?`,
        name: 'name',
    },
    {
        type: 'input',
        message: `What is your employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is your email address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is your office number?`,
        name: 'officeNumber',
    }
];
const engineerQuest = [
    {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'name',
    },
    {
        type: 'input',
        message: `What is the engineer's employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the engineer's email?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the engineer's Github username?`,
        name: 'github',
    }
];
const internQuest = [
    {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'name',
    },
    {
        type: 'input',
        message: `What is the intern's employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the intern's email?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the name of the intern's school?`,
        name: 'school',
    }
]

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: `What team member would you like to add?`,
            name: 'teamMember',
            choices: ['Engineer','Intern',`I'm done adding team members.`]
        }
    ])
    .then(function(data) {
        switch(data.teamMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                generateFile();
                break;
        }
    })
}

function engineerQuestions() {
    inquirer
    .prompt(engineerQuest)
    .then(ans => {
        let engineer = new Engineer(ans.name,ans.id,ans.email,ans.github);
        employees.push(engineer);
        
        addTeamMember();
    })
    .catch((err) => console.error(err))
}

function internQuestions() {
    inquirer
    .prompt(internQuest)
    .then(ans => {
        let intern = new Intern(ans.name,ans.id,ans.email,ans.school);
        employees.push(intern);
        
        addTeamMember();
    })
    .catch((err) => console.error(err))
}

function init() {
    inquirer
    .prompt(managerQuest)
    .then(ans => {
        const manager = new Manager(ans.name,ans.id,ans.email,ans.officeNumber);
        employees.push(manager);

        addTeamMember();
    })
    .catch((err) => console.error(err))
}

function generateFile() {
    generateMarkdown(employees);
}

// .then((content) => writeToFile('index.html',content))

init();