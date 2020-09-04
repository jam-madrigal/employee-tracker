'use strict';

const inquirer = require('inquirer');
const connection = require('./db/connection');
const mysql = require('mysql');
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

async function viewAllEmployees() {

    const employs = await db.viewAllEmployees();

    console.log('/n');
    console.table(employs);

    mainPrompt();
};



// The function to add a new role
async function addNewRole() { 
    inquirer.prompt(prompts.newRolePrompt).then((response) => {
        // Store the responses in a variable then add them to the db as a new role
        connection.query(
        `
        INSERT INTO role
            (title, salary, department_id)
        VALUES
            ('${response.newRoleTitle}', ${response.newRoleSalary}, ${response.newRoleID});
        `
        );

        console.log("New role added successfully.")  

        return mainPrompt();
    });

};

// A switch function that chooses what to do next based on inquirer selections, all functions will then update or display the db as indicated and then call back the mainPrompt()
function mainPrompt() {
    inquirer   
        .prompt(prompts.mainPrompt)
    .then((answer) => {
        switch (answer.choice) {
            case "View all roles":
            viewAllRoles()
            break;
        
            case "View all departments":
            viewAllDept();
            break;
    
            case "View all employees":
            viewAllEmployees();
            break;

            case "Add department":
            console.log("add department function happens")
            break;

            case "Add role":
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