import dbConnection from "../config/dbConnection";
import daoUsuario from "./DaoAdministrativo";
import dao from "./Dao";

export default class Dao_Inspeccion_Patente_Nueva extends dao {

    constructor() {
    super();
    this.administrativo = new Array();
    this.DaoUsu = new daoUsuario();
  }

  listar_Inspecciones_Patentes_Nuevas(callback) {
    var sql = "SELECT * FROM inspeccion_patente_nueva";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }


}