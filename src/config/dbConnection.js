const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql2019',
    database: 'inspecciones_barva'
  });
}
