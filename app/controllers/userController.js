'use strict'

var mongoose = require('mongoose'),
	User = mongoose.model('User');

	exports.list_all_users = function(req, res) {
		User.find({}, function(err, users) {
			if(err)
				res.json({
					message: 'could not list users',
					err: err
				});
			else {
				var userMap = [];
				users.forEach(function(user) {
					let aUser = {
						username: user.username,
						email: user.email
					}
					userMap.push(aUser);
				});
				res.json(userMap);
			}
		});
	};

	exports.create_user = function(req, res) {
		var newUser = new User(req.body);

		newUser.save(function(err, user) {
			if(err)
				res.json({
					message: 'could not find user',
					err: err
				});
			else
				res.json({
					username: user.username,
					email: user.email
				});
		});
	};

	exports.read_user = function(req, res) {
		User.findOne({ username: req.params.userId }, function(err, user) {
			if(err)
				res.json({
					message: 'could not find user',
					err: err
				});
			else
				res.json({
					username: user.username,
					email: user.email
				});
		});
	};

	exports.update_user = function(req, res) {
		User.findOneAndUpdate({username: req.params.userId},
			req.body, { new: true }, function(err, user) {
				if(err)
					res.json({
						message: 'could not update',
						err: err
					});
				else
					res.json({
						username: user.username,
						email: user.email
				});
			});
	};

	exports.delete_user = function(req, res) {
		User.remove({username: req.params.userId }, function(err, user) {
			if(err)
				res.json({
					message: 'could not delete user',
					err: err
				});
			else
				res.json({message: 'user deleted' });
		});
	};