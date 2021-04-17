const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    assunto: String,
    message: String,
})

module.exports = mongoose.model('Contact', ContactSchema);