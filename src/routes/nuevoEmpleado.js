const { Router } = require('express');
const router=Router();
const dbConnection = require('../config/dbConnection');
const daoAdministrativo = require('../routes/DaoAdministrativo');
const administrativo = new daoAdministrativo();

const connection = dbConnection();

router.post('/', (req,res)=>{
    const{user,pass,name,rol,correo}=req.body;  //se mantiene lo de mandar los datos del admin por motivos de seguridad
    if(user,pass){
        //ver si se encuentra en la base de datos
        //y hacer el callback

        //Método para ingresar a un nuevo empleado.
        administrativo.insertar_Administrativo(user,"Administrador",name,1,correo,pass,function (result) {
            console.log(" Resultado de insertar al usuario: ");
            console.log(result);
        });



    }else{
        res.status(500).json({error:'Solicitud incorrecta'});
    }
});

module.exports=router;