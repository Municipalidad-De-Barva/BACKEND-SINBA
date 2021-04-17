import dbConnection from "../config/dbConnection";
import dao from "./Dao";
const {appConfig} = require("../config/config");

export default class Dao_Testigo extends dao {
  constructor() {
    super();
    this.usuario = new Array();
  }

  obtener_Testigo(PK_ID, callback) {
    var sql = "SELECT* FROM testigo WHERE PK_ID = ?";

    this.connection.query(sql, [PK_ID], function (err, results) {
      if (err) {
        throw err;
      }
      return callback(results);
    });
  }

  obtener_url_firma_testigo(PK_ID, callback) {
    var sql = "SELECT firma FROM testigo WHERE PK_ID = ?";

    this.connection.query(sql, [PK_ID], function (err, results) {
      if (err) {
        throw err;
      }
      return callback(results);
    });
  }

  verificar_Existencia_Testigo(PK_ID, callback) {
    var sql = "SELECT* FROM testigo WHERE PK_ID = ?";

    this.connection.query(sql, [PK_ID], function (err, results) {
      if (err) {
        throw err;
      }
      let mostrarMensaje = "Si existe testigo";
      return callback(mostrarMensaje);
    });
  }

  insertar_Testigo(PK_ID, Nombre_Completo, Telefono, Correo, callback) {
    const connection = dbConnection();
    var sql = "INSERT INTO testigo SET ?";

    connection.query(
      sql,
      {
        PK_ID,
        Nombre_Completo,
        Telefono,
        Correo,
      },
      function (err, results) {
        if (err) {
          throw err;
        }

        return callback("Se ingreso nuevo testigo");
      }
    );
  }

  listar_Testigos(callback) {
    var sql = "SELECT * FROM testigo";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }
}
