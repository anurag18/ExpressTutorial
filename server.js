const express = require('express')
const path = require('path')

const app = express()
//telling express we are using ejs using set method which set the value of view engine to ejs
app.set("view engine", 'ejs')
//to print the value of view engine
console.log(app.get('view engine'))
app.use(express.static('public'))
// let print view value we will see the path in console we can see it uses path where view file or html present
console.log(app.get('views'))
// we can customize the views folder says template folder by dowing this
//app.set('views',path.resolve(__dirname)+'/templates')
//console.log(app.get('views'))

// app.get('/sendMethod',(req,res)=>{
// res.send("Hello From Express")
// })

// app.get('/sendFileMethod',(req,res)=>{
// res.sendFile(path.resolve(__dirname)+`/index.html`)
// })
app.get('/',(req,res)=>{
    //res.sendFile(path.resolve(__dirname)+`/index.html`)
    res.render('index',{
        title:'My Home Page'
    })
    })
app.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname)+`/about.html`)
    res.render('about', {
        title: 'About Page'
    })
})

app.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/about.html')
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`Server Started at ${PORT}`))