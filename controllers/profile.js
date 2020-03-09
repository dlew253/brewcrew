const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');


router.get('/', (req, res) => {
    res.render('profile/get');
});
router.post('/', (req, res) => {
    res.redirect('profile/show');
});

router.get('brewery/show', (req, res) => {

    res.render('brewery/show')
});


module.exports = router;