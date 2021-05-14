const express=require('express')
const router=express.Router()

const Aliens=require('../models/model')


router.get('/', async(req,res)=>{
    debugger
console.log('Get request');

// res.send('Get Request')
try{
    console.log(Aliens);
    
const aliens=await Aliens.find() //callback
res.json(aliens)
console.log(aliens);

}catch(err){
    console.log("hhh");
    
    res.send('Error'+err)
}
})


router.get('/:id', async(req,res)=>{
    console.log('Get request---------');
    
    // res.send('Get Request')
    try{
    const aliens=await Aliens.findById(req.params.id) //callback
    res.json(aliens)
    console.log(aliens);
    
    }catch(err){
        console.log("hhh");
        
        res.send('Error'+err)
    }
    })


    router.put('/:id', async(req,res)=>{
        console.log('put request');
        
        try{
        const alien=await Aliens.findById(req.params.id) 
            alien.usn=req.body.usn;
            alien.role=req.body.role;
            alien.dob=req.body.dob;
            alien.score=req.body.score;
            alien.name=req.body.name;
            alien.link=req.body.link;
            const a1=await alien.save()
        res.json(a1)
        console.log(alien);
        
        }catch(err){
            console.log("hhh");
            
            res.send('Error'+err)
        }
        })

router.post('/',async(req,res)=>{
    console.log("456");
    
    const alien=new Aliens({
        name:req.body.name,
        dob:req.body.dob,
        usn:req.body.usn
    })

    try{
        console.log("123");
        
        const a1=await alien.save()
        res.json(a1)
        res.status(200).send(a1)
    }catch(err){
        console.log("789");
        
        res.send("Error"+err)
    }
})


router.delete("/:id",async(req,res)=>{
    console.log("789");
    try{
        console.log("7809");
const alien=await Aliens.findById(req.params.id)
console.log("78009",alien);
const a1=await alien.delete()
console.log("78ww9",Aliens);
res.json(Aliens)
    }catch(err){
        res.send("err"+err)
    }

})


// Update score info
router.patch('/:id',async (req,res) => {
    try {
        console.log('patch');
        if(req.body.score){
            await Aliens.findByIdAndUpdate(req.params.id,{$set:{score:req.body.score}},{new:true}).then((data)=>{
        
                req.status = 200;
                console.log('patch success');
                
                res.status(200).send(data)
                }).catch((err)=>{
                  
                console.log('patch error 2');
               });
        }

       else if(req.body.link){
            await Aliens.findByIdAndUpdate(req.params.id,{$set:{link:req.body.link}},{new:true}).then((data)=>{
        
                req.status = 200;
                console.log('patch success');
                
                res.status(200).send(data)
                }).catch((err)=>{
                  
                console.log('patch error 2');
               });
        }
     
    } catch (error) {
        
     console.log('patch error');
        res.send("err"+error)
    }
   });


module.exports=router