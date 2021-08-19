
const router = require('express').Router()
const apikeyMiddleware = require('../middlewares/apikey')

//route level middle ware applied for particular route only
//If you want to apply the middleware on group or setof routes then you can see the implementation in index.js file

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