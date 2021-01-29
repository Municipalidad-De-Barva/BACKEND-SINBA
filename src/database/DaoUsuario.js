const dbConnection = require("../config/dbConnection");
class DaoUsuario {
  constructor() {
    this.connection = dbConnection();
    this.usuario = new Array();
  }

  //Metodo para obtener al usuario por medio del ID, se usa para consultar primero si existe dicho registro
  //para no agregarlo dos veces y evitar el error de choque por la llave primaria.

  obtener_Usuario(PK_ID, callback) {
    var sql = "SELECT* FROM usuario WHERE PK_ID = ?";

    this.connection.query(sql, [PK_ID], function (err, results) {
      if (err) {
        throw err;
      }
      var mostrarMensaje;
      //Retorna un mensaje, dando permiso de insertar o no el usuario.
      if (results.length === 0) {
        mostrarMensaje = "No se encuentra registrado...";
      } else {
        mostrarMensaje = "Si se encuentra registrado...";
      }
      return callback(mostrarMensaje);
    });
  }

  listar_Usuarios(callback) {
    var sql = "SELECT * FROM usuario";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }

  insertar_Usuarios(PK_ID, Tipo, callback) {
    this.obtener_Usuario(PK_ID, function (result) {
      console.log(result);

      if (result === "No se encuentra registrado...") {
        const connection = dbConnection();
        var sql = "INSERT INTO usuario SET ?";

        connection.query(
          sql,
          {
            PK_ID,
            Tipo,
          },
          function (err, results) {
            if (err) {
              throw err;
            }

            return callback("Se ingreso nuevo usuario");
          }
        );
      } else {
        return callback("Se encuentra registrado");
      }
    });
  }
}

module.exports = DaoUsuario;
