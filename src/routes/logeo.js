const { Router } = require('express');
const { result } = require('underscore');
const router = Router();
const dbConnection = require('../config/dbConnection');
const daoAdministrativo = require('../routes/DaoAdministrativo');
const administrativo = new daoAdministrativo();

const connection = dbConnection();


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
                res.json('ok');
            }
            else {
                res.status(500).json({ error: 'Datos erroneos' });
            }
            
        });}


    }
    if(user.length==0 && pass.length==0){
        res.status(500).json({ error: 'ambos nulos' });
    } 
    if (user.length==0) {
        res.status(500).json({ error: 'usuario nulo' });
    }
    if (pass.length==0) {
        res.status(500).json({ error: 'pass nulo' });
    }
    

    
});

module.exports = router;