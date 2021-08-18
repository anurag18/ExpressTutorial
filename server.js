const express = require('express')
const path = require('path')

const app = express()


app.get('/sendMethod',(req,res)=>{
res.send("Hello From Express")
})

app.get('/sendFileMethod',(req,res)=>{
res.sendFile(path.resolve(__dirname)+`/index.html`)
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`Server Started at ${PORT}`))