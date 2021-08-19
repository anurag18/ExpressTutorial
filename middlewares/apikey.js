function apiKey(req,res,next) {
const apiKey =  12345;
console.log('request body = '+req.body);
console.log('API key = '+ req.query.apiKey);
if ( req.query.apiKey && apiKey == req.query.apiKey) {
    next()
}
else {
    res.json({
        message:'not allowed'
    })
}
}

module.exports = apiKey;