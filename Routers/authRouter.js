import express from "express";
import { loginController, registerController, testController } from "./../Controllers/authController.js";
import { requireSignIn } from "../Middleware/authMiddleware.js";

// router object
const router = express.Router();

// routing


// register router
router.post("/register", registerController);

// login router
router.post("/login", loginController);

// test  routes
router.get("/test", requireSignIn ,testController);

export default router;
