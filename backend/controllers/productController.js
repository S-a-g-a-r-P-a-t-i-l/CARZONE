const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apifeatures");





//create product--Admin

exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Get All Product
exports.getAllProducts = async(req,res)=>{
  const apiFeature = new ApiFeatures(Product.find(),req.query).search().filter();
   const products = await apiFeature.query;
   res.status(200).json({
    success:true,
    products
   })
}

// Get Product Details
exports.getProductDetails = async(req,res,next)=>{
   
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(200).json({
        success:true,
        product
    })

 }

//update product --Admin

exports.updateProduct = async(req,res,next)=>{
    let product =Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}

//Delete Product

exports.deleteProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
    })

}