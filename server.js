const express = require('express')
const app = express()
app.get('/',(req,res)=>{
res.send("Hello From Express")
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`Server Started at ${PORT}`))