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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//SERVING PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, "public")))
//SETTING UP EJS MATE
app.engine("ejs", ejsMate)
//_______________ROUTES_______________//
app.get("/", (req, res) => {
    res.render("index.ejs")
});
app.get("/de", (req, res) => {
    res.render("indexDE.ejs")
})
app.get("/portrait", (req, res) => {
    res.render("portrait.ejs")
});
app.get("/lawyers", (req, res) => {
    res.render("lawyers.ejs")
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
});
app.get("/legal-notice", (req, res) => {
    res.render("imp.ejs")
});
app.get("/data", (req, res) => {
    res.render("stmt.ejs")
});
app.get("/de/portrait", (req, res) => {
    res.render("portraitDE.ejs")
});
app.get("/de/lawyers", (req, res) => {
    res.render("lawyersDE.ejs")
});
app.get("/de/contact", (req, res) => {
    res.render("contactDE.ejs")
});
app.get("/de/legal-notice", (req, res) => {
    res.render("impDE.ejs")
});
app.get("/de/data", (req, res) => {
    res.render("stmtDE.ejs")
});
//RUNNING THE SERVER ON PORT 3K
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`LISTENING ON PORT ${port}`)
});
