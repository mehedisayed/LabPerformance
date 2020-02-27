var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('*', function(req, res, next) {
    if (req.cookies['username'] != null && req.cookies['type'] == 'admin') {
        res.redirect('/home/admin');
    } else if (req.cookies['username'] != null && req.cookies['type'] == 'member') {
        res.redirect('/home/member');
    } else {
        next();
    }
});

router.get('/', function(req, res) {
    res.render('register/index');
});
router.post('/', function(req, res) {

    var user = {
        user_name: req.body.user_name,
        user_phone: req.body.user_phone,
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
    };
    if (req.body.type == 'admin') {
        userModel.insertadmin(user, function(status) {
            if (status) {
                res.redirect('/home/');
            } else {
                res.redirect('/login');
            }
        });
    } else if (req.body.type == 'member') {
        userModel.insertmember(user, function(status) {
            if (status) {
                res.redirect('/home');
            } else {
                res.redirect('/login');
            }
        });
    } else {
        res.send('select admin or member');
    }
});

module.exports = router;