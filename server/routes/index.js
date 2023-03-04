const express = require('express');
const router = express.Router();
const {
    homepage,
    about,
}= require('../controllers/mainController');



// App Routes
router.get('/' ,homepage);
router.get('/about' , about);


module.exports = router;