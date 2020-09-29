const dbConnection = require('../config/dbConnection');
const daoUsuario = require('./DaoUsuario');
class DaoContribuyente {

    constructor() {
        this.connection = dbConnection();
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
            }
            else {
                mostrarMensaje = "Si se encuentra registrado...";
            }
            return callback(mostrarMensaje);
        })
    }

    listar_Contribuyentes(callback) {

        var sql = "SELECT * FROM contribuyente";

        this.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })
    }

    insertar_Contribuyente(PK_ID, Tipo, Nombre, Apellido1, Apellido2, Telefono, Direccion, Fax, Correo, callback) {

        this.DaoUsu.insertar_Usuarios(PK_ID, Tipo, function (result) {
            const connection = dbConnection();
            var sql = "INSERT INTO contribuyente SET ?";

            connection.query(sql, {
                PK_ID,
                Nombre,
                Apellido1,
                Apellido2,
                Telefono,
                Direccion,
                Fax,
                Correo
            }, function (err, results) {
                if (err) {
                    throw err;
                }
                var mostrarMensaje = "Se realizó con exito...";
                return callback(mostrarMensaje);

                //return callback(results);
            })
        });

        /*var sql = "INSERT INTO  SET ?";

        this.connection.query(sql,
            {
                PK_ID,
                Tipo
            }, function (err, results) {
                if (err) {
                    throw err;
                }

                return callback(results);

                //return callback(results);
            })*/
    }





}

module.exports = DaoContribuyente;