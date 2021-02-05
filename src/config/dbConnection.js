import config from "../config/config";
import mysql from "mysql";
module.exports = () => {
  return mysql.createConnection({
    host: config.HOST,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE,
  });
};

export default mysql;
