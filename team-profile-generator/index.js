const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('.lib/employee.js');
const Manager = require('.lib/manager.js');
const Engineer = require('.lib/engineer.js');
const Intern = require('.lib/intern.js');

let theManager;
let employeeArr = [];
let engineerArr = [];
let internArr = [];


inquirer.prompt([
    {
        type: 'input',
        name: 'manager_name',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'manager_id',
         message: 'What is the id number of the manager?'
    },
    {
        type: 'input',
        name: 'manager_email',
        message: 'What is the email address of the manager?'
    },
    {
        type: 'input',
        name: 'manager_office',
        message: 'What is the office number of the manager?'
    },
    {
        type: 'list',
        name: 'main_menu',
        message: 'Would you like to add another employee?',
        choices: [
            {
                name: 'Add employee',
            },
            {
                name: 'Add engineer',
            },
            {
                name: 'Add intern',
            },
            {
                name: 'No, thank you. Everyone has been added.',
            }
        ]
    }
]).then(answers => {
    theManager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answer.manager_office, "Manager");
    if (answers.main_menu == "Add employee") {add_employee()};
    if (answers.main_menu == "Add engineer") {add_engineer()};
    if (answers.main_menu == "Add intern") {add_intern()};
    if (answers.main_menu == "No, thank you. Everyone has been added.") {done(answers)()};
    })
    var add_employee = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'employee_name',
                message: 'What is the name of the employee?'
            },
            {
                type: 'input',
                name: 'employee_id',
                message: 'What is the id number of the employee?'
            },
            {
                type: 'input',
                name: 'employee_email',
                message: 'What is the email address of the employee?'
            },
            {
                type: 'list',
                name: 'main_menu',
                message: 'Would you like to add another employee?',
                choices: [
                    {
                        name: 'Add employee',
                    },
                    {
                        name: 'Add engineer',
                    },
                    {
                        name: 'Add intern',
                    },
                    {
                        name: 'No, thank you. Everyone has been added.',
                    }
                ]
            }
        ]).then(answers => {
            newEmployee = new Employee(answers.employee_name, answers.employee_id, answers.employee_email, "Employee");
            if (answers.main_menu == "Add employee") {add_employee()};
            if (answers.main_menu == "Add engineer") {add_engineer()};
            if (answers.main_menu == "Add intern") {add_intern()};
            if (answers.main_menu == "No, thank you. Everyone has been added.") {done(answers)()};
        })
    }
    var add_engineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineer_name',
                message: 'What is the name of the engineer?'
            },
            {
                type: 'input',
                name: 'engineer_id',
                message: 'What is the id number of the engineer?'
            },
            {
                type: 'input',
                name: 'engineer_email',
                message: 'What is the email address of the engineer?'
            },
            {
                type: 'input',
                name: 'engineer_email',
                message: 'What is the Github username of the engineer?'
            },
            {
                type: 'list',
                name: 'main_menu',
                message: 'Would you like to add another employee?',
                choices: [
                    {
                        name: 'Add employee',
                    },
                    {
                        name: 'Add engineer',
                    },
                    {
                        name: 'Add intern',
                    },
                    {
                        name: 'No, thank you. Everyone has been added.',
                    }
                ]
            }
        ]).then(answers => {
            newEngineer = new Engineer(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github, "Engineer");
            if (answers.main_menu == "Add employee") {add_employee()};
            if (answers.main_menu == "Add engineer") {add_engineer()};
            if (answers.main_menu == "Add intern") {add_intern()};
            if (answers.main_menu == "No, thank you. Everyone has been added.") {done(answers)()};
        })
    }
    var add_intern = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'intern_name',
                message: 'What is the name of the intern?'
            },
            {
                type: 'input',
                name: 'intern_id',
                message: 'What is the id number of the intern?'
            },
            {
                type: 'input',
                name: 'intern_email',
                message: 'What is the email address of the intern?'
            },
            {
                type: 'input',
                name: 'intern_school',
                message: 'Which school does the intern attend?'
            },
            {
                type: 'list',
                name: 'main_menu',
                message: 'Would you like to add another employee?',
                choices: [
                    {
                        name: 'Add employee',
                    },
                    {
                        name: 'Add engineer',
                    },
                    {
                        name: 'Add intern',
                    },
                    {
                        name: 'No, thank you. Everyone has been added.',
                    }
                ]
            }
        ]).then(answers => {
            newIntern = new Intern(answers.intern_name, answers.intern_id, answers.intern_email, answers.intern_school, "Intern");
            if (answers.main_menu == "Add employee") {add_employee()};
            if (answers.main_menu == "Add engineer") {add_engineer()};
            if (answers.main_menu == "Add intern") {add_intern()};
            if (answers.main_menu == "No, thank you. Everyone has been added.") {done(answers)()};
        })
    }

var done = (answers) => {
    const generatePage =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>My Awesome Team</title>
    </head>
    <body>
        <header>
             <div class = "container-fluid">
                 <h1>Team Builder v1.0.0</h1>
             </div>
         </header>
         <div class ="container">
            <div class ="row">
                 <div class ="col-sm">
                    <h2>${theManager.name}</h2>
                 </div>
                 <ul>
                     <li><h3>${theManager.id}</h3><li>
                     <li><h3>${theManager.role}</h3><li>
                     <li><h3>${theManager.office}</h3><li>
                     <li><h3>${theManager.email}</h3><li>
                 </ul>
            </div>
        </div>
        <div class ="container">
            <div class ="row">
                 <div class ="col-sm">
                    <h2>${employeeArr[0].name}</h2>
                 </div>
                 <ul>
                     <li><h3>${employeeArr[0].id}</h3><li>
                     <li><h3>${employeeArr[0].role}</h3><li>
                     <li><h3>${employeeArr[0].email}</h3><li>
                 </ul>
            </div>
        </div>
        <div class ="container">
            <div class ="row">
                 <div class ="col-sm">
                    <h2>${engineerArr[0].name}</h2>
                 </div>
                 <ul>
                     <li><h3>${engineerArr[0].id}</h3><li>
                     <li><h3>${engineerArr[0].role}</h3><li>
                     <li><h3>${engineerArr[0].github}</h3><li>
                     <li><h3>${engineerArr[0].email}</h3><li>
                 </ul>
            </div>
        </div>
        <div class ="container">
            <div class ="row">
                 <div class ="col-sm">
                    <h2>${internArr[0].name}</h2>
                 </div>
                 <ul>
                     <li><h3>${internArr[0].id}</h3><li>
                     <li><h3>${internArr[0].role}</h3><li>
                     <li><h3>${internrArr[0].school}</h3><li>
                     <li><h3>${internArr[0].email}</h3><li>
                 </ul>
            </div>
        </div>
 
    </body>
    </html>
    `
    generateFile(generatePage);
}

var generateFile = (generatePage) => {
    fs.writeFile(".myteam.html", generatePage, function (err) {
        if (err) throw err;
    })
}