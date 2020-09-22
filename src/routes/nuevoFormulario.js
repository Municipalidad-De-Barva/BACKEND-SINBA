const { Router } = require('express');
const router=Router();

router.post('/', (req,res)=>{
    const{tipoSol,nomSolicitante,cedulaSolicitante,represLegalSolicitante,
        cedulaJuriSolicitante,telSolicitante,faxSolicitante,dirSolicitante,
        correoEleSolicitante,nomPropietario,represLegalPropietario,cedulaJuriPropietario,
        dirPropietario,nomComercial,actividad,dirExactaLocal,declaraJura,
        nomAutorizado,cedAutorizado}=req.body;

    if(tipoSol&&nomSolicitante&&cedulaSolicitante&&represLegalSolicitante&&
        cedulaJuriSolicitante&&telSolicitante&&faxSolicitante&&dirSolicitante&&
        correoEleSolicitante&&nomPropietario&&represLegalPropietario&&cedulaJuriPropietario&&
        dirPropietario&&nomComercial&&actividad&&dirExactaLocal&&declaraJura&&
        nomAutorizado&&cedAutorizado){

        res.json('Done');
        console.log('Entro la info');
    }else{
        res.status(500).json({error:'Datos insuficientes'});
    }
    
});

module.exports=router;