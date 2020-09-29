const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');
//const daoUsuario = require('./DaoUsuario');
const daoSolicitud = require('./DaoSolicitud_Patente');
//const DaoUsu = new daoUsuario();
const soli = new daoSolicitud();

const connection = dbConnection();

router.post('/', (req,res)=>{
    const{nomSolicitante,cedulaSolicitante,represLegalSolicitante,
        cedulaJuriSolicitante,telSolicitante,faxSolicitante,dirSolicitante,
        correoEleSolicitante,nomPropietario,represLegalPropietario,cedulaJuriPropietario,
        dirPropietario,nomComercial,actividad,declaraJura,
        nomAutorizado,cedAutorizado}=req.body;

    if(nomSolicitante&&cedulaSolicitante&&represLegalSolicitante&&
        cedulaJuriSolicitante&&telSolicitante&&faxSolicitante&&dirSolicitante&&
        correoEleSolicitante&&nomPropietario&&represLegalPropietario&&cedulaJuriPropietario&&
        dirPropietario&&nomComercial&&actividad&&declaraJura&&
        nomAutorizado&&cedAutorizado){

            soli.insertar_Solicitud_Patentes(cedulaSolicitante,"Contribuyente",nomSolicitante,telSolicitante,dirSolicitante,faxSolicitante,correoEleSolicitante,
            represLegalSolicitante,cedulaJuriSolicitante,nomPropietario,cedulaJuriPropietario,represLegalPropietario,dirPropietario,nomComercial,actividad,
            nomAutorizado,cedAutorizado,declaraJura,function(result){
            
              console.log(result);
              soli.listar_Solicitud_Patentes(function(result){
            
                console.log(result);
              
              });
            
            });

        
    }else{
        res.status(500).json({error:'Datos insuficientes'});
    }
    
});

module.exports=router;