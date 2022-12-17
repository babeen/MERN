const express = require("express");
const appRouter = express.Router();

appRouter.get("/",(req,res)=>{
    res.json("Hello first router!");
});

appRouter.get("/about",(req,res)=>{
    res.json("This is about page!");
});

appRouter.get("/contact",(req,res)=>{
    res.json("This is contact page!");
});
module.exports = appRouter;