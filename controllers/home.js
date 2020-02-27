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
    userModel.getBymusername(req.cookies['username'], function(result) {
    res.render('home/member/index',{user: result});
    });
});

router.get('/admin/edit/:ausername', function(req, res){
	userModel.getByausername(req.params.ausername, function(result){
		res.render('home/admin/edit', {user: result});
	});
});
router.post('/admin/edit/:ausername', function(req, res){
    var user={
        aname:req.body.aname,
        ausername:req.body.ausername,
        password:req.body.password,
        aphone:req.body.aphone,
        aid:req.body.aid,
    };
	userModel.updateadmin(user, function(status){
        if(status)
        {
            res.redirect('/home/admin');
        }
	});
});

module.exports = router;