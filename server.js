//Express Setup
const express = require('express')
const app = express()
//Path setup
const path = require('path')
//Routers
const mainRouter = require('./routes/index')
const pruductRouter = require('./routes/products')
const dealerRouter = require('./routes/users')
//Middleware
const globalMiddleWare = require('./middlewares/global')
const validMiddleWare = require('./middlewares/validuser')
//ejs setup for dynamic value change
//telling express we are using ejs using set method which set the value of view engine to ejs
app.set("view engine", 'ejs')
//to print the value of view engine
//console.log(app.get('view engine'))


// we can customize the views folder says template folder by dowing this
//app.set('views',path.resolve(__dirname)+'/templates')
//console.log(app.get('views'))

//we use static public to configure resourece like css,images and so on
app.use(express.static('public'))
// let print view value we will see the path in console we can see it uses path where view file or html present
console.log(app.get('views'))

//Middleware configuration
// Keep in mind sequence play key role
app.use([globalMiddleWare,validMiddleWare])
// Router configuration
app.use(dealerRouter)
app.use(mainRouter)
app.use(pruductRouter)

//to activate globalmiddleware
//now it will applicable for all the requests 


//you can prefix as well in route
//app.use('/api',mainRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`Server Started at ${PORT}`))