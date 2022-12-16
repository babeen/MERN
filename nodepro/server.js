const http = require("http");
const PORT = 4000;
const app = require("./app");
const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});

