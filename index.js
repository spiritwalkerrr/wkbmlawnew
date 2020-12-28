//_______________REQUIREMENTS_______________//
//EXPRESS
const express = require("express");
const app = express();
//EJS
const ejs = require('ejs');
//PATH 
const path = require("path");
//EJS MATE
const ejsMate = require("ejs-mate");
//_______________MIDDLEWARE ETC_______________//
//SETTING EJS AS VIEW ENGINE & SETTING THE PATH TO /VIEWS
app.set("view engine", "ejs" );
app.set("views", path.join(__dirname, "/views"));
//SERVING PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, "public")))
//SETTING UP EJS MATE
app.engine("ejs", ejsMate)
//_______________ROUTES_______________//
//INDEX
app.get("/", (req,res)=>{
    res.render("index.ejs")
});
app.post("/home", (req,res)=>{
    //WORK IN PROGRESS
})
//RUNNING THE SERVER ON PORT 3K
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`LISTENING ON PORT ${port}`)
});