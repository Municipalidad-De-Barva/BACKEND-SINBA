const dbConnection = require('../config/dbConnection');
const daoUsuario = require('./DaoUsuario');
class DaoContribuyente {

    constructor() {
        this.connection = dbConnection();
        this.contribuyente = new Array();
        this.DaoUsu = new daoUsuario();
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