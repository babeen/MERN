const express =require("express");
const app = express();
const process = require("dotenv")
const PORT = process.env.PORT||4008;
app.get("/",(req,res) => {
    res.json("Hello Framework");
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
})

// module.exports =app;

