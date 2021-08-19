function active(req,res,next) {
let active = true;
console.log('global middleware query = '+req.query.active)
if (Boolean(req.query.active == 'true')) {
    next()
} 
else {
res.json({
    message:'issue in global middleware kindly pass the require parameter'
})
}
}

module.exports = active;