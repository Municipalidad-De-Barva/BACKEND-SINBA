import config from "../config/config";
import mysql from "mysql";
module.exports = () => {
  return mysql.createConnection({
    host: config.HOST_DB,
    user: config.USERNAME_DB,
    password: config.PASSWORD_DB,
    database: config.DATABASE_DB,
  });
};

export default mysql;
