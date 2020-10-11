const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');

const connection = dbConnection();


router.post('/', (req,res)=>{
    const{user,pass}=req.body;
    if(user,pass){
        //ver si se encuentra en la base de datos
        //y hacer el callback
    }else{
        res.status(500).json({error:'Datos insuficientes'});
    }
});

module.exports=router;