import express from 'express';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getProductPhotoController, getSingleProductController, updateProductController } from '../Controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

// create product

router.post("/create-product", requireSignIn, isAdmin, formidable(),createProductController);

// get products

router.get('/get-product', getProductController)

// get single prouduct

router.get("/get-product/:slug", getSingleProductController);

// get photo

router.get("/product-photo/:pid", getProductPhotoController);

// delete product 

router.delete('/delete-product/:pid',requireSignIn, isAdmin, deleteProductController);

// update product

router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(),  updateProductController);

export default router;