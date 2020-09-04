const inquirer = require('inquirer');
module.exports = {
// The main prompt that will always display first, then be called back after a selection is made and a coindicing function is called
    mainPrompt: [{
    type: "list",
    message: `What would you like to do?`,
    name: "choice",
    choices: 
    [
    "View all roles",
    "View all departments",
    "View all employees",
    "Add department",
    "Add role",
    "Add employee",
    "Update employee role",
    "Quit"
    ]
}],

// The prompt for when the user chooses to add a new role
newRolePrompt: [
    {
    type: "input",
    message: `Input a new role title.`,
    name: "newRoleTitle",
    }, 
    {
        type: "input",
        message: `Input the salary of the new role.`,
        name: "newRoleSalary",
    },
    {
        type: "input",
        message: `Input the department ID of the new role.`,
        name: "newRoleID",
    }
]

};