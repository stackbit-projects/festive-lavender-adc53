const Contact = require('../models/Contact');


module.exports = {
    async index(req, res) {

        try {
            res.json(await Contact.find({}));
        } catch (error) {
            res.status(500).send(`Error fetching contacts: ${error}`);
        }


    },

    async store(req, res) {
        const { name, email, assunto, message } = req.body;

        const contact = await Contact.create({ name, email, assunto, message });

        return res.json(contact);
    }
}