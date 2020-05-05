const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');


router.get('/', (req, res) => {
  db.user.findAll({
    where: {id: req.user.id},
    include: [db.brewery]
  }).then(([user, created])=>{
    console.log(user)
    res.render('/profile/get', {user: user});
  })
   
});

router.get('/brewery', (req, res) => {
    db.brewery.findOrCreate({
      where: {
        name: req.body.name
      }, defaults: {
        address: req.body.address,
           city: req.body.city
      }
    }).then(([brewery, created]) => {
      if (created) {
        console.log('Added to favorites');
        res.redirect('/profile')
      }else {
        console.log('User Error, dont click me again');
        
     } })
    })


//router.get('/brewery/show', (req, res) => {
//
//    res.render('brewery/show')
//});


module.exports = router;