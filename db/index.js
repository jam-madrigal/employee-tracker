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
            role.id,
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
};

module.exports = new DB(connection);

