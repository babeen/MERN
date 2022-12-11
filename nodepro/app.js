const express =require("express");
const app = express();
const PORT = 4000;
app.get("/",(req,res) => {
    res.json("Hello Framework");
});

app.listen(PORT, () => {
    console.log("Hello Diwas!");
})

