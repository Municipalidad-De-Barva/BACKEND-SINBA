const dbConnection = require("../config/dbConnection");
const daoUsuario = require("./DaoUsuario");

class DaoAdministrativo {
  constructor() {
    this.connection = dbConnection();
    this.administrativo = new Array();
    this.DaoUsu = new daoUsuario();
  }

  obtener_Administrativo_Clave(PK_ID, Clave, callback) {
    var sql = "SELECT* FROM administrativo WHERE PK_ID = ? and Clave = ?";

    this.connection.query(sql, [PK_ID, Clave], function (err, results) {
      if (err) {
        throw err;
      }
      var mostrarMensaje;
      if (results.length === 0) {
        mostrarMensaje = "No se encuentra registrado...";
      } else {
        mostrarMensaje = "Si se encuentra registrado...";
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
      var mostrarMensaje;
      if (results.length === 0) {
        mostrarMensaje = "No se encuentra registrado...";
      } else {
        mostrarMensaje = "Si se encuentra registrado...";
      }
      return callback(mostrarMensaje);
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
    this.obtener_Administrativo(PK_ID, function (result) {
      if (result === "No se encuentra registrado...") {
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
      } else {
        return callback("Se encuentra registrado");
      }
    });
  }
}

module.exports = DaoAdministrativo;
