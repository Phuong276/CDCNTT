require("dotenv").config()
// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken')

const createJWT = () => {
    let token = null
    try {
        token = jwt.sign({ foo: 'bar'}, process.env.JWT_SECRET)
        console.log(token)
    } catch (err) {
        console.log(err)
    }
    return token
}

const verifyToken = (token) => {
    let data = null;
    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        data = decoded
    } catch (e) {
        console.log(e)
    }
    return data
}

// const verifyToken = (req, res, next) => {
//     const authHeader = req.header('Authorization')
//     const token = authHeader && authHeader.split(' ')[1]
//     if (!token) return res.sendStatus(401)
//     try {
//         let decoded = jwt.verify(token, process.env.JWT_SECRET)
//         console.log(decoded)
//         next()
//     } catch (error) {
//         console.log(error)
//         return req.sendStatus(403)
//     }
// }

module.exports = {
    createJWT,
    verifyToken
}