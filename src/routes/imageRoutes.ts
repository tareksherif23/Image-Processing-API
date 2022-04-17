const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageController');
router.route('/').get(imageController.resizeImage);

module.exports = router;
