

// create product
export const createProductController = (req, res) => {
    try{
        const {} = req.body;
    }catch(err){
        console.log("error is ", err.message);
        res.status(500).send({
            success: false,
            message:"Error while Creating Product",
            err
        })
    }
}