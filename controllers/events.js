const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
    res.render('events/get');
});
router.post('/', (req, res) => {
    res.redirect('/events/show');
});


module.exports = router;