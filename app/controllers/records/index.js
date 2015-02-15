'use strict';

var mongoose = require('mongoose'),
    passport = require('passport'),
    Record = mongoose.model('Record');

exports.list = function(req, res) {
    var obj = {};

    // set up
    Record.find()

    res.json(obj);
};

exports.findOne = function(req, res) {
    var recordId = req.params.recordId;

    Record.find(recordId, function(err, record){
        if(err) { console.log(err); }
        if(!record) { console.log('No record'); }

        res.json(record);
    });
};

exports.sort = function(req, res) {
    var sortId = req.params.sortId;

    Record.find().
        sort(sortId).
        exec(function(err, record){
            if(err) { console.log(err); }
            if(!record) { console.log('No record'); }

            res.json(record);
        });
};

exports.filter = function(req, res) {

};

exports.sortFilter = function(req, res) {

};
