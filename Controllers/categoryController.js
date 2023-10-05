import slugify from "slugify";
import categoryModel from "../Models/categoryModel.js";

export const createCategoryController = async (req, res) => {
    try{
        const {name} = req.body;
        if(!name){
            return res.status(401).send({
                success: false,
                message: "Name is Required"
            })
        }
        const existingCategory = await categoryModel.findOne({name});
        if(existingCategory){
            return res.status(200).send({
                success: false,
                message: "Category already exists"
            })
        }
        const category = await new categoryModel({name, slug: slugify(name)}).save();
        res.status(200).send({
            success:true,
            message:'New Category Successfully added',
            category
        })
    }catch(err){
        console.log("error is", err.message);
        res.status(500).send({
            success: false,
            message : "Error occur while creating a category",
            err
        })
    }
}

export const updateCategoryController = (req, res) => {
    try{

    }catch(err){
        
    }
}