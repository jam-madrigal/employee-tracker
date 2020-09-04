const inquirer = require('inquirer');
function mainPrompt() {
    inquirer   
        .prompt({
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
        })
    .then((answer) => {
        switch (answer.choice) {
            case "View all employees":
            console.log("view employees function goes here")
            break;
        
            case "View all employees by department":
            console.log("view employees by department function happens")
            break;
    
            case "View all employees by role":
            console.log("view employees by role function happens")
            break;

            case "Add department":
            console.log("add department function happens")
            break;

            case "Add role":
            console.log("add role function happens")
            break;

            case "Add employee":
            console.log("add employee function happens")
            break;

            case "Update employee role":
            console.log("update employee role function happens")
            break;

            case "Quit":
            return
            break;
        }
    });
    
};

module.exports = mainPrompt();