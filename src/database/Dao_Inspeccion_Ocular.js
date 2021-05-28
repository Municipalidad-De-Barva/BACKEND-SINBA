import dbConnection from "../config/dbConnection";
import daotestigo from "./Dao_Testigo";
import daosolicitud from "./DaoSolicitud_Patente";
import daocontri from "./DaoContribuyente";
import dao from "./Dao";
import daoinspeccion from "./Dao_Inspeccion_Patente_Nueva";
const util = require("util");

export default class Dao_Inspeccion_Ocular extends dao {
  constructor() {
    //var carName = "c";
    super();
    this.DaoTestigo = new daotestigo();
  }

  async obtener_ocu(PK_ID) {
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query(
      "SELECT * FROM inspeccion_ocular where PK_Codigo_Inspeccion = ?",
      [PK_ID]
    );

    return rows;
  }

  async obtener_contribuyente_ocular(PK_Codigo_Inspeccion) {
    console.log("PK_Codigo_Inspeccion", PK_Codigo_Inspeccion);
    const DaoInpeccion = new daoinspeccion();
    const DaoSolicitudPatente = new daosolicitud();
    const DaoContribuyente = new daocontri();
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query(
      "SELECT * FROM inspeccion_ocular where PK_Codigo_Inspeccion = ?",
      [PK_Codigo_Inspeccion]
    );
    console.log("datos", JSON.stringify(rows));
    const inpeccion = await DaoInpeccion.obtener_inspeccion_patente_nueva(
      rows[0].FK_Inspeccion_Patente_Nueva
    );

    const resultinspeccion = Object.values(
      JSON.parse(JSON.stringify(inpeccion))
    );

    const solicitud = await DaoSolicitudPatente.obtener_solicitud_patente(
      resultinspeccion[0].FK_Solicitud_Patente
    );

    const resultsoli = Object.values(JSON.parse(JSON.stringify(solicitud)));

    const contri = await DaoContribuyente.obtenerContribuyenteIDasync(
      resultsoli[0].FK_ID_Contribuyente
    );

    const resultcontri = Object.values(JSON.parse(JSON.stringify(contri)));

    var contribuyente = {
      Nombre: resultcontri[0].Nombre,
      Telefono: resultcontri[0].Telefono,
      Correo: resultcontri[0].Correo,
    };

    return contribuyente;
  }

  async listar_Inspecciones_Oculares() {
    const DaoTestigo = new daotestigo();
    const DaoInpeccion = new daoinspeccion();
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query("SELECT * FROM inspeccion_ocular");
    var lista = [];
    for (var i = 0; i < rows.length; i++) {
      const inp = await DaoInpeccion.obtener_inspeccion_patente_nueva(
        rows[i].FK_Inspeccion_Patente_Nueva
      );
      const test1 = await DaoTestigo.obtener_Testigo2(rows[i].FK_Testigo1);
      const test2 = await DaoTestigo.obtener_Testigo2(rows[i].FK_Testigo2);
      var inspe = {
        PK_Codigo_Inspeccion: rows[i].PK_Codigo_Inspeccion,
        FK_Inspeccion_Patente_Nueva: inp,
        Lugar_Visita: rows[i].Lugar_Visita,
        Fecha: rows[i].Fecha,
        Diligencia: rows[i].Diligencia,
        Resultado: rows[i].Resultado,
        FK_Testigo1: test1,
        FK_Testigo2: test2,
        Firma_Inspector_1: rows[i].Firma_Inspector_1,
        Firma_Inspector_2: rows[i].Firma_Inspector_2,
        Estado: rows[i].Estado,
      };
      lista.push(inspe);
    }
    console.log(lista);
    return lista;
  }

  async Obtener_Inspeccion_Ocular_Por_ID_Con_Objetos(PK_Codigo_Inspeccion) {
    const DaoTestigo = new daotestigo();
    const DaoInpeccion = new daoinspeccion();
    const query = util.promisify(this.connection.query).bind(this.connection);
    let new1 = PK_Codigo_Inspeccion;
    console.log(new1);
    new1 = new1.substring(1);
    new1 = new1.substring(new1.length);
    console.log("mi actual" + PK_Codigo_Inspeccion);
    const rows = await query(
      "SELECT * FROM inspeccion_ocular where PK_Codigo_Inspeccion = ?",
      [PK_Codigo_Inspeccion]
    );
    //console.log("mis datos"+JSON.stringify(rows[0]));
    const inp = await DaoInpeccion.obtener_inspeccion_patente_nueva(
      rows[0].FK_Inspeccion_Patente_Nueva
    );
    //console.log("mis INP"+JSON.stringify(inp[0]));
    const test1 = await DaoTestigo.obtener_Testigo2(rows[0].FK_Testigo1);
    const test2 = await DaoTestigo.obtener_Testigo2(rows[0].FK_Testigo2);
    var ocular = {
      PK_Codigo_Inspeccion: rows[0].PK_Codigo_Inspeccion,
      FK_Inspeccion_Patente_Nueva: inp,
      Lugar_Visita: rows[0].Lugar_Visita,
      Fecha: rows[0].Fecha,
      Diligencia: rows[0].Diligencia,
      Resultado: rows[0].Resultado,
      FK_Testigo1: test1,
      FK_Testigo2: test2,
      Firma_Inspector_1: rows[0].Firma_Inspector_1,
      Firma_Inspector_2: rows[0].Firma_Inspector_2,
      Estado: rows[0].Estado,
    };
    return ocular;
  }

