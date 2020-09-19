const express = require('express');
const router = express.Router();

//get about page

router.get('/', (req, res, next) => {
    res.render('about', {
        author: 'Jishnu satheesh',
        
    })
})

module.exports = router;