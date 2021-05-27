const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/recomapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
        console.log('Connection to local mongodb established')
    }).catch(err => {
        console.log('Could not connect to database: ' + err)
    });