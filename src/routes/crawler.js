const express = require('express');
const router =  express.Router();

router.get('/', (request, response) => {
    response.render('crawler/index', {
        title: 'Web Crawler',
        message: 'Welcome to web crawler' 
    });
});

module.exports = router;