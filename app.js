const express = require('express')
const app = express();

app.get("/", function(req , res){
    res.send("Empezamos!")
})

app.listen(3030, ()=>{
    console.log("server andando")
}

)