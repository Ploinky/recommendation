const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/recomapp', {useNewUrlParser: true, useUnifiedTopology: true});