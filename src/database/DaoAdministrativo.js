import dbConnection from "../config/dbConnection";
import daoUsuario from "./DaoUsuario";
import dao from "./Dao";
export default class DaoAdministrativo extends dao {
  constructor() {
    super();
    this.administrativo = new Array();
    this.DaoUsu = new daoUsuario();
  }

  obtener_Administrativo_Clave(PK_ID, Clave, callback) {
    var sql = "SELECT* FROM administrativo WHERE PK_ID = ? and Clave = ?";

    this.connection.query(sql, [PK_ID, Clave], function (err, results) {
      if (err) {
        throw err;
      }

      return callback(results);
    });
  }

  obtener_Administrativo(PK_ID, callback) {
    var sql = "SELECT* FROM administrativo WHERE PK_ID = ? ";

    this.connection.query(sql, [PK_ID], function (err, results) {
      if (err) {
        throw err;
      }
      return callback(results);
    });
  }

  insertar_Administrativo(
    PK_ID,
    Tipo,
    Nombre,
    FK_Rol,
    Correo,
    Clave,
    Tipo_Identificacion,
    callback
  ) {
    console.warn("Entrando al metodo insertar admin a la db ");
    this.obtener_Administrativo(PK_ID, function (result) {
      const DaoUsu = new daoUsuario();
      DaoUsu.insertar_Usuarios(PK_ID, Tipo, function (result) {
        const connection = dbConnection();
        var sql = "INSERT INTO administrativo SET ?";

        connection.query(
          sql,
          {
            PK_ID,
            Nombre,
            FK_Rol,
            Correo,
            Clave,
            Tipo_Identificacion,
          },
          function (err, results) {
            if (err) {
              throw err;
            }
            var mostrarMensaje = "Se realizó con exito...";
            return callback(mostrarMensaje);
          }
        );
      });
    });
  }
}
