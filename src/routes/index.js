const { Router } = require('express');
const router=Router();

//routes
router.get('/', (req,res)=>{
    res.json({"Tittle":'Aqui debe ir la pag principal'});
});

module.exports=router;