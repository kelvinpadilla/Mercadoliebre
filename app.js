const path = require('path')
const publicPath = path.resolve(__dirname, './public')
const express = require('express')
const app = express();
const PORT = 3001

app.use(express.static(publicPath))

app.get("/", function(req , res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get("/register", function(req , res){
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})
app.get("/login", function(req , res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.listen(PORT, ()=>{
    console.log(`server andando en el puerto ${PORT}`)
}
)
