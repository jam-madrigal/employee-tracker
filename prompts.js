const inquirer = require('inquirer');
module.exports = {
    mainPrompt: [{
    type: "list",
    message: `What would you like to do?`,
    name: "choice",
    choices: 
    [
    "View all employees",
    "View all employees by department",
    "View all employees by role",
    "Add department",
    "Add role",
    "Add employee",
    "Update employee role",
    "Quit"
    ]
}]

};