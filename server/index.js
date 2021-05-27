const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const { v4: uuidv4} = require('uuid')
const mongodb = require('./db/db')
const auth = require('./controller/auth_controller')
const authjwt = require('./middlewares/authjwt')

const RecommendationDao = require('./db/model/RecommendationDao')

const port = 5001

const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/', (req,res) => {
    res.json({'counter': recommendation.length}).end()
})

// Rest Interface Recommendations
// GET /recommendations/:id - Liste mit der ID für Autor oder Betrachter (je nach ID)
// POST /recommendations/:id/ - Erstellen einer Recommendation (nur auf korrekter ID)
// DELETE /recommendations/:id/:recommendationId - Löschen der Recommendation mit der ID

app.get('/recommendations/:id',  [authjwt.verifyToken], (req, res) => {
    RecommendationDao.find({'user': req.params.id}, function (err, recoms) {
        if (err) {
            res.status(200).send("No recommendations for user found").end()
            return handleError(err)
        } 
        
        res.status(200).send(recoms).end();
      })
})

app.post('/recommendations/:id', [authjwt.verifyToken], (req, res) => {
    var rec = new RecommendationDao(req.body)
    rec.user = req.params.id

    rec.save().then(() => {
        console.log("saved to db")
        res.status(200).send("saved to db").end()
    })
    .catch(err => {
        console.log("error: " + err)
        res.status(500).send("error saving to db: " + err)
    })
})

app.post('/signup', (req, res) => {
    auth.signup(req, res)
})

app.post('/signin', (req, res) => {
    auth.signin(req, res)
})

app.delete('/recommendations/:id/:recommendationId', (req, res) => {
    RecommendationDao.findByIdAndRemove(req.params.recommendationId, function(err, recom)
    {
        if(!err) {
            res.status(200).send('Deleted successfully').end()
        }
        else {
            res.status(500).send('Could not delete: ' + err).end()
        }
    })
})

app.listen(port, () => {
    console.log('Started server on port ' + port)
})