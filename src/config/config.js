import {config} from "dotenv";
config();

export default {
  /*PORTS*/
  PORTBACKEND: 3001,
  PORTFRONTEND: 3000,
  APP_HOST: "http://localhost",

  /*DATABASE*/
  USERNAME_DB: "root",
  PASSWORD_DB: "password",
  DATABASE_DB: "inspecciones_barva",
  HOST_DB: "localhost",

  /*JsonWebToken*/
  SECRETKEY: process.env.SECRETKEY || "my-secretkey-Sinb@",
  TIME: 60 * 5,
};
/*
 * Este archivo contiene configuraciones sobre el proyecto, como claves, puertos, etc
 */
