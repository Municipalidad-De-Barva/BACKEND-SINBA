import dbConnection from "../config/dbConnection";
import daotestigo from "./Dao_Testigo";
import dao from "./Dao";
import daoinspeccion from "./Dao_Inspeccion_Patente_Nueva";
const util = require('util');


export default class Dao_Inspeccion_Ocular extends dao {



  constructor() {
    var carName = "c";
    super();
    this.DaoTestigo = new daotestigo();
  }

  async obtener_ocu(PK_ID, callback) {

    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query('SELECT * FROM inspeccion_ocular where PK_Codigo_Inspeccion = ?', [PK_ID]);

    return rows;

  }


  async listar_Inspecciones_Oculares() {
    const DaoTestigo = new daotestigo();
    const DaoInpeccion = new daoinspeccion();
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query('SELECT * FROM inspeccion_ocular');
    var lista = []
    for (var i = 0; i < rows.length; i++) {
      const inp = await DaoInpeccion.obtener_inspeccion_patente_nueva(rows[i].FK_Inspeccion_Patente_Nueva);
      const test1 = await DaoTestigo.obtener_Testigo2(rows[i].FK_Testigo1);
      const test2 = await DaoTestigo.obtener_Testigo2(rows[i].FK_Testigo2);
      var inspe = {
        PK_Codigo_Inspeccion: rows[i].FK_Inspeccion_Patente_Nueva,
        FK_Inspeccion_Patente_Nueva: inp,
        Lugar_Visita: rows[i].Lugar_Visita,
        Fecha: rows[i].Fecha,
        Diligencia: rows[i].Diligencia,
        Resultado: rows[i].Resultado,
        FK_Testigo1: test1,
        FK_Testigo2: test2,
        Firma_Inspector_1: rows[i].Firma_Inspector_1,
        Firma_Inspector_2: rows[i].Firma_Inspector_2,
        Estado: rows[i].Estado
      };
      lista.push(inspe);
    }
    console.log(lista);

  }

  async Obtener_Inspeccion_Ocular_Por_ID_Con_Objetos(PK_Codigo_Inspeccion) {

    const DaoTestigo = new daotestigo();
    const DaoInpeccion = new daoinspeccion();
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query('SELECT * FROM inspeccion_ocular where PK_Codigo_Inspeccion = ?', [PK_Codigo_Inspeccion]);
    const inp = await DaoInpeccion.obtener_inspeccion_patente_nueva(rows[0].FK_Inspeccion_Patente_Nueva);
    const test1 = await DaoTestigo.obtener_Testigo2(rows[0].FK_Testigo1);
    const test2 = await DaoTestigo.obtener_Testigo2(rows[0].FK_Testigo2);
    var ocular = {
      PK_Codigo_Inspeccion: rows[0].FK_Inspeccion_Patente_Nueva,
      FK_Inspeccion_Patente_Nueva: inp,
      Lugar_Visita: rows[0].Lugar_Visita,
      Fecha: rows[0].Fecha,
      Diligencia: rows[0].Diligencia,
      Resultado: rows[0].Resultado,
      FK_Testigo1: test1,
      FK_Testigo2: test2,
      Firma_Inspector_1: rows[0].Firma_Inspector_1,
      Firma_Inspector_2: rows[0].Firma_Inspector_2,
      Estado: rows[0].Estado
    };
    return ocular;

  }







  insertar_Inspeccion_Ocular(
    // Datos de la inpeccion ocular
    FK_Inspeccion_Patente_Nueva, //Corresponde al código (LLave Primaria) de la tabla inspeccion_patente_nueva;
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    // Datos del testigo #1
    FK_Testigo1,
    Telefono_Testigo1,
    Correo_Testigo1,
    //Datos del testigo #2
    FK_Testigo2,
    Telefono_Testigo2,
    Correo_Testigo2,
    callback
  ) {
    const DaoTestigo = new daotestigo();

    // Insertar testigo1

    DaoTestigo.insertar_Testigo(
      FK_Testigo1,
      Telefono_Testigo1,
      Correo_Testigo1,
      function (result) {
        if (result === "Se ingreso nuevo testigo") {
          // Insertar testigo2
          DaoTestigo.insertar_Testigo(
            FK_Testigo2,
            Telefono_Testigo2,
            Correo_Testigo2,
            function (result) {
              if (result === "Se ingreso nuevo testigo") {
                const connection = dbConnection();
                var sql = "INSERT INTO inspeccion_ocular SET ?";

                connection.query(
                  sql,
                  {
                    FK_Inspeccion_Patente_Nueva,
                    Lugar_Visita,
                    Fecha,
                    Diligencia,
                    Resultado,
                    FK_Testigo1,
                    FK_Testigo2,
                    Estado: "Pendiente"
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
            }
          );
        }
      }
    );
  }

  Obtener_Inspeccion_Ocular(PK_Codigo_Inspeccion, callback) {
    var sql = "SELECT * FROM inspeccion_ocular where PK_Codigo_Inspeccion = ? ";

    this.connection.query(sql, [PK_Codigo_Inspeccion], function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }

  actualizar_Datos_Inspeccion_Ocular(
    FK_Inspeccion_Patente_Nueva,
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    FK_Testigo1,
    FK_Testigo2,
    PK_Codigo_Inspeccion,
    callback
  ) {
    var sql =
      "UPDATE inspeccion_ocular SET FK_Inspeccion_Patente_Nueva = ? ,Lugar_Visita = ? ,Fecha = ? ,Diligencia = ? ,Resultado = ? ,FK_Testigo1 = ? ,FK_Testigo2 = ?   Where PK_Codigo_Inspeccion = ? ";
    console.log(PK_Codigo_Inspeccion);
    this.connection.query(
      sql,
      [
        FK_Inspeccion_Patente_Nueva,
        Lugar_Visita,
        Fecha,
        Diligencia,
        Resultado,
        FK_Testigo1,
        FK_Testigo2,
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
