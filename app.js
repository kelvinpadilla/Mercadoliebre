const path = require('path')
const publicPath = path.resolve(__dirname, './public')
const express = require('express')
const app = express();
const PORT = 3030

app.use(express.static(publicPath))

app.get("/", function(req , res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.listen(PORT, ()=>{
    console.log(`server andando en el puerto ${PORT}`)
}

)