'use strict';

const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllTitles() {
        return this.connection.query(
        `
        SELECT
            title.id,
            title.name AS Title,
            title.salary AS Salary,
            department.name AS Department
        FROM
            title
        LEFT JOIN
            department ON title.department_id = department.id
        ORDER BY
            title.id;
        `
        );
    }
};