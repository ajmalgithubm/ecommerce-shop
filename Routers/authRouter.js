import express from "express";
import { loginController, registerController, testController, forgotPasswordController } from "./../Controllers/authController.js";
import { requireSignIn, isAdmin } from "../Middleware/authMiddleware.js";

// router object
const router = express.Router();

// routing


// register router
router.post("/register", registerController);

// login router
router.post("/login", loginController);

// test  routes
router.get("/test", requireSignIn , isAdmin, testController);

// forgotten password

router.post("/forgot-password", forgotPasswordController);

// protected route
router.post('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok : true});
})

export default router;
