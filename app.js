const path = require('path')
const express = require('express')
const app = express();
const PORT = 3030
app.get("/", function(req , res){
    res.sendFile(path.join(__dirname, "views/home.html"))
})

app.listen(PORT, ()=>{
    console.log(`server andando en el puerto ${PORT}`)
}

)