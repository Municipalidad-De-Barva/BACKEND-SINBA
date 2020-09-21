const { Router } = require('express');
const router=Router();

//routes
router.get('/', (req,res)=>{
    res.json({"Tittle":'Aqui debe ir la pag principal'});
});

router.post('/', (req,res)=>{
    const{msg}=req.body;
    if(msg){
        res.json('Done');
        console.log(msg);
    }else{
        res.status(500).json({error:'There was an error'});
    }
    
});
module.exports=router;