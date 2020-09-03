const inquirer = require('inquirer');
function mainPrompt() {
    inquirer   
        .prompt({
        type: "list",
        message: `What would you like to do?`,
        name: "license",
        choices: 
        [
        "View all employees",
        "View all employees by department",
        "View all employees by role",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee role",
        ]
        })
    .then((answer) => {
        console.log("Functions coming soon.");
    });
    
};

module.exports = mainPrompt();