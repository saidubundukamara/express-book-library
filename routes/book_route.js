const express = require('express');

const router = express.Router();


const bookController = require('../app/controllers/book_controller');

router.get('/', bookController.getAllBooks)



module.exports = router