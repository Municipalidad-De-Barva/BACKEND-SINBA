import {config} from "dotenv";
config();

export default {
  SECRETKEY: process.env.SECRETKEY || "my-secretkey-Sinb@",
  PORTBACKEND: process.env.PORTBACKEND || 3001,
  PORTFRONTEND: process.env.PORTFRONTEND || 3000,

  USERNAME_DB: process.env.USERNAME_DB || "root",
  PASSWORD_DB: process.env.PASSWORD_DB || "root",
  DATABASE_DB: process.env.DATABASE_DB || "inspecciones_barva",
  HOST_DB: process.env.HOST_DB || "localhost",
};
/*
 * Este archivo contiene configuraciones sobre el proyecto, como claves, puertos, etc
 */
