import {boolean} from "@hapi/joi";
import dbConnection from "../config/dbConnection";
import dao from "./Dao";
const util = require("util");

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

  async insertar_Testigo2(PK_ID, Telefono, Correo) {
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query("INSERT INTO testigo SET ?", {
      PK_ID,
      Telefono,
      Correo,
    });
  }

  insertar_Testigo(PK_ID, Telefono, Correo, firma, callback) {
    const connection = dbConnection();
    var sql = "INSERT INTO testigo SET ?";

    connection.query(
      sql,
      {
        PK_ID,
        Telefono,
        Correo,
        firma,
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

  async listar_Testigos2() {
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query("SELECT * FROM testigo");
    return rows;
  }

  async verificar_Existencia(PK_ID) {
    var resultado = false;

    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query("SELECT* FROM testigo WHERE PK_ID = ?", [PK_ID]);

    if (rows.length === 0) {
      resultado = false;
    } else {
      resultado = true;
    }

    return resultado;
  }

  async obtener_Testigo2(PK_ID) {
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query("SELECT* FROM testigo WHERE PK_ID = ?", [PK_ID]);

    return rows;
  }
}
