const express =require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT||4000;
app.get("/",(req,res) => {
    res.json("Hello Framework");
});

// routing set
const public_router = require("./routes/public_routes");
const admin_router = require("./routes/admin_routes");
app.use("/",public_router);
app.use("/admin",admin_router);

// 404 handling
app.get((req,res,next)=>{
    let error = new Error("404! page not found.");
    error.status =404;
    next(error);
})
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
})

// module.exports =app;

