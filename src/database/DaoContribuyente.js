import dbConnection from "../config/dbConnection";
import daoUsuario from "./DaoUsuario";
import dao from "./Dao";
const util = require("util");

export default class DaoContribuyente extends dao {
  constructor() {
    super();
    this.contribuyente = new Array();
    this.DaoUsu = new daoUsuario();
  }
  //Metodo para obtener al contribuyente por medio del ID, se usa para consultar primero si existe dicho registro
  //para no agregarlo dos veces y evitar el error de choque por la llave primaria.
  obtener_Contribuyente(PK_ID, callback) {
    var sql = "SELECT* FROM contribuyente WHERE PK_ID = ?";

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

  async obtenerContribuyenteIDasync(PK_ID) {
    const query = util.promisify(this.connection.query).bind(this.connection);
    const soli = await query("SELECT* FROM contribuyente WHERE PK_ID = ? ", [
      PK_ID,
    ]);
    return soli;
  }

  obtener_ContribuyenteID(PK_ID, callback) {
    var sql = "SELECT* FROM contribuyente WHERE PK_ID = ?";

    this.connection.query(sql, [PK_ID], function (err, results) {
      if (err) {
        throw err;
      }

      return callback(results);
    });
  }

  listar_Contribuyentes(callback) {
    var sql = "SELECT * FROM contribuyente";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }

  insertar_Contribuyente(
    PK_ID,
    Tipo,
    Nombre,
    Telefono,
    Direccion,
    Fax,
    Correo,
    callback
  ) {
    this.obtener_Contribuyente(PK_ID, function (result) {
      if (result === "No se encuentra registrado...") {
        const DaoUsu = new daoUsuario();
        DaoUsu.insertar_Usuarios(PK_ID, Tipo, function (result) {
          const connection = dbConnection();
          var sql = "INSERT INTO contribuyente SET ?";

          connection.query(
            sql,
            {
              PK_ID,
              Nombre,
              Telefono,
              Direccion,
              Fax,
              Correo,
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
