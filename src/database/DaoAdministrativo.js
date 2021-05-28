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
      var mostrarMensaje;
      if (results.length === 0) {
        mostrarMensaje = "No se encuentra registrado...";
      } else {
        mostrarMensaje = "Si se encuentra registrado...";
      }
      return callback(results);
    });
  }

  actualizar_contraseña_administrativo(PK_ID, Nueva_Clave, callback) {
    var sql = "UPDATE FROM administrativo SET  Clave = ? WHERE  PK_ID = ?";

    this.connection.query(sql, [Nueva_Clave, PK_ID], function (err, results) {
      if (err) {
        throw err;
      }
      var mostrarMensaje;
      if (results.length === 0) {
        mostrarMensaje = "No se pudo realizar la actualizacion de la contraseña...";
      } else {
        mostrarMensaje = "Si se pudo realizar la actualizacion de la contraseña...";
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
              console.log(results);
              return callback(mostrarMensaje);
            }
          );
        });
      } else {
        return callback("Se encuentra registrado");
      }
    });
  }

  actualizarAdministrativo(PK_ID, Clave, cb) {
    console.log(
      "metodo actualizar usuario: PK_ID" + PK_ID + " Clave: " + Clave
    );
  }
}