  async insertar_Inspeccion_Ocular_Prueba(
    FK_Inspeccion_Patente_Nueva,
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    FK_Testigo1,
    Telefono_Testigo1,
    Correo_Testigo1,
    Firma_Testigo1,
    FK_Testigo2,
    Telefono_Testigo2,
    Correo_Testigo2,
    Firma_Testigo2,
    Firma_Inspector_1,
    Firma_Inspector_2
  ) {
    const query = util.promisify(this.connection.query).bind(this.connection);

    const DaoTestigo = new daotestigo();
    var Test1ced;
    var Test2ced;
    const test1 = await DaoTestigo.verificar_Existencia(FK_Testigo1);
    if (test1 === true) {
      const test2 = await DaoTestigo.obtener_Testigo2(FK_Testigo1);
      const resultcontri = Object.values(JSON.parse(JSON.stringify(test2)));
      Test1ced = resultcontri[0].PK_ID;
    } else if (test1 === false) {
      console.log("No existe...");
      const test3 = await DaoTestigo.insertar_Testigo2(
        FK_Testigo1,
        Telefono_Testigo1,
        Correo_Testigo1,
        Firma_Testigo1
      );
      const test4 = await DaoTestigo.obtener_Testigo2(FK_Testigo1);
      const resultcontri2 = Object.values(JSON.parse(JSON.stringify(test4)));
      Test1ced = resultcontri2[0].PK_ID;
    }
    const test6 = await DaoTestigo.verificar_Existencia(FK_Testigo2);
    if (test6 === true) {
      const test7 = await DaoTestigo.obtener_Testigo2(FK_Testigo2);
      const resultcontri3 = Object.values(JSON.parse(JSON.stringify(test7)));
      Test2ced = resultcontri3[0].PK_ID;
    } else if (test6 === false) {
      console.log("No existe...");
      const test8 = await DaoTestigo.insertar_Testigo2(
        FK_Testigo2,
        Telefono_Testigo2,
        Correo_Testigo2,
        Firma_Testigo2
      );
      const test9 = await DaoTestigo.obtener_Testigo2(FK_Testigo2);
      const resultcontri4 = Object.values(JSON.parse(JSON.stringify(test9)));
      Test2ced = resultcontri4[0].PK_ID;
    }

    const rows = await query("INSERT INTO inspeccion_ocular SET ?", {
      FK_Inspeccion_Patente_Nueva,
      Lugar_Visita,
      Fecha,
      Diligencia,
      Resultado,
      FK_Testigo1: Test1ced,
      FK_Testigo2: Test2ced,
      Firma_Inspector_1,
      Firma_Inspector_2,
      Estado: "Pendiente",
    });
    var mostrarMensaje = "Se realizó con exito...";
    return mostrarMensaje;
  }

  insertar_Inspeccion_Ocular(
    FK_Inspeccion_Patente_Nueva,
    Lugar_Visita,
    Fecha,
    Diligencia,
    Resultado,
    // Datos del testigo #1
    FK_Testigo1,
    Tel_Testigo1,
    Correo_Testigo1,
    Firma_Testigo1,
    //Datos del testigo #2
    FK_Testigo2,
    Tel_Testigo2,
    Correo_Testigo2,
    Firma_Testigo2,
    Firma_Inspector_1,
    Firma_Inspector_2,
    callback
  ) {
    const DaoTestigo = new daotestigo();

    // Insertar testigo1

    DaoTestigo.insertar_Testigo(
      FK_Testigo1,
      Tel_Testigo1,
      Correo_Testigo1,
      Firma_Testigo1,
      function (result) {
        if (result === "Se ingreso nuevo testigo") {
          // Insertar testigo2
          DaoTestigo.insertar_Testigo(
            FK_Testigo2,
            Tel_Testigo2,
            Correo_Testigo2,
            Firma_Testigo2,
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
                    Firma_Inspector_1,
                    Firma_Inspector_2,
                    Estado: "Pendiente",
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

  async Cambiar_Estado_Inspeccion_Ocular(ID_OCULAR, ESTADO) {
    console.log("ID_OCULAR", ID_OCULAR);
    console.log("ESTADO", ESTADO);
    const query = util.promisify(this.connection.query).bind(this.connection);
    const rows = await query(
      "UPDATE inspeccion_ocular SET Estado = ? where PK_Codigo_Inspeccion = ?",
      [ESTADO, ID_OCULAR]
    );
  }
}
