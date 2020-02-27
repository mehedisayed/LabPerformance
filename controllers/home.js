var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('home/home');
});
router.get('/admin', function(req, res) {
    userModel.getByausername(req.cookies['username'], function(result) {
        res.render('home/admin/index', { user: result });
    });
});
router.get('/member', function(req, res) {
    res.render('home/member/index');
});



module.exports = router;