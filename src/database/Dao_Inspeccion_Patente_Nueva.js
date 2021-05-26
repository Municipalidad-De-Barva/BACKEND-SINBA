import dbConnection from "../config/dbConnection";
import daoUsuario from "./DaoAdministrativo";
import dao from "./Dao";
const util = require("util");

export default class Dao_Inspeccion_Patente_Nueva extends dao {
  constructor() {
    super();
    this.administrativo = new Array();
    this.DaoUsu = new daoUsuario();
  }

  obtener_ultima_inspeccion_patente_(callback) {
    var sql =
      "SELECT MAX(PK_Codigo_Inspeccion) AS PK_Codigo_Inspeccion FROM inspeccion_patente_nueva;";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }

      return callback(results);
    });
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

  insertar_Inspecciones_Patentes_Nuevas(
    FK_Inspector_Administrativo,
    FK_Solicitud_Patente,
    Descripcion,
    Local,
    Direccion,
    Requisito_Local_Acorde_Actividadl,
    Planta_Fisica,
    Senalizacion,
    Luces_Emergencias,
    Extintor,
    Salida_Emergencia,
    Parqueo,
    Disposiciones_Accesibilidad_7600,
    Servicios_Sanitarios,
    Actividades_Acorde_Naturaleza_Dimensiones,
    Acceso_Red,
    Cumplir_Requisitos_CONEXA,

    callback
  ) {
    var moment = require("moment");
    const connection = dbConnection();
    var sql = "INSERT INTO inspeccion_patente_nueva SET ?";
    var myDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    console.log(myDate);
    connection.query(
      sql,
      {
        FK_Inspector_Administrativo,
        FK_Solicitud_Patente,
        Descripcion,
        Fecha: myDate,
        Local,
        Direccion,
        Requisito_Local_Acorde_Actividadl,
        Planta_Fisica,
        Senalizacion,
        Luces_Emergencias,
        Extintor,
        Salida_Emergencia,
        Parqueo,
        Disposiciones_Accesibilidad_7600,
        Servicios_Sanitarios,
        Actividades_Acorde_Naturaleza_Dimensiones,
        Acceso_Red,
        Cumplir_Requisitos_CONEXA,
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

  obtener_inspeccion_patente_nueva_codigo(PK_Codigo_Inspeccion, callback) {
    var sql =
      "SELECT * FROM inspeccion_patente_nueva where PK_Codigo_Inspeccion = ? ";

    this.connection.query(sql, [PK_Codigo_Inspeccion], function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }

  async obtener_inspeccion_patente_nueva(PK_ID) {
    const query = util.promisify(this.connection.query).bind(this.connection);
    const inspeccion = await query(
      "SELECT * FROM inspeccion_patente_nueva where PK_Codigo_Inspeccion = ? ",
      [PK_ID]
    );

    return inspeccion;
  }

  actualizar_Datos_Inspeccion_Patente_Nueva(
    Descripcion,
    Local,
    Direccion,
    Requisito_Local_Acorde_Actividadl,
    Planta_Fisica,
    Senalizacion,
    Luces_Emergencias,
    Extintor,
    Salida_Emergencia,
    PK_Codigo_Inspeccion,
    callback
  ) {
    var sql =
      "UPDATE inspeccion_patente_nueva SET Descripcion = ? ,Local = ? ,Direccion = ? ,Requisito_Local_Acorde_Actividadl = ? ,Planta_Fisica = ? ,Senalizacion = ? ,Luces_Emergencias = ? ,Extintor = ? ,Salida_Emergencia = ?  Where PK_Codigo_Inspeccion = ? ";
    console.log(PK_Codigo_Inspeccion);
    this.connection.query(
      sql,
      [
        Descripcion,
        Local,
        Direccion,
        Requisito_Local_Acorde_Actividadl,
        Planta_Fisica,
        Senalizacion,
        Luces_Emergencias,
        Extintor,
        Salida_Emergencia,
        PK_Codigo_Inspeccion,
      ],
      function (err, results) {
        if (err) {
          throw err;
        }
        console.log(results);
        return callback(results);
      }
    );
  }
}
