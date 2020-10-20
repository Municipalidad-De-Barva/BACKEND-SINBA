const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');
//const daoUsuario = require('./DaoUsuario');
const daoSolicitud = require('./DaoSolicitud_Patente');
//const DaoUsu = new daoUsuario();
const soli = new daoSolicitud();

const connection = dbConnection();

router.get('/', (req,res)=>{     

    soli.obtener_Solicitudes_Nuevas(function(result){
        //console.log(result);
        res.json(result);
    });
    
});

module.exports=router;