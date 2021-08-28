const express = require('express');
const http = require('http');
const expressHandlebars = require("express-handlebars")
const {Server} = require('socket.io');
const path = require('path');
const app = express()
app.engine("hbs",expressHandlebars({
  defaultLayout : "main",
  extname : ".hbs"
}))
app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine", "hbs")

const server = http.createServer(app)
const io = new Server(server)
io.on('connection', (socket) => {
  socket.on("user_chat",(data)=>{
    console.log(data);
    io.emit("server_chat",data)
  })
});
app.get("/",(req,res)=>{
  res.render("home")
})
server.listen(8080,()=>{
  console.log("available server at 8080");
})