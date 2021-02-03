import {config} from "dotenv";
config();

export default {
  SECRETKEY: process.env.SECRETKEY || "my-secretkey-Sinb@",
  PORT: process.env.PORT || 3001,
  PORTFRONTEND: process.env.PORTFRONTEND || 3000,
};
/*
 * Este archivo contiene configuraciones sobre el proyecto, como claves, puertos, etc
 */
