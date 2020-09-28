const dbConnection = require('../config/dbConnection');
const daoUsuario = require('./DaoContribuyente');
class DaoSolicitud_Patente {

    constructor() {
        this.connection = dbConnection();
        this.contribuyente = new Array();
        this.DaoContri = new daoUsuario();
    }

    listar_Solicitud_Patentes(callback) {

        var sql = "SELECT * FROM solicitud_patente";

        this.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })
    }

    insertar_Solicitud_Patentes(PK_ID, Tipo, Nombre, Apellido1, Apellido2, Telefono, Direccion,
        Fax, Correo, Nombre_Propetario, Nombre_Representante_Legal, Cedula_Propetario,
        Nombre_Comercial_Negocio,FK_Actividad, Nombre_Persona_Autorizada, ID_Persona_Autorizada, Declaracion_Jurada, callback) {

        this.DaoContri.insertar_Contribuyente(PK_ID, Tipo, Nombre, Apellido1, Apellido2, Telefono,
            Direccion, Fax, Correo, function (result) {
                const connection = dbConnection();
                var sql = "INSERT INTO solicitud_patente SET ?";

                connection.query(sql, {
                    FK_ID_Contribuyente:PK_ID,
                    Nombre_Propetario,
                    Nombre_Representante_Legal,
                    Cedula_Propetario,
                    Nombre_Comercial_Negocio,
                    FK_Actividad,
                    Nombre_Persona_Autorizada,
                    ID_Persona_Autorizada,
                    Declaracion_Jurada
                }, function (err, results) {
                    if (err) {
                        throw err;
                    }
                    var mostrarMensaje = "Se realizó con exito...";
                    return callback(mostrarMensaje);


                })
            });

    }

}

module.exports = DaoSolicitud_Patente;