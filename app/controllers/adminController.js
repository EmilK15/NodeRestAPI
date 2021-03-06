'use strict';

var mongoose = require('mongoose'),
	Admin = mongoose.model('Admin');

	exports.create_admin = function(req, res) {
		var newAdmin = new Admin(req.body);

		newAdmin.save(function(err, admin) {
			if(err)
				res.json({
					message: 'could not create admin',
					err: err
				});
			else
				res.json({
					username: admin.username,
					email: admin.email
				});
		});
	};

	exports.read_admin = function(req, res) {
		Admin.findOne({username: req.body.userId}, function(err, admin) {
			if(err)
				res.json({
					message: 'could not read admin',
					err: err
				});
			else
				res.json({
					username: admin.username,
					email: admin.email
				});
		});
	};

	exports.update_admin = function(req, res) {
		Admin.findOneAndUpdate({username: req.params.userId},
			req.body, { new: true }, function(err, admin) {
				if(err)
					res.json({
						message: 'could not update admin',
						err: err
					});
				else
					res.json({
						username: admin.username,
						email: admin.email
					});
			});
	};

	exports.delete_admin = function(req, res) {
		Admin.remove({username: req.params.userId }, function(err, admin) {
			if(err)
				res.json({
					message: 'could not delete admin',
					err: err
				});
			else
				res.json({message: 'admin deleted '});
		});
	};