const mysql = require('mysql2')

let connection;

function getConnection() {
    if(!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1212',
            database: 'riyapola'
          })
    }
    return connection;
}

module.exports = getConnection();