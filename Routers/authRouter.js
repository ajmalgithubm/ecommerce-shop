import express from 'express';
import { registerController } from './../Controllers/authController.js';

// router object
const router = express.Router();

// routing
router.post('/register', registerController)
export default router