const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const ContactController = require('./controllers/ContactController');
const CourseController = require('./controllers/CourseController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/courses', CourseController.index);
routes.post('/courses', upload.single('image'), CourseController.store);

module.exports = routes;