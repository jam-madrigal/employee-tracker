'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');

// The function that displays all the employee titles (roles)
async function viewAllRoles() {

    const titles = await db.viewAllRoles();

    console.log('/n');
    console.table(titles);

    mainPrompt();
};

// The function to view all departments
async function viewAllDept() {

    const depts = await db.viewAllDept();

    console.log('/n');
    console.table(depts);

    mainPrompt();
};



// The function to add a new role
async function addNewRole() {
    inquirer.prompt(prompts.newRolePrompt).then((response) => {
        // this code will add new stuff to the db
        mainPrompt();
    })
};

// A switch function that chooses what to do next based on inquirer selections, all functions will then update or display the db as indicated and then call back the mainPrompt()
function mainPrompt() {
    inquirer   
        .prompt(prompts.mainPrompt)
    .then((answer) => {
        switch (answer.choice) {
            case "View all employees":
            viewAllRoles()
            break;
        
            case "View all departments":
            console.log("view employees by department function happens")
            viewAllDept();
            break;
    
            case "View all employees by role":
            console.log("view employees by role function happens")
            break;

            case "Add department":
            console.log("add department function happens")
            break;

            case "Add role":
            console.log("add role function happens")
            addNewRole();
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

mainPrompt();