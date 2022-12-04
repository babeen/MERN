const http = require("http");
const PORT = 4000;
const server = http.createServer((req,res)=>{
    res.write("Hello first node!");
    res.end();
});

server.listen(PORT,()=>{
    console.log();
})

