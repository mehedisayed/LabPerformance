var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res) {
    res.render('login/index');
});

router.post('/', function(req, res) {

    var user = {
        username: req.body.uname,
        password: req.body.password
    };
            userModel.validate(user, function(results) {
            if (results !=null) {
                res.cookie('username', results.username);
                res.cookie('type', results.user_type_name);
                res.redirect('/home');
            } else {
                res.redirect('/login');
            }
        });
    

});

module.exports = router;