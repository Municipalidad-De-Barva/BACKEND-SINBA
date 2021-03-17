import dbConnection from "../config/dbConnection";

export default class Dao {
  constructor() {
    this.connection = dbConnection();
  }

  conectar() {
    console.log("Conectando a la base de datos");
    this.connection.connect();
  }

  desconectar() {
    console.log("Desconectando a la base de datos");
    this.connection.end();
  }
}
