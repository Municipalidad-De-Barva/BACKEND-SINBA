const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');
const DaoSolicitud_Patente = require('../routes/DaoSolicitud_Patente');
const soli = new DaoSolicitud_Patente();

const connection = dbConnection();

const Joi = require(`@hapi/joi`);

const schema = Joi.object({
    codigoSolicitud: Joi.number().min(1).required(),
    notInfoForm: Joi.string().min(1).required(),
    insCCSS: Joi.string().min(1).required(),
    insFODESAF: Joi.string().min(1).required(),
    exonePoliRiesgo: Joi.string().min(1).required(),
    declJura: Joi.string().min(1).required(),
    timbFisc: Joi.string().min(1).required(),
    impuMunic: Joi.string().min(1).required()
});

router.post('/', (req,res)=>{
    console.log(req.body);

    const { error }=schema.validate(req.body);
    if(error){
        res.status(500).send(error.details[0].message);
        console.log(error.details[0].message);
    }else{

       const{codigoSolicitud,notInfoForm,insCCSS,insFODESAF,exonePoliRiesgo,declJura,timbFisc,impuMunic}=req.body;
        
        soli.actualizar_Datos_Revision(codigoSolicitud,"1",insCCSS,insFODESAF,exonePoliRiesgo,timbFisc,"0",declJura,impuMunic,"0","Terminado",function (result) {
            console.log(" Resultado de insertar al usuario: ");
            console.log(result);
            res.json('ok');
        });
        
       // res.json('ok');
    }
    
});

module.exports=router;