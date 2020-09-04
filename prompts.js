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
],

// Prompts for adding a new department
newDeptPrompt:
    {
    type: "input",
    message: `Input a new department name.`,
    name: "newDeptName",
    },

// Prompt for adding new employees
newEmployeePrompt: [
    {
    type: "input",
    message: `Input the employee's first name.`,
    name: "employeeName",
    }, 
    {
    type: "input",
    message: `Input the employee's last name.`,
    name: "employeeLastName",
    }, 
    {
    type: "input",
    message: `Input the role ID of the employee.`,
    name: "employeeRoleID",
    },
    {
    type: "input",
    message: `Input the ID of the employee's manager.`,
    name: "employeeManagerID",
    }
    ],

// Prompt to update employees
    updateRolePrompt: [
        {
        type: "input",
        message: `Input the employee's ID whose role ID you wish to edit.`,
        name: "chosenID",
        }, 
        {
        type: "input",
        message: `Input the employee's new role ID.`,
        name: "updatedRoleID",
        }, 
        ],



};