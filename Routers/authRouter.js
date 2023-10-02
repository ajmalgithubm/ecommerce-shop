import express from "express";
import { loginController, registerController } from "./../Controllers/authController.js";

// router object
const router = express.Router();

// routing


// register router
router.post("/register", registerController);

// login router
router.post("/login", loginController)

export default router;
