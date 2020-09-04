'use strict';

const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllRoles() {
        return this.connection.query(
        `
        SELECT
            role.id AS ID,
            role.title AS Role,
            role.salary AS Salary,
            department.name AS Department
        FROM
            role
        LEFT JOIN
            department ON role.department_id = department.id
        ORDER BY
            role.id;
        `
        );
        
    }
    
    // The function that fetches the data to view all departments
    viewAllDept() {
        return this.connection.query(
        `
        SELECT 
            department.id AS ID, 
            department.name AS Name 
        FROM 
            department;
        `
        );
        
    }
};

module.exports = new DB(connection);

