const router = require('express').Router()
const apikeyMiddleware = require('../middlewares/apikey')

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

router.get('/api/products',apikeyMiddleware,(req,res)=>{
    res.json([
        {
            id:1,
            name:'bajaj',
            use:'hair',
            type:'oil',
            price:112,
            available:true,
            availabilityDealer: true
        },
        {
            id:2,
            name:'Maggie',
            use:'Snack',
            type:'fast food',
            price:50,
            available:false,
            availabilityDealer: false
        },
        {
            id:3,
            name:'ParleJEE',
            use:'snacks',
            type:'biscuit',
            price:20,
            available:true,
            availabilityDealer: true
        }
    ])
})

module.exports = router;