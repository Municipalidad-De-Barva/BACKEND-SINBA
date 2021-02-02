import {config} from "dotenv";
config();

export default {
  secret:
    "r83pwQCh!^w@FGWlIXFA&DV#lY#k&V#t!Vr71my-secretkey-Sinb@/*eAck2NkxvuduwW8dw3H#gBpyaA7iTSVtn5k53&Jsz##MIJl0hCQ7#lUk8a7#x",
  port: process.env.PORT || 3001,
  portFrontEnd: process.env.PORTFRONTEND || 3000,
};
/*
 * Este archivo contiene configuraciones sobre el proyecto, como claves, puertos, etc
 */
