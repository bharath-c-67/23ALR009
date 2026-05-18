require('dotenv').config()

const Log = async (req,res,next)=>{
    const {stack,level,package1,message} = req.body()
    const resp = await fetch(process.env.API_LOG,{
        method:'POST',
        header:{
            'Authorization':process.env.TOKEN,
            'Content-Type':'application/json'
        },
        body:{
            "stack":stack,
            "level":level,
            "package":package1,
            "message":message
        }
    })
    const data = await resp.json()
    console.log(data.logID+" Log : "+data.message)
    next()
}