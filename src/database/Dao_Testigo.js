import dbConnection from "../config/dbConnection";
import dao from "./Dao";
const {appConfig} = require('../config/config')




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




    insertar_Testigo(PK_ID, Nombre_Completo,Telefono,firma,callback) {
console.log("Firma"+firma);

  insertar_Testigo(
    PK_ID,
    Nombre,
    Apellido1,
    Apellido2,
    Telefono,
    Correo,
    callback
  ) {

    this.obtener_Testigo(PK_ID, function (result) {
      console.log(result);

      if (Object.entries(result).length === 0) {
        const connection = dbConnection();
      
        var sql = "INSERT INTO testigo SET ?";

        connection.query(
          sql,
          {
            PK_ID,
            Nombre_Completo,
            Telefono,
            firma,
            Nombre,
            Apellido1,
            Apellido2,
            Telefono,
            Correo,

          },
          function (err, results) {
            if (err) {
              throw err;
            }

            return callback("Se ingreso un nuevo Testigo");
          }
        );
      } else {
        return callback("Se encuentra registrado el testigo");
      }
    });
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
}
