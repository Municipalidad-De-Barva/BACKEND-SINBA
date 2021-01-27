const { Router } = require('express');
const { result } = require('underscore');
const router = Router();
const dbConnection = require('../config/dbConnection');
const daoAdministrativo = require('../routes/DaoAdministrativo');
const administrativo = new daoAdministrativo();
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const connection = dbConnection();

//creando un token cuando inicie la seccion el token se guardara en el localstorage
router.post('/', (req, res) => {
    const { user, pass } = req.body;
    if (user, pass) {
        //ver si se encuentra en la base de datos
        //y hacer el callback
        //Método para obtener de  la bases de datos al empleado correspondiente.
        if(user.length!=0 && pass.length!=0){
        administrativo.obtener_Administrativo_Clave(user, pass, function (result) {
            console.log(" Imprimiendo los datos del empleado obtenido: ");
            console.log(result);
            if (result.length != 0) {
                //res.json('ok');
                //creando token
                const token = jwt.sign({ id: user }, config.secret, {
                    expiresIn: 60 * 5,//token es valido por cinco minutos
                  });
                  console.log(token);
                  res.status(200).json({ auth: true, token });
            }
            else {
                res.status(500).json({ error: 'Datos erroneos' });
            }
            
        });}


    }
    if(user.length==0 && pass.length==0){
        res.status(500).json({ error: 'ambos nulos' });
    } 
    else if (user.length==0) {
        res.status(500).json({ error: 'usuario nulo' });
    }
    else if (pass.length==0) {
        res.status(500).json({ error: 'pass nulo' });
    }
    

    
});

module.exports = router;