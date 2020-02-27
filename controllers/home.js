var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home/home');
});
router.get('/admin', function(req, res) {
    res.render('home/admin/index');
});
router.get('/member', function(req, res) {
    res.render('home/member/index');
});



module.exports = router;