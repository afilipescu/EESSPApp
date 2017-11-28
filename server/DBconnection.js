'use strict';

var mysql = require('promise-mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'eessp'
});

module.exports = pool;
