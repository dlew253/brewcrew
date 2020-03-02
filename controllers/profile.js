const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
    res.render('profile/get');
});
router.post('/', (req, res) => {
    res.redirect('profile/show');
});


module.exports = router;