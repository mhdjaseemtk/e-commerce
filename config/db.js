import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,);
    console.log("connect");
  } catch (error) {
    console.log(error.message);
  }
};

export const adminCollection = mongoose.connection.collection("admin");


export default connectDB;