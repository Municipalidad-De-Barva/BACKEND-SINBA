const { Router } = require('express');
const router=Router();

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

        res.json('Done');
        console.log(req.body);
    }else{
        res.status(500).json({error:'Datos insuficientes'});
    }
    
});

module.exports=router;