const { Router } = require('express');
const router=Router();

router.post('/', (req,res)=>{
    const{tipoSol,nomSolicitante,cedulaSolicitante,represLegalSolicitante,
        cedulaJuriSolicitante,telSolicitante,faxSolicitante,dirSolicitante,
        correoEleSolicitante,nomPropietario,represLegalPropietario,cedulaJuriPropietario,
        dirPropietario,nomComercial,actividad,dirExactaLocal,numPatenteCom,
        numPlanoCatastro,telLocal,faxLocal,estadoPaten,correoEleLocal,declaraJura,
        nomTraspaso,nomNegocio,cedulaTraspaso,represLegalTraspaso,cedulaJuriTraspaso,telTraspaso,
        faxTraspaso,dirTraspaso,correoEleTraspaso,nomAutorizado,cedAutorizado,message}=req.body;
    if(tipoSol){
        res.json('Done');
        console.log('Entro la info');
    }else{
        res.status(500).json({error:'There was an error'});
    }
    
});

module.exports=router;