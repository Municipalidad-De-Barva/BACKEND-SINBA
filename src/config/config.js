import {config} from "dotenv";
config();

export default {
  /*PORTS*/
  PORTBACKEND: process.env.PORTBACKEND || 3001,
  PORTFRONTEND: process.env.PORTFRONTEND || 3000,

  /*DATABASE*/
  USERNAME_DB: process.env.USERNAME_DB || "root",
  PASSWORD_DB: process.env.PASSWORD_DB || "root",
  DATABASE_DB: process.env.DATABASE_DB || "inspecciones_barva",
  HOST_DB: process.env.HOST_DB || "localhost",

  /*JsonWebToken*/
  SECRETKEY: process.env.SECRETKEY || "my-secretkey-Sinb@",
  TIME: 60 * 5,
};
/*
 * Este archivo contiene configuraciones sobre el proyecto, como claves, puertos, etc
 */
