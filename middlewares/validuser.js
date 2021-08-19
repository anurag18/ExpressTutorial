function isValidUser(req,res,next) {
    let isValidUser = true

    if (isValidUser) {
        next()
    } else {
res.json({
    message:'invalid user'
})
    }
}

module.exports = isValidUser
