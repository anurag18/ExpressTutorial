const router = require('express').Router()

router.get('/api/dealers',(req,res)=>{
res.json([
    {
        name:'Ashfaq',
        area:'ahemdabad'
    },
    {
        name:'raghu',
        area:'mumbai'
    }
])
});

module.exports = router;