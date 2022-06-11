const mysql2 = require('mysql2')
const inquirer = require('inquirer')
require("console.table")

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Phoebe0821!",
    database: "employee_db",
});

db.connect(() => {
    console.log("You are now connected to the database")
    selectPrompt()
})