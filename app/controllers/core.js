'use strict';

exports.app = function(req, res) {
    res.render('app', {
        user: req.user || null
    });
};

exports.index = function(req, res){
    res.render('index', {
        user: req.user || null
    });
};

exports.admin = function(req, res){
    res.render('admin', {
        user: req.user || null
    });
};

exports.signup = function(req, res){
    res.render('signup', {
        user: req.user || null
    });
};

exports.resetPassword = function(req, res){
    res.render('reset-password', {
        user: req.user || null
    });
};
