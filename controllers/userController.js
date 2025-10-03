import users from '../models/userModel.js'
import bcrypt from 'bcrypt'


export const signup = async (req,res) =>{
    const {name,email,password} = req.body
    console.log(name);
    
    try{

          const exists = await users.findOne({email})
    if(exists){
        return res.status(400).json({message:"user already exists"})
    }
    const hashPassword = await bcrypt.hash(password,10)
//    const user1 =  {name,email,password:hashPassword}
//    users.insertOne(user1)
   const user = new users({
    name,email,password:hashPassword
   })

 const savedUser =  await user.save()
res.status(200).json({message:"user created",user:savedUser.name})

    }
  catch(error){
console.log(error.message);


  }
    
}