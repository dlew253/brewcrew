const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    res.render('brew/get');
});
router.get('/', (req, res) => {
  res.render('profile/get');
});

router.post('/', (req, res) => {
   axios({
    method: 'get',
    url:`https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=${req.body.search}`,
    headers: {"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
	"x-rapidapi-key": "7cc8b3b6a6msh9fdfdbc5d67c892p11abc0jsnfc2e3a8a7169"}
  })
    .then(function(response) {
   console.log(response.data);
   res.render('brew/show', {breweries: response.data});
  }); 
    
  });
module.exports = router;