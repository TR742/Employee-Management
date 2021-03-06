const mysql2 = require('mysql2')
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Phoebe0821!",
    database: "fourseasons_db",
});

db.connect(() => {
    console.log('You are now connected to the database!')
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
                'Update an Employee Role',
                'Exit'
            ]
        }
    ])
        .then(function (response) {
            switch (response.home) {
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
                case 'Exit': db.end();
                    break;
            }
        })
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw (err);
        console.table(res);
        startPrompt();
    });
};

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    }
    );
};

function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, res) {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
};

function newDepartment() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'department_name',
            message: 'What is the Department name?',
        }
    )
        .then(function (response) {
            console.log(response.department);
            db.query("INSERT INTO department SET ?",
                {
                    department_name: response.department_name,
                },
                function (err, res) {
                    if (err) throw err;
                    startPrompt();
                });
        });
};

function newEmployee() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the Employees first name?',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the Employees last name?',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the Employees role ID?',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the Employees manager ID?',
        }
    )
        .then(function (response) {
            db.query("INSERT INTO employee SET ?",
                {
                    first_name: response.first_name,
                    last_name: response.last_name,
                    role_id: response.role_id,
                    manager_id: response.manager_id,
                },
                function (err, res) {
                    if (err) throw err;
                    startPrompt();
                });
        });
};

startPrompt();