import JWT from 'jsonwebtoken';
import userModel from '../Models/userModel.js';

// protected Routes token base
export const requireSignIn = async (req, res, next) => {
    
    const {token} = req.body;
    try{
        const decode = JWT.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decode
        if(decode){
            next();
        }
    }catch(err){  
        console.log(err)

    }
}

// admin access
export const isAdmin = async(req, res, next) => {
    try{
        const user = await userModel.findById(req.user.id);
        if(user.role !== 1){
            return res.status(200).send({
                success:false,
                message : "Unauthorized Access"
            })
        }else{
            next();
        }
    }catch(err){
        console.log("error is ", err);
        res.status(401).send({
            success:false,
            err,
            message:"error in admin middlewire"
        })
    }
}