const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.showMessages);

router.get('/new', indexController.getMessage);

router.post('/new', indexController.storeMessage);

router.get('/message-details/:text', indexController.showMessage);

module.exports = router;