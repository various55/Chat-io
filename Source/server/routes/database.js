const mysql = require('mysql2')
const config = require('../env');


module.exports = mysql.createConnection({
        host: config.DATABASE_HOST,
        user: config.DATABASE_USER,
        port: config.DATABASE_PORT,
        password: config.DATABASE_PASSWORD,
        database: config.DATABASE_NAME
});
