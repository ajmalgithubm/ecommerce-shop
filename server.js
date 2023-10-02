import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


// configure env
dotenv.config();


// rest object
const app = express();



// rest api 
app.get("/api", (req, res) => {
    res.send("<h1>Welcome</h1>")
})


// PORT

const PORT = process.env.PORT;
   
// run listen
app.listen(PORT, () => {
    console.log(`Server is Runnig on The ${PORT}`.bgRed.white);
}) 