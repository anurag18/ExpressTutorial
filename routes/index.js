const router = require('express').Router()


router.get('/',(req,res)=>{
    //res.sendFile(path.resolve(__dirname)+`/index.html`)
    res.render('index',{
        title:'My Home Page'
    })
    })
router.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname)+`/about.html`)
    res.render('about', {
        title: 'About Page'
    })
})

router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/about.html')
})

module.exports = router;