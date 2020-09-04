'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');

async function viewAllTitles() {

    // const titles = await db.viewAllTitles();

    // console.log('/n');
    // console.table(titles);

    mainPrompt();
};





function mainPrompt() {
    inquirer   
        .prompt(prompts.mainPrompt)
    .then((answer) => {
        switch (answer.choice) {
            case "View all employees":
            console.log("view employees function goes here")
            viewAllTitles()
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

mainPrompt();