const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/", (req, res)=>{
    res.send("Hello from express api");
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});