const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');
const daoAdministrativo = require('../routes/DaoAdministrativo');
const administrativo = new daoAdministrativo();

const connection = dbConnection();

const Joi = require(`@hapi/joi`);

const schema = Joi.object({
    user: Joi.string().min(9).required(),
    pass: Joi.string().min(6).required().max(256),
    name: Joi.string().min(10).required(),
    rol: Joi.string().min(1).required().max(1),
    email: Joi.string().min(6).required().email()
});

router.post('/', (req,res)=>{

    const { error }=schema.validate(req.body);
    if(error){
        res.status(500).send(error.details[0].message);
        console.log(error.details[0].message);
    }else{
        const{user,pass,name,rol,email}=req.body;
        
        administrativo.insertar_Administrativo(user,"Administrador",name,rol,email,pass,function (result) {
            console.log(" Resultado de insertar al usuario: ");
            console.log(result);
        });
        
        console.log(user,pass,name,rol,email);
        res.json('ok');
    }
    
});

module.exports=router;