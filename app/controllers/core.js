'use strict';

exports.app = function(req, res) {
    res.render('app', {
        user: req.user || null
    });
};

exports.index = function(req, res){
    res.render('index', {

    });
};

exports.admin = function(req, res){
    res.render('admin', {

    });
};

exports.signup = function(req, res){
    res.render('signup', {

    });
};

exports.resetPassword = function(req, res){
    res.render('reset-password', {

    });
};
