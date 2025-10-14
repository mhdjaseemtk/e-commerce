import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "user already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    //    const user1 =  {name,email,password:hashPassword}
    //    users.insertOne(user1)
    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    const savedUser = await user.save();
    res.status(200).json({ message: "user created", user: savedUser.name });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ meassage: "user not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ meassage: "password incorrect" });
    }
    req.session.userId = user._id;

    res.status(200).json({ message: "logined " });
  } catch (error) {
    console.log(error.message);
  }
};



export const userLoginOut= (req,res)=>{
  req.session.destroy((error)=>{
    if(error){
      return res.send('error')
    }
    res.clearCookie("connect.sid").json({message:"loginout"})
    
    
  })
}



