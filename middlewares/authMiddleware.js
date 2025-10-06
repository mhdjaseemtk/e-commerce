

export const userAuth = (req,res,next)=>{
   const userId = req.session.userId
   if(!userId){
    return res.status(500).json({message:"unvalied user"})
   }
   next()
}