
const dbConnection = require('../config/dbConnection');
class DaoUsuario {

    constructor() {
        this.connection = dbConnection();
        this.usuario = new Array();
    }

    listar_Usuarios(callback) {

        var sql = "SELECT * FROM usuario";

        this.connection.query(sql, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
            return callback(results);
        })
    }

    insertar_Usuarios(PK_ID,Tipo,callback) {

        var sql = "INSERT INTO usuario SET ?";

        this.connection.query(sql,
            {
              PK_ID,
              Tipo
            }, function (err, results) {
            if (err) {
                throw err;
            }
            
            return callback("");
            
            //return callback(results);
        })
    }





}

module.exports = DaoUsuario;