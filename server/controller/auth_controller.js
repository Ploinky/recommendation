const User = require('../db/model/User')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const config = require("../config/auth.config.js")

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    user.save((err, user) => {
        if(err) {
            res.status(500).send("Could not sign up user: " + err).end()
            return
        }

        res.status(200).send("User was signed up successfully").end()
    })
}

exports.signin = (req, res) => {
    console.log(req.body.username)
    User.findOne({ username: req.body.username})
        .exec((err, user) => {
            if(err) {
                res.status(500).send({ 
                    headers: {'Content-Type': 'text/plain'},
                    body: 'User not found: ' + err} )
                return
            }

            if(!user) {
                res.status(401).send("User not found!")
                return
            }

            var passwordCorrect = bcrypt.compareSync(req.body.password, user.password)

            if(!passwordCorrect) {
                res.status(401).send({ accessToken: null, message: "Invalid password!" })
                return
            }

            var token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400})

            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                accessToken: token
            })
        })
}