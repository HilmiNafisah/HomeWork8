const express = require('express');
const router = express.Router();

router.get ('/:film', function (req,res) {
    res.send('Data '+req.params.film+' berhasil ditampilkan');
});

router.get ('/:filmbyid', function (req,res) {
    res.send('Data '+req.params.filmbyid+' berhasil ditampilkan');
});

router.get ('/:category', function (req,res) {
    res.send('Data '+req.params.category+' berhasil ditampilkan');
});

router.get ('/:filmbycategory', function (req,res) {
    res.send('Data '+req.params.filmbycategory+' berhasil ditampilkan');
});

router.get ('/:actor', function (req,res) {
    res.send('Data '+req.params.actor+' berhasil ditampilkan');
});


//export this router to use in our index.js
module.exports = router;