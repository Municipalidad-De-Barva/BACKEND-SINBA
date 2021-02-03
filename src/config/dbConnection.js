import {config} from "dotenv";
config();
import mysql from "mysql";
module.exports = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD_DB || "root",
    database: "inspecciones_barva",
  });
};

export default mysql;
