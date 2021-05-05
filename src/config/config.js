import {config} from "dotenv";
config();

export default {
  /*PORTS*/
  PORTBACKEND: 3001,
  PORTFRONTEND: 3000,
  APP_HOST: "http://localhost",

  /*DATABASE*/
  USERNAME_DB: "root",
  PASSWORD_DB: "root",
  DATABASE_DB: "inspecciones_barva",
  HOST_DB: "localhost",

  /*JsonWebToken*/
  SECRETKEY: process.env.SECRETKEY || "my-secretkey-Sinb@",
  TIME: 60 * 5,

  /*Multer */
  RUTA_PUBLICA_IMAGENES: "../public",
  RUTA_INSPECCION_NUEVA: "../public/inspeccionNueva",
  RUTA_FIRMA_TESTIGO: "../public/firmaTestigo",
};
/*
 * Este archivo contiene configuraciones sobre el proyecto, como claves, puertos, etc
 */
