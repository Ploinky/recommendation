const mongoose = require('mongoose')

var Schema = mongoose.Schema

var RecommendationSchema = new Schema({
    user: String,
    title: String,
    link: String,
    description: String,
    category: String })

const RecommendationDao = mongoose.model('RecommendationDao', RecommendationSchema);

module.exports = RecommendationDao