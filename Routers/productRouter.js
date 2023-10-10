import express from 'express';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleware.js';
import { createProductController, deleteProductController, filterProductController, getProductController, getProductListController, getProductPhotoController, getSingleProductController, getTotalProductController, searchProductController, similarProductController, updateProductController } from '../Controllers/productController.js';
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

//  get filtered products

router.post('/filter-product', filterProductController)

// get the total number of product

router.get('/total', getTotalProductController);

// get product list as per page

router.get('/product-list/:page', getProductListController);

// get search product

router.get('/search-product/:keyword', searchProductController);

// controller Similar product

router.post('/similar-product', similarProductController);

export default router;