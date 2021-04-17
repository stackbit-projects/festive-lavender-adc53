const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    priceCurrent: Number,
    pricePrevious: Number,
    author: String,
    category: String,
    pricePortion: String,
},
{
    toJSON: {
        virtuals: true,
    }
})

CourseSchema.virtual('image_url').get(function() {
    return `${process.env.APP_URL}/files/${this.image}`
})

module.exports = mongoose.model('Course', CourseSchema);    