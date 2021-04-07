
import dbConnection from "../config/dbConnection";
import daotestigo from "./Dao_Testigo";
import dao from "./Dao";

export default class Dao_Inspeccion_Ocular extends dao {

    constructor() {
    super();
    this.DaoTestigo =  new daotestigo();
  }

  listar_Inspecciones_Oculares(callback) {
    var sql = "SELECT * FROM inspeccion_ocular";

    this.connection.query(sql, function (err, results) {
      if (err) {
        throw err;
      }
      console.log(results);
      return callback(results);
    });
  }

  insertar_Inspeccion_Ocular(
    // Datos de la inpeccion ocular
    FK_Inspeccion_Patente_Nueva,//Corresponde al código (LLave Primaria) de la tabla inspeccion_patente_nueva;
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    // Datos del testigo #1
    FK_Testigo1,
    Nombre_Completo_Testigo1,
    Telefono_Testigo1,
    Correo_Testigo1,
    //Datos del testigo #2
    FK_Testigo2,
    Nombre_Completo_Testigo2,
    Telefono_Testigo2,
    Correo_Testigo2,
    callback
  ) {

    const DaoTestigo = new daotestigo();

// Insertar testigo1

    DaoTestigo.insertar_Testigo(FK_Testigo1,Nombre_Completo_Testigo1,Telefono_Testigo1,Correo_Testigo1,function (result) {
      if (result === "Se ingreso un nuevo Testigo") {
        // Insertar testigo2
        DaoTestigo.insertar_Testigo(FK_Testigo2,Nombre_Completo_Testigo2,Telefono_Testigo2,Correo_Testigo2,function (result) { 
          if (result === "Se ingreso un nuevo Testigo") {

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

        });
      }
    });
  }

    Obtener_Inspeccion_Ocular(PK_Codigo_Inspeccion, callback) {
    var sql =
      "SELECT * FROM inspeccion_ocular where PK_Codigo_Inspeccion = ? ";

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