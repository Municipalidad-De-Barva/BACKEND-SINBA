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

    insertar_Solicitud_Patentes(
        //Datos del contribuyente...
        PK_ID, Tipo, Nombre, Telefono, Direccion, Fax, Correo,
        //Datos Representante legal del contribuyente
        Nombre_Representante_Legal_Contribuyente, Cedula_Representante_Legal_Contribuyente,
        //Datos del propietario
        Nombre_Propetario, Cedula_Propetario, Direccion_Propietario,
        //Datos del representante legal del propetario
        Nombre_Representante_Legal_Propietario,
        //Datos del negocio.
        Nombre_Comercial_Negocio, Actividad,
        //Datos Persona autorizada.
        Nombre_Persona_Autorizada, ID_Persona_Autorizada,
        Declaracion_Jurada,
        //Atrubuto_Nuevo para el estado de la solicutud de patente nueva.
        Estado,
        callback) {


        this.DaoContri.insertar_Contribuyente(PK_ID, Tipo, Nombre, Telefono,
            Direccion, Fax, Correo, function (result) {
                var moment = require('moment');
                const connection = dbConnection();
                var sql = "INSERT INTO solicitud_patente SET ?";
                var myDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
                console.log(myDate);
                connection.query(sql, {
                    FK_ID_Contribuyente: PK_ID,
                    Nombre_Representante_Legal_Contribuyente,
                    Cedula_Representante_Legal_Contribuyente,
                    Nombre_Propetario,
                    Cedula_Propetario,
                    Nombre_Representante_Legal_Propietario,
                    Direccion_Propietario,
                    Nombre_Comercial_Negocio,
                    Actividad,
                    Nombre_Persona_Autorizada,
                    ID_Persona_Autorizada,
                    Declaracion_Jurada,
                    Fecha: myDate,
                    Estado
                }, function (err, results) {
                    if (err) {
                        throw err;
                    }
                    var mostrarMensaje = "Se realizó con exito...";
                    return callback(mostrarMensaje);


                })
            });

    }

    // Este método llamado obtener_Solicitudes_Nuevas,
    //Lo que hace es retornar una lista o contenedor con
    //todas las solicitudes de patente que cuyo estado de la 
    //bases de datos se encuentre en "Nuevo"...

    obtener_Solicitudes_Nuevas(callback) {

        var sql = "SELECT * FROM solicitud_patente where Estado = 'Nuevo' ";

        this.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })

    }

    //--------------------------------------------------//
    obtener_Solicitudes_Pendientes(callback) {

        var sql = "SELECT * FROM solicitud_patente where Estado = 'Pendiente' ";

        this.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })

    }

    obtener_Solicitudes_Descartados(callback) {

        var sql = "SELECT * FROM solicitud_patente where Estado = 'Descartado' ";

        this.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })

    }

    obtener_Solicitudes_Terminados(callback) {

        var sql = "SELECT * FROM solicitud_patente where Estado = 'Terminado' ";

        this.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })

    }

    // Este método llamado obtener_Solicitud_Codigo,
    //Lo que hace es retornar el objeto de la base de datos cuyo PK_Codigo coincide con el que 
    //viene por paramtero...

    obtener_Solicitud_Codigo(PK_Codigo,callback) {

        var sql = "SELECT * FROM solicitud_patente where PK_Codigo = ? ";

        this.connection.query(sql,[PK_Codigo], function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })

    }

}

module.exports = DaoSolicitud_Patente;