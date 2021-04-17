const Course = require('../models/Course');

module.exports = {
    async index(req, res) {

        const { category } = req.headers;

        try {
            res.json(await Course.find({category}));
        } catch (error) {
            res.status(500).send(`Error fetching courses: ${error}`);
        }

    },

    async store(req, res) {
        const { filename } = req.file;
        const { name, description, priceCurrent, pricePrevious, author, category, pricePortion } = req.body;

        return res.json(await Course.create({ 
            image: filename, 
            name, 
            description, 
            priceCurrent, 
            pricePrevious, 
            author, 
            category,
            pricePortion
        }));
    }
};