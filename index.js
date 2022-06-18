const mysql2 = require('mysql2')
const inquirer = require('inquirer')
require("console.table")

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Phoebe0821!",
    database: "fourseasons_db",
});

db.connect(() => {
    console.log("You are now connected to the database")
})

function startPrompt () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Welcome to the Four Seasons!',
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a new Department',
                'Add a new Role',
                'Add a new Employee',
                'Update an Employee Role'
            ]
        }
    ])
        .then(function (response) {
            switch (response) {
                case 'View all Departments':
                    viewAllDepartments();
                    break;
                case 'View all Roles':
                    viewAllRoles();
                    break;
                case 'View all Employees':
                    viewAllEmployees();
                    break;
                case 'Add a new Department':
                    newDepartment();
                    break;
                case 'Add a new Role':
                    newRole();
                    break;
                case 'Add a new Employee':
                    newEmployee();
                    break;
                case 'Update an Employee Role':
                    updateEmployeeRole();
                    break;
            }
        })
}