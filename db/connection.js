'use strict';

const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'programmingsocks',
    database: 'employee_db'
});

connection.connect();

module.exports = connection;