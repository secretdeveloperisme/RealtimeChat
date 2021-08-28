const express = require('express');
const http = require('http');
const expressHandlebars = require("express-handlebars")
const socket = require('socket.io');
const { execArgv } = require('process');
const path = require('path');
const app = express()
app.engine("hbs",expressHandlebars({
  defaultLayout : "main",
  extname : ".hbs"
}))
app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine", "hbs")

const server = http.createServer(app)
const io = socket(server)
io.on("connection", client=>{
  client.on("onChat", data=>{

  })
})
app.get("/",(req,res)=>{
  res.render("home")
})
app.listen(8080,()=>{
  console.log("server available at 8080");
})