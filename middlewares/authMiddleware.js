

export const userAuth = (req,res,next)=>{
   const userId = req.session.userId
   if(!userId){
    return res.status(500).json({message:"unvalied user"})
   }
   next()
}


export const adminAuth = (req,res,next)=>{
   const adminId = req.session.adminId
   if(!adminId){
    return res.status(500).json({message:"unvalied admin"})
   }
   next()
}