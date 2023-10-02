import { hashPassword } from "../Helpers/authHelper.js";
import userModel from "../Models/userModel.js";

// register controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // validation
        if (!name) {
            return res.send({ message: "Name is Required" });
        }
        if (!email) {
            return res.send({ message: 'Email is Required' });
        }
        if(! password){
            return res.send({ message: "password is Required"});
        }
        if(!phone){
            return res.send({ message: "Phone Number is Required"});
        }
        if(!address){
            return res.send({ message : "Address is Required"}); 
        }

        // check user
        const existingUser = await userModel.findOne({email});

        // existing the user
        if(existingUser){
            return res.status(200).send({
                success : true,
                message : "Already Registered Please Login"
            })
        }

        // register the User
        const hashedPassword = await hashPassword(password);

        // save 
        const user = await new userModel({name, email, phone, address, password: hashedPassword}).save();
        
        res.status(200).send({ 
            success: true,
            message: "User Register successfully..",
            user
        })

    } catch (error) {
        console.log("error ");
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
};

// login controller

export const loginController = async (req, res) => {
    
}
