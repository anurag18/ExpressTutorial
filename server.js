const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

// app.get('/sendMethod',(req,res)=>{
// res.send("Hello From Express")
// })

// app.get('/sendFileMethod',(req,res)=>{
// res.sendFile(path.resolve(__dirname)+`/index.html`)
// })
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname)+`/index.html`)
    })
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname)+`/about.html`)
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`Server Started at ${PORT}`))