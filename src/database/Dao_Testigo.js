import dbConnection from "../config/dbConnection";
import dao from "./Dao";


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



    insertar_Testigo(PK_ID, Nombre_Completo,Telefono,Correo,callback) {

    this.obtener_Usuario(PK_ID, function (result) {
      console.log(result);

      if (Object.entries(result).length === 0) {
        const connection = dbConnection();
        var sql = "INSERT INTO testigo SET ?";

        connection.query(
          sql,
          {
            PK_ID,
            Nombre_Completo,
            Telefono
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