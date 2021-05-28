import dbConnection from "../config/dbConnection";
import dao from "./Dao";
const util = require("util");

export default class Dao_Patente extends dao {
  constructor() {
    super();
  }

  listar_Patentes(callback) {
    var sql = "SELECT Numero_Patente,Contribuyente,Local from patente;";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
    
      return callback(results);
    });
  }

  insertar_patentes(
    Numero_Patente,
    Distrito,
    Cedula_Juridica,
    Contribuyente,
    Actividad,
    Local,
    Direccion,
    callback
  ) {
    var moment = require("moment");
    const connection = dbConnection();
    var sql = "INSERT INTO patente SET ?";
    var myDate = moment(new Date()).format("YYYY-MM-DD");
    console.log(myDate);
    connection.query(
      sql,
      {
        Numero_Patente,
        Fecha: myDate,
        Distrito,
        Cedula_Juridica,
        Contribuyente,
        Actividad,

        Local,
        Direccion,
      },
      function (err, results) {
        if (err) {
          throw err;
        }
        var mostrarMensaje = "Se realizó con exito...";
        return callback(mostrarMensaje);
      }
    );
  }


  obtener_patentes(Numero_Patente, callback) {

    var sql =
      "SELECT * from patente WHERE Numero_Patente = ? "
    this.connection.query(sql, [Numero_Patente], function (err, results) {
      if (err) {
        throw err;
      }
      return callback(results);
    });

  }


}
