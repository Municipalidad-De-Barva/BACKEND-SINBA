/*
Instalando ORM Sequelize para mysql
npm install --save sequelize
npm install --save mysql2
*/

import {Sequelize} from "sequelize";
import database from "../config/config";

export const sequelize = new Sequelize(
  database.DATABASE,
  database.USERNAME,
  database.PASSWORD,
  {
    host: database.HOST,
    dialect: "mysql",
  }
);
