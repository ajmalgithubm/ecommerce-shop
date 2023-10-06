import slugify from "slugify";
import productModel from "../Models/productModel.js";
import fs from 'fs';


// create product
export const createProductController =async (req, res) => {
    try{
        const { name, description, price, category, quantity , shipping} = req.fields;
        const {photo} = req.files;
        // validation
        switch (true) {
            case !name:
                return res.status(500).send({ message : "Name is Required"});
            case !description:
                return res.status(500).send({ message : "Description is Required"});
            case !price:
                return res.status(500).send({ message: "Price is Required"});
            case !category:
                return res.status(500).send({ message : "category is required"});
            case !quantity:
                return res.status(500).send({ message : 'quantity is Required'});
            case !photo && photo.size > 1000000:
                return res.status(500).send({ message : "photo is required and photo is less than 1MB"})
        }
        const products = new productModel({...req.fields, slug : slugify(name)});
        if(photo){
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(200).send({
            success: true,
            message: "product added Successfully",
            products
        })
    }catch(err){
        console.log("error is ", err.message);
        res.status(500).send({
            success: false,
            message:"Error while Creating Product",
            err
        })
    }
}


// get product 

export const getProductController = async(req, res)=> {
    try{
        const products = await productModel.find({}).select("-photo").populate("category").limit(12).sort({createdAt : -1});
        // sort decending order product newly created product appear first and old created product appear on the last
        res.status(200).send({
            success: true,
            message: "product give successfully",
            products,
            countTotal: products.length
        })
    }catch(err){
        console.log(" error is ", err.message);
        res.status(500).send({
            success: false,
            message: "error while get The product",
            err
        })
    }
}

// get single produt

export const getSingleProductController = async (req, res) => {
    try{
        const product = await productModel.findOne({slug : req.params.slug }).select("-photo").populate("category");
        res.status(200).send({
            success: true,
            message: "successfuly get the product",
            product
        })
    }catch(err){
        console.log("Error is ", err.message);
        res.status(500).send({
            success: false,
            message: 'Error while fetching a single product',
            err
        })
    }
}

// get product photo
export const getProductPhotoController=async (req, res) => {
    try{
        const product = await productModel.findById(req.params.pid).select('photo');
        if(product.photo.data){
            res.set('Content-type', product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }
    }catch(err){
        console.log(" error is ", err.message);
        res.status(500).send({
            success: false,
            message : "error while getting  photo",
            err
        })
    }
}

// delete product controller

export const deleteProductController = async(req, res)=> {
    try{
        await productModel.findByIdAndDelete(req.params.pid).select("-photo");
        res.status(200).send({
            success: true,
            message: "product deleted successfully"
        })
    }catch(err){
        console.log("error is ", err.message);
        res.status(500).send({
            success: false,
            message: "Error while deleting the product",
            err
        })
    }
}

// update product controller

export const updateProductController = async(req, res) => {
    try{
        const {name, description, price, category, quantity, shipping} = req.fields;
        const {photo} = req.files;
        switch (true) {
            case !name:
                return res.status(500).send({message: "name is required"})
            case !description:
                return res.status(500).send({ message: "Description is Required"})
            case !price:
                return res.status(500).send({ message: "Price is Required"})
            case !category:
                return res.status(500).send({ message: "category is Required"})
            case !quantity:
                return res.status(500).send({ message: "Quantity is Required"})
            case !photo && photo.size > 1000000:
                return res.status(500).send({ message: "photo is Required and Size should be less than 1 MB"})
        }

        const product = await productModel.findByIdAndUpdate(req.params.pid, 
            { ...req.fields, slug : slugify(name)}, {new : true});
        if(photo){
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save()
        res.status(500).send({
            success: true,
            message: "product updated successfully",
            product
        })

    }catch(err){
        console.log("error is ", err.message);
        res.status(500).send({
            message: "Error While updating Product",
            success:false,
            err
        })
    }
}