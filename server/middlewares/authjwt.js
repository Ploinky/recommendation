const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')
const User = require('../db/model/User')

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']

    if(!token) {
        return res.status(403).send("No access token provided!").end()
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(400).send("Unauthorized: " + err)
        }

        req.userId = decoded.id
        next()
    })
}

const authjwt = {
    verifyToken
  };
  module.exports = authjwt;