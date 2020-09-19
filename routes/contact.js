const express = require('express');
const { route } = require('.');
const router = express.Router();

//get contact page

router.get('/', (req, res, next) => {
    res.render('contact', {
        contact:"This is the contact page....."
    })
})

module.exports = router;