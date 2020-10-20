const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');
//const daoUsuario = require('./DaoUsuario');
const daoSolicitud = require('./DaoSolicitud_Patente');
//const DaoUsu = new daoUsuario();
const soli = new daoSolicitud();

const connection = dbConnection();

router.get('/', (req,res)=>{     

    soli.listar_Solicitud_Patentes(function(result){
        //console.log(result);
        res.json(result);
    });
    
});

router.get('/selected', (req,res)=>{ 
    const{codigo}=req.body;
    if(codigo){
        soli.obtener_Solicitud_Codigo(codigo,function(result){
            //console.log(result);
            res.json(result);
        });
    }else{
        res.status(500).json({error:'Datos insuficientes'});
    }       
});

router.get('/nuevas', (req,res)=>{     

    soli.obtener_Solicitudes_Nuevas(function(result){
        //console.log(result);
        res.json(result);
    });
    
});

router.get('/pendientes', (req,res)=>{     

    soli.obtener_Solicitudes_Pendientes(function(result){
        //console.log(result);
        res.json(result);
    });
    
});

router.get('/terminados', (req,res)=>{     

    soli.obtener_Solicitudes_Terminados(function(result){
        //console.log(result);
        res.json(result);
    });
    
});

router.get('/descartados', (req,res)=>{     

    soli.obtener_Solicitudes_Descartados(function(result){
        //console.log(result);
        res.json(result);
    });
    
});

module.exports=router;