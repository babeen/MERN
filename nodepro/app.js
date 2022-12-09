const express =require("express");
const app = express();
app.get("/",(req,res) => {
    res.json("Hello Framework");
});

module.exports = app;