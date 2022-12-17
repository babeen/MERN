const express = require("express");
const adminRoutes = express.Router();

adminRoutes.get("/",(req,res)=>{
    res.json('Hello admin');
})

module.exports = adminRoutes;