var db = require('./db');

module.exports = {
    validateadmin: function(user, callback) {
        var sql = "SELECT * FROM admin where ausername=? and password=?";
        db.getResults(sql, [user.username, user.password], function(results) {
            if (results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    validatemember: function(user, callback) {
        var sql = "SELECT * FROM member where musername=? and mpassword=?";
        db.getResults(sql, [user.username, user.password], function(results) {

            if (results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    insertadmin: function(user, callback) {
        var sql = "insert into admin values(?,?,?,?,?)";
        db.execute(sql, [null, user.user_name, user.user_phone, user.username, user.password], function(status) {
            if (status) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    insertmember: function(user, callback) {
        var sql = "insert into member values(?,?,?,?,?)";
        db.execute(sql, [null, user.user_name, user.user_phone, user.username, user.password], function(status) {
            if (status) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    getByausername: function(username, callback) {
        var sql = "select * from admin where ausername=?";
        db.getResults(sql, [username], function(results) {
            if (results.length > 0) {
                callback(results[0]);
            } else {
                callback(null);
            }
        });
    },

}