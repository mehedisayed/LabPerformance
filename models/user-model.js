var db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql ="SELECT uc.username,ut.user_type_name FROM user_credential uc,user u,user_type ut where uc.user_id=u.user_id and u.user_type_id=ut.user_type_id and uc.username=? and uc.password=?";
		db.getResults(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	
}