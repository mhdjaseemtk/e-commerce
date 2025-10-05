import { adminCollection } from "../config/db.js";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import bcrypt from 'bcrypt'
import User from "../models/userModel.js";







// admin login

export const adminlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await adminCollection.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "admin not found" });
    }
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(400).json({ message: "password incorrect" });
    }
    req.session.adminId = admin._id;

    return res.status(200).json({ message: "logined " });
  } catch (error) {
    console.log(error.message);
  }
};


// create Product

export const createProduct = async (req,res)=>{

 const {name,description,price,category} = req.body
 try{

 
    const categoryDetailes = await Category.findOne({category});
    if (!categoryDetailes) {
      return res.status(400).json({ message: "Invalid category name ",category });
    }

    const existsProduct = await Product.findOne({name:name})
if(existsProduct){
      return res.status(400).json({ message: "already exsisite ",name });
}
    const product = new Product({
      name,
      description,
      price,
      category: categoryDetailes._id
    
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 }




// getAll Products

 export const getAllProducts = async (req,res)=>{
  try{
const products =  await Product.find().populate("category")
 res.status(200).json(products)

  }
  catch(error){
res.status(500).json({message:error.message})
  }
 
 }



// update Product

export const updateProduct = async (req, res) => {


  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// delete Product

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Create Category

 export const createCategory = async (req,res)=>{

 const {name,description} = req.body
 try{

 
    const existsCategory = await categoryCollection.findOne({name});
    if (existsCategory) {
      return res.status(400).json({ message: " existsCategory ",name });
    }

    const category = new Category({
      name,
      description,
     
    
    });

    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 }


 //  Get All Categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Update Category
export const updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Delete Category
export const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// get all users

export const gettAllUser = async (req,res)=>{
  try {
  const getUsers = await User.find()
res.status(200).json(getUsers)
  } catch (error) {
    res.status(500).json(error.message)
  }

}