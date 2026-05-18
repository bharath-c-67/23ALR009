require('dotenv').config()

const Log = async (req,res,next)=>{
    const {stack,level,package,message} = req.body()
    const resp = await fetch(ProcessingInstruction.env.API_LOG,{
        method:'POST',
        header:{
            'Authorization':ProcessingInstruction.env.TOKEN,
            'Content-Type':'application/json'
        },
        body:{
            "stack":stack,
            "level":level,
            "package":package,
            "message":message
        }
    })
    const data = await resp.json()
    console.log(data.logID+" "+data.message)
    next()
}