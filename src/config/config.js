import {config} from "dotenv";
config();

export default {
  SECRETKEY: process.env.SECRETKEY || "my-secretkey-Sinb@",
  PORT: process.env.PORT || 3001,
  PORTFRONTEND: process.env.PORTFRONTEND || 3000,

  USERNAME: process.env.USERNAME_DB || "root",
  PASSWORD: process.env.PASSWORD_DB || "root",
  DATABASE: process.env.DATABASE_DB || "inspecciones_barva",
  HOST: process.env.HOST_DB || "localhost",
};
/*
 * Este archivo contiene configuraciones sobre el proyecto, como claves, puertos, etc
 */
