import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgon from 'morgan';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRouter from './Routers/authRouter.js'

// configure env
dotenv.config();

// databse config
connectDB()

// rest object
const app = express();

// middle wires
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/auth', authRouter);


// rest api 
app.get("/api", (req, res) => {
    res.send("<h1>Welcome</h1>")
})


// PORT

const PORT = process.env.PORT;
   
// run listen
app.listen(PORT, () => {
    console.log(`Server is Runnig on The ${PORT}`.bgBlue.white);
}) 