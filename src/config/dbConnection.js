import mysql from "mysql";
module.exports = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "inspecciones_barva",
  });
};

export default mysql;
