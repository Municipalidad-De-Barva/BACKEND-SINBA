const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');
//const daoUsuario = require('./DaoUsuario');
const daoSol = require('./DaoSolicitud_Patente');
//const DaoUsu = new daoUsuario();
const DaoSoli = new daoSol();

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

            DaoSoli.insertar_Solicitud_Patentes(cedulaSolicitante,'Contribuyente',nomSolicitante,"Flores","Estrada",telSolicitante,dirSolicitante,
            faxSolicitante,correoEleSolicitante,nomPropietario,represLegalPropietario,cedulaJuriPropietario,
            nomComercial,01,nomAutorizado,cedAutorizado,declaraJura,function(result){
                res.json('Done');
                console.log(req.body);
            }
                      
            );

        
    }else{
        res.status(500).json({error:'Datos insuficientes'});
    }
    
});

module.exports=router;